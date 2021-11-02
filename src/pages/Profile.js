import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity,} from 'react-native';

import Logo from '../components/Logo';

export default function Profile({navigation}) {
    return(
        <View style={styles.container}>

            <Logo/>
            
            
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Logout')}>
                <Text style={styles.buttonText}>Logout</Text>    
            </TouchableOpacity>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:400
      
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
        backgroundColor:'#af0404',
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