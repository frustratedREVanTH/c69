import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from "expo-permissions" ;
import {BarCodeScanner} from "expo-bar-code-scanner"

export default class TransactionScreen extends React.Component {
  constructor(){
super();
this.state = {
  hascamerapermission : null,
  scanned:false,
  scanneddata:""
}
  }
getcameraPermission = async()=>{
  const {status}=await Permissions.askAsync(Permissions.CAMERA)
  this.setState({
    hascamerapermission:status==="granted"
  })
}
    render() {
      const hascamerapermission = this.state.hascamerapermission;
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {styles.displaytext} >
          {hascamerapermission===true?this.state.scanneddata:"requestcamerapermission"}
          </Text>       
          <TouchableOpacity style = {styles.display } 
          onPress = {this.getcameraPermission} > 

            <Text style = {styles.displaytext} >
              scan QR code

            </Text>
            
       </TouchableOpacity>

       
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    },
    display : {
      backgroundColor:"red",
      padding:10,
      margin:10,
    },
    displaytext:{
      fontSize:15,
      alignSelf:"center",

    }
  });
  