import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroPaciente({ navigation }) {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = async () => {
    if (!nome || !peso || !altura || !dataNascimento) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const novoPaciente = {
      nome,
      peso: parseFloat(peso),
      altura: parseFloat(altura),
      data_nascimento: dataNascimento,
    };

    try {
      const dadosSalvos = await AsyncStorage.getItem('pacientes');
      const pacientes = dadosSalvos ? JSON.parse(dadosSalvos) : [];

      pacientes.push(novoPaciente);

      await AsyncStorage.setItem('pacientes', JSON.stringify(pacientes));

      Alert.alert('Sucesso', 'Paciente cadastrado!');
      setNome('');
      setPeso('');
      setAltura('');
      setDataNascimento('');
      navigation.navigate('ListaPacientes');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.circle, styles.topLeft]} />
      <View style={[styles.circle, styles.bottomRight]} />
      <View style={[styles.circle2, styles.topLeft2]} />
      <View style={[styles.circle2, styles.bottomRight2]} />
      <View style={[styles.circle3, styles.topLeft3]} />
      <View style={[styles.circle3, styles.bottomRight3]} />

      <Text style={styles.titulo}>Cadastrar Paciente</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  titulo: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
    color: '#000',
    width: '80%',
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
