import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>

        <View>
            <Text style={styles.title}>
                Jobizz
            </Text>

            <Text style={styles.welcome}>
                Welcome Back 👋
            </Text>

            <Text style={styles.lets}>
                Let's log in. Apply to jobs!
            </Text>
        </View>

    <View>
      <View style={styles.but}>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Name'/>
      </View>
     
      <View style={styles.but}>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder='Email'/>
      </View>

      <View style={styles.log}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>

    </View>

     <View>
       <View style={styles.text5}>
            <Image source={require('../components/Line182.png')} style={styles.person} />
            <Text style={styles.text7}> Or continue with </Text>
            <Image source={require('../components/Line182.png')} style={styles.person} />
       </View> 
     
       <View style={styles.text4}>
            <View style={styles.apps}><Image source={require('../components/apple.png')} style={styles.app1} /></View>
            <View style={styles.apps}><Image source={require('../components/google1.png')} style={styles.app2} /></View>
            <View style={styles.apps}><Image source={require('../components/facebook.png')} style={styles.app3} /></View>
       </View>
       <View >
        <Text style={styles.text3}> Don't have an account? <Text style={styles.register}>Register!</Text> </Text>
       </View>
     </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAFAFD',
  },
  input: {
    height: 52,
    borderRadius: 10,
    fontSize: 19,
    fontFamily: 'monospace',
    fontWeight: 500,
    paddingLeft: 15,
    cursor: 'pointer',
    color: '#afb0b6'
  },
  but: {
    borderColor: '#afb0b6',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#356899',
    padding: 10,
    height: 56,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontFamily: 'monospace',
    fontWeight: 500,
    paddingTop: 5,
  },
  log: {
    marginTop: 17,
    marginBottom: 50,
  },
  text7: {
    fontSize: 19,
    fontFamily: 'Circular',
    color: '#afb0b6'
  },
  register:{
    color: 'blue',
  },
  apps: {
    height: 66,
    width: 66,
    paddingTop: 15,
    borderRadius: 30,
    backgroundColor: 'white',
    paddingLeft: 15,
    marginRight: 25,
  },
  app1: {
    height: 34.12,
    width: 28.01,
    left: 2.43,
  },
  app2: {
    height: 29.33,
    width: 29.33,
    left: 2.33,
    top: 5.33
  },
  app3: {
    height: 29.5,
    width: 29.35,
    left: 2.33,
    top: 5.82
  },
  text5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text3: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'Circular',
    color: '#afb0b6',
    marginTop: 20
  },
  text4: {
    height: 56,
    width: 216,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 79,
    marginTop: 20,
  },
  lets: {
    fontSize: 19,
    fontFamily: 'Franklin',
    fontWeight: 400,
    color: '#afb0b6',
    marginBottom: 35,
    left: 5,
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'Semibold',
    fontWeight: 600,
    marginBottom: 10,
    left: 5,
    lineHeight: 33.6
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: '#356899',
    left: 5,
    lineHeight:33,
  },
});

export default LoginScreen;