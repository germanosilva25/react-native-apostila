import { Image, StyleSheet, Platform, View } from 'react-native';

import TelaLogin, {Cabecalho, Corpo, Rodape} from '@/components/Login';
import Formulario, {Campo} from '@/components/Formulario';
import { getBackgroundColorAsync } from 'expo-system-ui';
import Select from '@/components/Select';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Select />
    </View>
  );
}

const styles = StyleSheet.create({

});
