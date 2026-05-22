import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainTabs from './screens/MainTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}