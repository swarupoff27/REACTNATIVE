import React from 'react';
import { StyleSheet,TextInput,
        Text,Image,
        TouchableOpacity,
        View, 
         
        } from 'react-native';


import Logo from '../components/Logo';


export default function Login({navigation}) {
    

    return(
        
        <View style={styles.container}>
            
            <Logo/>

            <TextInput style={styles.inputBox} placeholder="Email-id" />
            
            <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true} />
              
            <View>

                <TouchableOpacity onPress={ () => navigation.navigate('GenerateOTP')}>
                    <Text style={styles.ForgotPasswordText} >Forgot Password?</Text>
                </TouchableOpacity>
                    
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gotoprofile')}>
                <Text style={styles.buttonText}>Login</Text>    
            </TouchableOpacity>
                      
            <View style={styles.signupTextContainer}>

                <Text style={styles.signupText}>Don't have an account? </Text>
                    
                <TouchableOpacity onPress={ () => navigation.navigate('Signup') }>
                    <Text  style={styles.signupButton}>Signup</Text>
                </TouchableOpacity>
                    
            </View>

            <View style={styles.socialMediaIcons}>
                
                <TouchableOpacity>
                    <Image style={{width:40, height:40, marginRight:10}}
                    source={require('../images/insta.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image style={{width:36, height:36, marginLeft:10}}
                    source={require('../images/fb.png')}/>
                </TouchableOpacity>

            </View>

        </View>    

    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:30
    },
    

    signupTextContainer:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection: 'row',
        
    },

    signupText:{
        fontSize:12,
        
    },

    signupButton:{
        fontSize:16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        backgroundColor:'#efe83e'
    },
    
    socialMediaIcons:{
        marginTop:15,
        marginBottom:10,
        flexDirection:'row',
        
        
    },


    HelpButton:{
        marginTop:40,
        marginLeft:255


    },

    HelpText:{
        textDecorationLine: 'underline',
        fontWeight:'bold',

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

