import { StyleSheet, Text, View } from 'react-native';

export default function ProdutoScreen() {
  return (
    <View style={styles.container}>
        <Text>Produto!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})