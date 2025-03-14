import React, { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

const PrecoScreen = ({ navigation }) => {
  const [nomeItem, setNomeItem] = useState('');
  const [precoInicial, setPrecoInicial] = useState('');
  const [percentualAjuste, setPercentualAjuste] = useState('');

  const calcularNovoPreco = () => {
    if (!nomeItem || !precoInicial || !percentualAjuste) {
      Alert.alert('Aviso', 'Por favor, preencha todos os campos!');
      return;
    }

    const preco = parseFloat(precoInicial);
    const ajuste = parseFloat(percentualAjuste);

    if (isNaN(preco) || isNaN(ajuste)) {
      Alert.alert('Erro', 'Insira valores numéricos válidos!');
      return;
    }

    navigation.navigate('NovoPreco', {
      nomeItem,
      precoInicial: preco,
      percentualAjuste: ajuste,
    });
  };

  return (
    <ImageBackground
      source={require('./assets/fundo.jpg')}
      style={styles.container}
    >
      <Text style={styles.title}>Reajuste de Preço</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Item"
        value={nomeItem}
        onChangeText={setNomeItem}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço Inicial"
        keyboardType="numeric"
        value={precoInicial}
        onChangeText={setPrecoInicial}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de Ajuste"
        keyboardType="numeric"
        value={percentualAjuste}
        onChangeText={setPercentualAjuste}
      />
      <Button title="Recalcular" onPress={calcularNovoPreco} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default PrecoScreen;