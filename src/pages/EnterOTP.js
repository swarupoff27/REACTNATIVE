import React,{Component} from 'react';
import { StyleSheet,Text,TextInput,View,TouchableOpacity,} from 'react-native';
        
import Logo from '../components/Logo';


export default function EnterOTP({navigation}) {
    

    return(
        <View style={styles.container}>
            <Logo/>
            <TextInput style={styles.otpText}>OTP has been sent on your mobile number.</TextInput>
            <TextInput style={styles.inputBox} placeholder="Enter OTP"/>
            
        
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Next')}>
            <Text style={styles.buttonText}>Next</Text>    
        </TouchableOpacity>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:50,
      marginBottom:200
      
    },
    otpText:{
        marginTop:40
    },
    inputBox: {
        width:300,
        height:50,
        backgroundColor:'#c3c9c6',
        borderRadius:0,
        paddingHorizontal:15,
        marginVertical:8,
    },

    

    button:{
        width:100,
        height:50,
        backgroundColor:'#000000',
        borderRadius:25,
        paddingHorizontal:10,
        marginVertical:8,
        justifyContent:'center',
        alignItems: 'center'
        
    },

    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'#ffffff',


    },

  });