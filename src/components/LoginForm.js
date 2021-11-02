import {StatusBar} from 'expo-status-bar';
import React,{Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet,
        Text,TextInput,
        View,TouchableOpacity,
         
        } from 'react-native';





export default function LoginForm() {
  

    return(
        <View style={styles.container}>

            {/* <TextInput style={styles.inputBox} placeholder="Mobile Number"/>
            <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true}/>
              
            <View>

                <TouchableOpacity >
                    <Text style={styles.ForgotPasswordText} >Forgot Password?</Text>
                </TouchableOpacity>
                    
            </View>
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} >Login</Text>    
            </TouchableOpacity> */}
        
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    },

    inputBox: {
        width:300,
        height:50,
        backgroundColor:'#c3c9c6',
        borderRadius:0,
        paddingHorizontal:15,
        marginVertical:8,
    },

    ForgotPasswordText:{
        paddingRight:0,
        marginLeft:190,
        marginBottom:30,
        fontSize:13,
        textDecorationLine: 'underline'
        
    },

    

    button:{
        width:100,
        height:50,
        backgroundColor:'#00b96c',
        borderRadius:25,
        paddingHorizontal:10,
        marginVertical:8,
        justifyContent:'center',
        alignItems: 'center'
        
    },

    buttonText:{
        fontSize:16,
        fontWeight:'bold',


    },

  });