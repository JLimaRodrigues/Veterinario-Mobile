import * as React from 'react';
import { StyleSheet, Text, View, Linking, Platform } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function EquipeScreen() {
  const CardEquipe = () => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text>Jefferson Lima Rodrigues</Text>

          <Card.Cover source={{ uri: 'https://picsum.photos/700' }}/>

          <Button 
              mode="contained" 
              onPress={() => Platform.OS === 'ios'? Linking.openURL('https://github.com/JLimaRodrigues') : openURL('https://github.com/JLimaRodrigues')}
              style={{ margin: 2 }}
              >
              Github
            </Button>
        </Card.Content>
      </Card>
    );
  };

  return (
    <View>
      <CardEquipe />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    width: 200,
    height: 300,
    backgroundColor: '#fff',
    shadowColor: 'black'
  },
});