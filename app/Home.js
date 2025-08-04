import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo(a)!</Text>
      <Text style={styles.subtitulo}>Escolha uma opção:</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar Paciente"
          onPress={() => navigation.navigate('CadastroPaciente')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Ver Lista de Pacientes"
          onPress={() => navigation.navigate('ListaPacientes')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
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
  buttonContainer: {
    marginVertical: 10,
  },
});
