import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeItem, removeItem } from './cartSlice';
import { View, Text, Button } from 'react-native';
import Demo from './Demo';

export function AddCart() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const handleChangeItem = (id, quantityChange = 0) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            const newQuantity = item.quantity + quantityChange;
            if (newQuantity > 0) {
                dispatch(changeItem({
                    id: id,
                    name: item.name,
                    price: item.price,
                    quantity: newQuantity
                }));
            } else {
                dispatch(removeItem(id));
            }
        } else {
            dispatch(changeItem({
                id: id || 2,
                name: 'Sản phẩm 2',
                price: 1300,
                quantity: 12
            }));
        }
    };

    return (
        <View>
            {cart.map(item => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.quantity}</Text>
                    <Button title="+" onPress={() => handleChangeItem(item.id, 1)} />
                    <Button title="-" onPress={() => handleChangeItem(item.id, -1)} />
                    <Button title="Xóa" onPress={() => dispatch(removeItem(item.id))} />
                </View>
            ))}
            {cart.length === 0 && <Text>Không có sản phẩm nào trong giỏ hàng</Text>}
            {cart.length > 0 && <Text>Tổng tiền: {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</Text>}
            <Button title="Thêm" onPress={() => handleChangeItem()} />
            <Demo />
        </View>
    );
}
export default AddCart;
