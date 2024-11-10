import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchCategories } from './utils/api';
import { useEffect, useState } from 'react';
export default function App() {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await fetchCategories();
        setCategories(d);
      } catch (error) { }
    };
    fetchData();
  },[])



  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {
        categories.map((category) => (
          <Text key={category.id}>{category.name}</Text>
        ))
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
