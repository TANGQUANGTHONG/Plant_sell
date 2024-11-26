import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ProfileScreen = () => {
  const navigation = useNavigation(); // Sử dụng hook để lấy navigation

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profilePicture}
            source={{ uri: 'https://via.placeholder.com/50' }}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Trần Minh Trí</Text>
            <Text style={styles.profileEmail}>tranminhtri@gmail.com</Text>
          </View>
        </View>
        <View style={styles.profileMenu}>
          <View style={styles.menuSection}>
            <Text style={styles.menuHeader}>Chung</Text>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('EditProfile')}
            >
              <Text style={styles.menuItemText}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Cẩm nang trồng cây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Lịch sử giao dịch</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => navigation.navigate('QandA')}
            >
              <Text style={styles.menuItemText}>Q & A</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.menuSection}>
            <Text style={styles.menuHeader}>Bảo mật và Điều khoản</Text>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Điều khoản và điều kiện</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Chính sách quyền riêng tư</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={[styles.menuItemText, styles.logout]}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  profileContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#888',
  },
  profileMenu: {
    padding: 20,
  },
  menuSection: {
    marginBottom: 20,
  },
  menuHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#555',
  },
  logout: {
    color: '#e91e63',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
