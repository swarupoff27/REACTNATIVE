import React from 'react';
import { StyleSheet,Text,Image,View} from 'react-native';

export default function Logo() {
    return(
        <View style={styles.container}>
        <Image style={{width:100, height:100}}
                source={require('../images/orologo.png')}/>
                <Text style={styles.logoText}>On Road Out</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop:100,
      
    },

    logoText:{
        marginVertical:15,
        fontSize:18,
        
    }


  });