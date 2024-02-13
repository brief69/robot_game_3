import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>仮想空間ロボットトレーニング</Text>
      <Image source={require('../assets/robots.png')} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button
          title="ロボットトレーニングを始める"
          onPress={() => navigation.navigate('RobotTraining')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="観察を始める"
          onPress={() => navigation.navigate('Observation')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default HomeScreen;
