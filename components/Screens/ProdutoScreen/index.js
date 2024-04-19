import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../../contexts/CarrinhoContext';

const windowWidth = Dimensions.get('window').width;

const ProdutoScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const { addItemToCart } = useCart(); // Utiliza o hook useCart do contexto

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
    <Pressable
      style={styles.productContainer}
      onPress={() => navigation.navigate('DetalhesProduto', { productId: item.id })}
    >
      <Image style={styles.productImage} source={{ uri: `http://192.168.18.36:3000/api/produtos/imagem/${item.imagens[0].caminhoImagem}` }} />
      <Text style={styles.productName}>{item.nome}</Text>
      <Text style={styles.productDescription}>{item.descricao}</Text>
      <Pressable style={styles.addButton} onPress={() => addItemToCart(item)}>
        <FontAwesomeIcon icon={faPlus} style={{ fontSize: 18, color: 'white' }} />
      </Pressable>
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <Pressable
        style={styles.floatingButton}
        onPress={() => navigation.navigate('carrinho')}
      >
        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}/>
      </Pressable>
    </View>
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
    position: 'relative',
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
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'blue',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    width: 120,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Para sombra no Android
  },
});

export default ProdutoScreen;
