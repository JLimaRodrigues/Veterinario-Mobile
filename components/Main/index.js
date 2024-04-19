import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBasketShopping, faHandshake, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import TabRoutes from '../TabRoutes';
import ProdutoScreen from '../Screens/ProdutoScreen';
import ServicoScreen from '../Screens/ServicoScreen';
import CarrinhoScreen from '../Screens/CarrinhoScreen';

const Drawer = createDrawerNavigator();
const Stack  = createNativeStackNavigator();

function DrawerScreen(){
  return (
  <Drawer.Navigator screenOptions={{
      title: ''
    }}
    >
          <Drawer.Screen 
            name="home"
            component={TabRoutes}
            options={{
              drawerIcon: ({ color, size }) => <FontAwesomeIcon icon={faHome} color={color} size={size}/>,
              drawerLabel: 'Início'
            }}
          />

          <Drawer.Screen 
            name="produtos"
            component={ProdutoScreen}
            options={{
              drawerIcon: ({ color, size }) => <FontAwesomeIcon icon={faBasketShopping} color={color} size={size}/>,
              drawerLabel: 'Produtos'
            }}
          />

          <Drawer.Screen 
            name="servicos"
            component={ServicoScreen}
            options={{
              drawerIcon: ({ color, size }) => <FontAwesomeIcon icon={faHandshake} color={color} size={size}/>,
              drawerLabel: 'Serviços'
            }}
          />

      </Drawer.Navigator>
  );
}

export default function Main(){
  return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="voltar" component={DrawerScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="carrinho" component={CarrinhoScreen} />
  </Stack.Navigator>
 </NavigationContainer>
  )
}