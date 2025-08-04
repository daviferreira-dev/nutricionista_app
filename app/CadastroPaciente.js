import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function CadastroPaciente({ navigation }) {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = () => {
    if (!nome || !peso || !altura || !dataNascimento) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    fetch('http://127.0.0.1:8000/pacientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        nome,
        peso: parseFloat(peso),
        altura: parseFloat(altura),
        data_nascimento: dataNascimento,
      }),
    })    
      .then((response) => {
        if (!response.ok) throw new Error('Erro ao cadastrar paciente');
        return response.json();
      })
      .then((data) => {
        Alert.alert('Sucesso', 'Paciente cadastrado!');
        setNome('');
        setPeso('');
        setAltura('');
        setDataNascimento('');
        navigation.navigate('ListaPacientes'); // voltar para listagem
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível cadastrar o paciente');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});
