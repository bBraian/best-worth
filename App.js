import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { Router } from './src/Router';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';
import { ProductsContextProvider } from './src/context/ProductsContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  return (
    <NavigationContainer style={styles.container}>
      
      <StatusBar  
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true} 
      />
      <ProductsContextProvider>
        {fontsLoaded ? <Router /> : ""}
      </ProductsContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
