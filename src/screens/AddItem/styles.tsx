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
  input1:{
    color: Colors.black,
    borderWidth:1,
    marginTop: 10,
    borderRadius:10,
    width:'100%',
    marginHorizontal:12,
    fontSize:16,
    paddingLeft:20,
    height:45
  },
  label:{
    color:'black',
    marginLeft:'3.5%',
    marginTop:10
  }
});
