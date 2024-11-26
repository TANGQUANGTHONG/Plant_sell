import { StyleSheet}  from 'react-native'
const AppStyle = StyleSheet.create({
    Container:{
        height:'100%',
        alignItems:'center',
        backgroundColor:'#DDDDDD',
      },
        Container1:{
            borderRadius: 10,
            borderColor:'#DDDDDD',
            borderWidth: 1,
            width: '90%', 
            backgroundColor: '#FFFFFF',
            marginVertical: 10,
            elevation: 5,
        },
        img:{
            width:'95%',
            height:100,
           margin:10,
        },
        TextXam:{
            color:'#C0C0C0',
            marginTop:7,
            marginLeft:10
        },
        TextDen:{
            color:'Black',
            marginLeft:10
        },
        ChiTiet:{
            color:'white'
        },
        Title:{
            fontSize:30,
            fontWeight:'bold',
            left:1,
            marginTop:5       
         },
        button: {
            width: '80%',
            height: 40,
            backgroundColor: '#33CCFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:35,
            marginTop:10,
            marginBottom:10,
            borderRadius:5
          },
          buttonText: {
            color: 'white',
            fontSize: 18,
          },
          
})
export default AppStyle;