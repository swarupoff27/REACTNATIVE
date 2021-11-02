import React from 'react';
import { StyleSheet,TextInput,CheckBox,isSelected,setSelection,
        Text,
        TouchableOpacity,
        View,
         
         
        } from 'react-native';


import Logo from '../components/Logo';


export default function Signup({navigation}) {
    



    return(
        <View style={styles.container}>
            <Logo/>
            
            <TextInput style={styles.inputBox} placeholder="Name"/>
            <TextInput style={styles.inputBox} placeholder="Email-id"/>
            <TextInput style={styles.inputBox} placeholder="Mobile Number"/>
            <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true}/>
            <TextInput style={styles.inputBox} placeholder="You are a.."/>
            
            
            

            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Text style={styles.TermsLabel}>I agree to Terms and conditions of OnRoadOut.</Text>
            </View>

        
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Gotoprofile')}>
                <Text style={styles.buttonText}>Signup</Text>    
            </TouchableOpacity>


            <View style={styles.signupTextContainer}>

                <Text style={styles.signupText}>Already have an account?</Text>


                <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.signinButton}>Signin</Text>
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
      marginBottom:130
    },

    signupTextContainer:{
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection: 'row',
        marginTop:10
    },

    signupText:{
        fontSize:13,
    },

    signinButton:{
        fontSize:16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        backgroundColor:'#00b96c'
    },


    inputBox: {
        width:300,
        height:35,
        backgroundColor:'#c3c9c6',
        borderRadius:0,
        paddingHorizontal:15,
        marginVertical:8,
    },

    checkboxContainer:{
        flexDirection:'row',

    },

    TermsLabel:{
        marginRight:30,
        fontSize:12,
        marginTop:9
    },

    button:{
        width:100,
        height:50,
        backgroundColor:'#efe83e',
        borderRadius:25,
        paddingHorizontal:10,
        marginVertical:8,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:30
        
    },

    buttonText:{
        fontSize:16,
        fontWeight:'bold',


    },


  });