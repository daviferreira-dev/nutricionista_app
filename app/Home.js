import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
       <View style={[styles.circle, styles.topLeft]} />
        <View style={[styles.circle, styles.bottomRight]} />
        <View style={[styles.circle2, styles.topLeft2]} />
        <View style={[styles.circle2, styles.bottomRight2]} />
        <View style={[styles.circle3, styles.topLeft3]} />
        <View style={[styles.circle3, styles.bottomRight3]} />
      <Text style={styles.titulo}>Bem-vindo(a)!</Text>
      <Text style={styles.subtitulo}>Escolha uma opção:</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CadastroPaciente')}
      >
        <Text style={styles.textoBotao}>Cadastrar Paciente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('ListaPacientes')}
      >
        <Text style={styles.textoBotao}>Ver Lista de Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#01E7D0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#00e5dc',
  },
  topLeft: {
    top: -50,
    left: -50,
  },
  bottomRight: {
    bottom: -70,
    right: -50,
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  topLeft2: {
    top: 30,
    left: -110,
  },
  bottomRight2: {
    bottom: 15,
    right: -80,
  },
  circle3: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#00B1A0',
  },
  topLeft3: {
    top: -110,
    left: 40,
  },
  bottomRight3: {
    bottom: -110,
    right: 40,
  },
});
