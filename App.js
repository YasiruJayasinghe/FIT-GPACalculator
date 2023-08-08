import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomScreen from './screens/WelcomScreen';
import DashboardScreen1 from './screens/DashboardScreen1';
import SemModuleScreen from './screens/SemModuleScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomScreen" component={WelcomScreen} />
        <Stack.Screen name="DashboardScreen1" component={DashboardScreen1} />
        <Stack.Screen name='SemModuleScreen' component={SemModuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

