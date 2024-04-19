import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useCart } from '../../../contexts/CarrinhoContext';

const CarrinhoScreen = () => {
  const { cartItems, removeItemFromCart } = useCart(); // Utiliza o hook useCart do contexto

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {Object.keys(cartItems).length > 0 ? (
        Object.keys(cartItems).map((itemId) => {
          const item = cartItems[itemId];
          return (
            <View key={itemId} style={styles.item}>
              <Text>{item.nome}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>R$ {item.preco}</Text>
              <Pressable onPress={() => removeItemFromCart(itemId)}>
                <Text>Remover 1</Text>
              </Pressable>
            </View>
          );
        })
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
        width: '80%',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
      },
      emptyCartText: {
        fontSize: 16,
        color: '#777',
      },
});

export default CarrinhoScreen;
