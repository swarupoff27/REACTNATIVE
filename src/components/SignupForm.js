import {StatusBar} from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet,CheckBox,isSelected,setSelection,
        Text,TextInput,
        View,TouchableOpacity,
         
        } from 'react-native';



export default function SignupForm({navigation}) {
 

    return(
        <View style={styles.container}>
            
            {/* <TextInput style={styles.inputBox} placeholder="Name"/>
            <TextInput style={styles.inputBox} placeholder="Email-id (Optional)"/>
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

            
            

        
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Signup</Text>    
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