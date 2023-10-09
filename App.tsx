import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackScreen} from './src/constants/constants';
import SpeakingGame3 from './src/screens/SpeakingScreen/SpeakingGame3';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SpeakingGame1Result">
        {stackScreen.map(stackItem => (
          <Stack.Screen
            key={stackItem.name}
            name={stackItem.name}
            component={stackItem.component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
