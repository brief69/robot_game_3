import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import mockRobotData from '../data/mockRobotData.json';

function ObservationScreen({ navigation }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    // ここでロボットのデータを読み込む。実際のアプリではAPIからデータを取得することが多いが、
    // このデモではmockデータを使用する。
    setRobots(mockRobotData);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ロボット観察</Text>
      <ScrollView style={styles.scrollView}>
        {robots.map((robot, index) => (
          <View key={index} style={styles.robotContainer}>
            <Text style={styles.robotText}>名前: {robot.name}</Text>
            <Text style={styles.robotText}>タイプ: {robot.type}</Text>
            <Text style={styles.robotText}>ステータス: {robot.status}</Text>
          </View>
        ))}
      </ScrollView>
      <Button
        title="ホームに戻る"
        onPress={() => navigation.navigate('Home')}
      />
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
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  robotContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  robotText: {
    fontSize: 18,
  },
});

export default ObservationScreen;
