import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MovieDetailsScreenProps {}

const MovieDetailsScreen = (props: MovieDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MovieDetailsScreen</Text>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: {}
});
