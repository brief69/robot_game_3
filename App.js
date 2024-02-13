import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import RobotTrainingScreen from '@screens/RobotTrainingScreen';
import ObservationScreen from '@screens/ObservationScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '@styles/GlobalStyles';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
          <Stack.Screen name="RobotTraining" component={RobotTrainingScreen} options={{ title: 'ロボットトレーニング' }} />
          <Stack.Screen name="Observation" component={ObservationScreen} options={{ title: '観察' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
