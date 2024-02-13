import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

function RobotTrainingScreen({ navigation }) {
  const [trainingStatus, setTrainingStatus] = useState('未開始');

  const startTraining = () => {
    setTrainingStatus('進行中...');
    // ここで機械学習モデルをトレーニングするロジックを実装します。
    // 仮想空間でのロボットトレーニングシミュレーションを想定しています。
    // トレーニングが完了したら、状態を更新します。
    setTimeout(() => {
      setTrainingStatus('完了');
    }, 5000); // 仮想的なトレーニング時間を5秒とします。
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ロボットトレーニング</Text>
      <Text style={styles.status}>トレーニング状態: {trainingStatus}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={startTraining}
        disabled={trainingStatus === '進行中...'}
      >
        <Text style={styles.buttonText}>トレーニングを開始</Text>
      </TouchableOpacity>
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
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default RobotTrainingScreen;
