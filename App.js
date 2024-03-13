import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import Main from './components/Main'

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
