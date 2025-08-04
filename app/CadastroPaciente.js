import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
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
        console.error(rror);
        Alert.alert('Erro', 'Não foi possível cadastrar o paciente');
      });
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

       <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('ListaPacientes')}
            >
              <Text style={styles.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: "center",
    alignItems: 'center',
    overflow: 'hidden'
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
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo:{
    fontWeight : 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',            
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10,
    color: '#000',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    marginBottom: 10,
    color: '#000',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 12,
    color: '#000',
  },
  linkButton: {
    fontSize: 12,
    color: 'blue',
    textDecorationLine: 'underline',
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

