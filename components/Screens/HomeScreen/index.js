import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.18.36:3000/api/usuarios');
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Card style={styles.card}>
        <Text>Olá Mundo</Text>
      </Card>
    </View>
    <View style={styles.content}>
      <FlatList
        data={data}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <Card style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.idade}</Text>
            {/* Adicione mais campos conforme necessário */}
          </Card>
        )}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#7a9df0',
    height: '30%',
  },
  card: {
    height: 100,
    width: 300,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
    marginTop: '10%',
    padding: 20,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});