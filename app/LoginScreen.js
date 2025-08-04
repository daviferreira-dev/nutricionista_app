import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class LoginScreen extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.circle, styles.topLeft]} />
        <View style={[styles.circle, styles.bottomRight]} />
        <View style={[styles.circle2, styles.topLeft2]} />
        <View style={[styles.circle2, styles.bottomRight2]} />

         <Text style={styles.titulo}>Entre na sua conta</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#999"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={this.state.senha}
            onChangeText={(text) => this.setState({ senha: text })}
          />

<View style={styles.linkContainer}>
  <Text style={styles.linkText}>Crie a sua conta </Text>
  <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
    <Text style={styles.linkButton}>Crie agora</Text>
  </TouchableOpacity>
</View>

<TouchableOpacity style={styles.botao} onPress={() => this.props.navigation.navigate('IMC')}>
  <Text style={styles.texto}>Entrar</Text>
</TouchableOpacity>
        </View>
      </View>
    );
  }
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
    backgroundColor: '#00f0e0', 
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  titulo:{
    fontWeight : 'bold',
    fontSize: 30,
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
    bottom: -50,
    right: -50,
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F0F0F0',
  },
  topLeft2: {
    top: -110,
    left: 40,
  },
  bottomRight2: {
    bottom: -110,
    right: 40,
  },
});

export default LoginScreen;
