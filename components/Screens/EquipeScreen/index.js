import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function EquipeScreen({ navigation }) {
  const CardEquipe = () => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text>Card title</Text>
          <Text>Card content</Text>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View>
      <CardEquipe />
      <Button mode="contained" onPress={() => navigation.navigate('profile')}>
        Aperte aqui!
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 100,
    backgroundColor: '#fff',
    borderColor: 'red',
    borderWidth: 1,
  },
});
