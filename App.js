import React from 'react';
import {StyleSheet} from 'react-native';

import Routes from './src/Routes';

export default function App() {   
  return (   
        <Routes/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  HelpText:{
    marginTop:30,
    textDecorationLine: 'underline',
    marginLeft:270,
  }

});

