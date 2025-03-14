import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TelaResultado = ({ route }) => {
  const { item, precoOriginal, percentualIncremento } = route.params;

  const valorIncremento = (precoOriginal * percentualIncremento) / 100;
  const precoFinal = precoOriginal + valorIncremento;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Resultado</Text>
      <Text style={estilos.texto}>Item: {item}</Text>
      <Text style={estilos.texto}>Preço Original: R${precoOriginal.toFixed(2)}</Text>
      <Text style={estilos.texto}>Percentual de Incremento: {percentualIncremento}%</Text>
      <Text style={estilos.texto}>Valor do Incremento: R${valorIncremento.toFixed(2)}</Text>
      <Text style={estilos.texto}>Preço Final: R${precoFinal.toFixed(2)}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#4169E1',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default TelaResultado;
