import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';

import icon from './assets/LogoGux.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.logo} />
      <Text style={styles.title}>Inicio de Sesión</Text>
      <StatusBar style="auto" />

      {/* Campo de Nombre de Usuario */}
      <Text style={styles.label}>Nombre de Usuario</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ingrese su nombre de usuario"
        placeholderTextColor="#aaa"
      />

      {/* Campo de Contraseña */}
      <Text style={styles.label}>Contraseña</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ingrese su contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      {/* Botón de Inicio de Sesión */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce7f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#000000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

