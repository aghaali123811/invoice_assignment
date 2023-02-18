import { StyleSheet } from 'react-native';
import Colors from '../../common/colors/Colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    padding: 20,
    paddingTop: 10,
  },
  heading: {
    fontSize: 26,
    color: Colors.lightBlack,
    fontWeight: '500',
    marginLeft: 14,
    marginTop: 15,
  },
  add: {
    fontSize: 20,
    color: Colors.lightBlack,
    fontWeight: '500',
    marginLeft: 14,
    marginTop: 20,
  },
  label: {
    color: Colors.black70,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    paddingLeft: 20,
    marginTop: 15,
  },

  flatListContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
    borderBottomColor: Colors.greyText,
    borderBottomWidth: 0.4
  },
    name:{
      alignSelf: 'center',
      color: Colors.greyText,
      fontSize: 14,
      width: '25%'
  },
  date: {
      alignSelf: 'center',
      color: Colors.greyText,
      fontSize: 14,
      width: '15%'
  },
  description: {
      alignSelf: 'center',
      color: Colors.DeepPurpleText,
      fontSize: 14,
      width: '40%',
      marginLeft: '0%',
      textAlign: 'center'
  },
  amount: {
      alignSelf: 'center',
      color: Colors.DeepPurpleText,
      fontSize: 14,
      width: '10%',
      textAlign: 'right'
  },
  flexRow: { 
    width: '100%', 
    justifyContent: 'space-between', 
    flexDirection: 'row' 
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 15,
  },
  input1:{
    color: Colors.black,
    borderWidth:1,
    marginTop: 10,
    borderRadius:10,
    width:'100%',
    marginHorizontal:12,
    fontSize:16,
    paddingLeft:20
  },
  btn:{
    marginTop:10,
    backgroundColor: 'purple',
    width:'20%',
    alignItems:'center',
    borderRadius:10,
  },
  txt1:{
    fontSize:16,
   marginTop:12,
   color:Colors.white,
  },
});
