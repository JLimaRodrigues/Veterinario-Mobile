import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProdutoScreen from '../Screens/ProdutoScreen';
import ServicoScreen from '../Screens/ServicoScreen';

export default function StackRoutes(){

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="produtos"
          component={ProdutoScreen}
          options={{
            tabBarLabel: 'Produtos'
          }}
        />

        <Stack.Screen 
          name="servicos"
          component={ServicoScreen}
          options={{
            tabBarLabel: 'Serviços'
          }}
        />
    
      </Stack.Navigator>
    )
}