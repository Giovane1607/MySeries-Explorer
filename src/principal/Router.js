import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/LoginScreen';
import SeriesPages from './pages/SeriesPages';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6ca2f7',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
        },
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        initialParams={{ username: 'Usuario padrão' }}
        options={{
          title: 'Bem vindo!',
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name='Main'
        component={SeriesPages}
        options={{
          title: 'Séries',
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default function App(){
  return(
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
}