import { StyleSheet}  from 'react-native'


const AppStyle = StyleSheet.create({
    BoxButton:{
        display:'flex',
        flexDirection:'column',
    },

    Button:{
        width:100,
        height:40,
        margin:10,
        borderRadius:4,
        backgroundColor:'red',
   
},
    ButtonText:{
        color:'black',
        textAlign:'center',
        fontSize:30
        
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  

})
export default AppStyle;