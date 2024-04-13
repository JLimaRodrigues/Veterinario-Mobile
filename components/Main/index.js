import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from '../TabRoutes';
import StackRoutes from '../StackRoutes';
import ProdutoScreen from '../Screens/ProdutoScreen';
import ServicoScreen from '../Screens/ServicoScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBasketShopping, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Drawer = createDrawerNavigator();

export default function Main(){
  return (
 <NavigationContainer>
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
 </NavigationContainer>
  )
}