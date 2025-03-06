Sim! Além do **`expo-router`**, você pode usar o **React Navigation** com o componente **`Linking`** para permitir navegação por links. Aqui estão algumas abordagens alternativas:  

---

### 1️⃣ **Usando `Linking` do React Native** (Sem `expo-router`)  
O `Linking` permite abrir URLs internas do app e pode ser usado junto com o **React Navigation**.  

#### 📌 Passos:
1. Instale o React Navigation, caso ainda não tenha:
   ```sh
   npx expo install @react-navigation/native
   npx expo install @react-navigation/native-stack
   ```

2. **Crie a navegação com `Linking`**:

#### 📜 Código:
```tsx
import React from "react";
import { View, Text, Button, StyleSheet, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>🏠 Home</Text>
    <Button title="Ir para Perfil" onPress={() => navigation.navigate("Profile")} />
    <Button title="Abrir Pedidos (Linking)" onPress={() => Linking.openURL("myapp://pedidos")} />
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>👤 Perfil</Text>
  </View>
);

const OrdersScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>📦 Pedidos</Text>
  </View>
);

const linking = {
  prefixes: ["myapp://"], // Define um esquema de deep linking
  config: {
    screens: {
      Home: "",
      Profile: "profile",
      Orders: "pedidos",
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
});
```

---

### 🚀 Alternativas para Navegação:
#### ✅ **Componente `Linking`** (Como no exemplo acima)
- Permite abrir telas com links (`Linking.openURL("myapp://pedidos")`).
- Funciona tanto dentro do app quanto fora (exemplo: clicar em um link no navegador e abrir o app).

#### ✅ **`expo-router`** (Já mencionado antes)
- Navegação baseada em arquivos.
- Mais simples para quem vem do Next.js.

#### ✅ **React Navigation com Bottom Tabs**
- Caso queira uma navegação parecida com um app de celular, pode usar `createBottomTabNavigator()`.

Cada abordagem tem vantagens diferentes. Você quer algo mais voltado para **deep linking** ou apenas quer navegar entre telas com **links internos**? 🚀