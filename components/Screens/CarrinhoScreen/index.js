import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useCart } from '../../../contexts/CarrinhoContext';

const CarrinhoScreen = () => {
  const { cartItems, removeItemFromCart } = useCart(); // Utiliza o hook useCart do contexto

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text>Quantidade: {item.qtd}</Text>
              {item.preco != null ? (
                <Text>R$ {item.preco.toFixed(2)}</Text>
              ) : (
                <Text>Preço indisponível</Text>
              )}
            </View>
            <Pressable onPress={() => removeItemFromCart(item.id)}>
              <Text style={styles.removeItem}>Remover 1</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  removeItem: {
    color: 'red',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontSize: 16,
    color: '#777',
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default CarrinhoScreen;
