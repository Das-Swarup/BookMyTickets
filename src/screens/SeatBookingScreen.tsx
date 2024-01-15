import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SeatBookingScreenProps {}

const SeatBookingScreen = (props: SeatBookingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SeatBookingScreen</Text>
    </View>
  );
};

export default SeatBookingScreen;

const styles = StyleSheet.create({
  container: {}
});
