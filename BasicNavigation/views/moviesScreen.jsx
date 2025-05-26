import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';

function MoviesScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {data.map((item) => (
            <Text key={item.id}>{item.title} - {item.releaseYear}</Text>
          ))}
        </View>
      )}
      <Button
              title="Voltar para home"
              onPress={() => navigation.goBack()}
            />
    </View>
  );
}

export default MoviesScreen;