import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function ListaPacientes({ navigation }) {
  const [pacientes, setPacientes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const carregarPacientes = async () => {
      const dadosSalvos = await AsyncStorage.getItem('pacientes');
      const lista = dadosSalvos ? JSON.parse(dadosSalvos) : [];
      setPacientes(lista);
    };

    if (isFocused) {
      carregarPacientes();
    }
  }, [isFocused]);

  const calcularIdade = (dataNascimento) => {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const calcularIMC = (peso, altura) => {
    if (!peso || !altura) return null;
    const imc = peso / (altura * altura);
    return imc.toFixed(1);
  };

  const classificarIMC = (imc) => {
    const valor = parseFloat(imc);
    if (valor < 18.5) return 'Abaixo do peso';
    if (valor < 25) return 'Peso normal';
    if (valor < 30) return 'Sobrepeso';
    if (valor < 35) return 'Obesidade grau I';
    if (valor < 40) return 'Obesidade grau II';
    if (valor < 50) return 'Obesidade grau III';
    return 'Gordão canalha';
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.navigate('CadastroPaciente')}
      >
        <Text style={styles.textoBotaoVoltar}>← Calculadora</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.lista}>
        {pacientes.map((p, index) => {
          const imc = calcularIMC(p.peso, p.altura);
          const classificacao = imc ? classificarIMC(imc) : '-';

          return (
            <View key={index} style={styles.card}>
              <View style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.nome}>{p.nome}</Text>
                <Text style={styles.detalhes}>
                  {calcularIdade(p.data_nascimento)} anos – {p.peso} kg – {p.altura} m
                </Text>
                {imc && (
                  <Text style={styles.imc}>
                    IMC: {imc} – {classificacao}
                  </Text>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  botaoVoltar: {
    marginBottom: 10,
    backgroundColor: '#01E7D0',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  textoBotaoVoltar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#00B1A0',
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalhes: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  imc: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
});
