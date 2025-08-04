import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:8081/pacientes')
      .then(response => response.json())
      .then(data => {
        setPacientes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro:', error);
        setLoading(false);
      });
  }, []);

  function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pacientes</Text>
      <FlatList
        data={pacientes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Nome: {item.nome}</Text>
            <Text>Data Nascimento: {item.data_nascimento}</Text>
            <Text>Peso: {item.peso} kg</Text>
            <Text>Altura: {item.altura} m</Text>
            <Text>IMC: {calcularIMC(item.peso, item.altura)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  card: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, marginBottom: 12 },
});
