import { StyleSheet, Text, View } from 'react-native';

export default function ServicoScreen() {
  return (
    <View style={styles.container}>
        <Text>Servico!</Text>
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