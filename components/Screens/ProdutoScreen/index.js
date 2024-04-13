import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ProdutoScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.18.36:3000/api/produtos');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar dados dos produtos:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} source={{ uri: `http://192.168.18.36:3000/api/produtos/imagem/${item.imagens[0].caminhoImagem}` }} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productDescription}>{item.descricao}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  productContainer: {
    width: (windowWidth - 30) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '80%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProdutoScreen;