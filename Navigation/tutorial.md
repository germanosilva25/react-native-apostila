Here’s a **React Native Expo** app with **React Navigation**, implementing four pages:  
- **Home (Index)**
- **Profile**
- **Orders (Pedidos)**
- **Payments (Pagamentos)**  

It uses **React Navigation (Stack + Bottom Tabs)** for smooth navigation. 🚀  

---

### 📌 Steps:
1. **Install Dependencies**:
   ```sh
   npx expo install @react-navigation/native
   npx expo install @react-navigation/native-stack
   npx expo install @react-navigation/bottom-tabs
   npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
   ```

---

### 📜 Full Code:

#### 1️⃣ **App.tsx** – Entry Point
```tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import PaymentsScreen from "./screens/PaymentsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons: any = {
              Home: "home",
              Profile: "person",
              Orders: "list",
              Payments: "card",
            };
            return <Ionicons name={icons[route.name]} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "#6200ea",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Payments" component={PaymentsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

---

#### 2️⃣ **screens/HomeScreen.tsx**
```tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Page</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default HomeScreen;
```

---

#### 3️⃣ **screens/ProfileScreen.tsx**
```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default ProfileScreen;
```

---

#### 4️⃣ **screens/OrdersScreen.tsx**
```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Orders Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default OrdersScreen;
```

---

#### 5️⃣ **screens/PaymentsScreen.tsx**
```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Payments Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

export default PaymentsScreen;
```

---

### 🚀 Features:
✅ **Bottom Tab Navigation** with icons  
✅ **Header Hidden** for cleaner UI  
✅ **Navigation Links** between pages  
✅ **Easy to Expand** with More Screens  

---

### 🎯 Run the App:
```sh
npx expo start
```

This will start Expo, and you can test on a real device or simulator.

---

This setup gives you a **modern, structured** navigation system for a React Native app using Expo. Let me know if you need any modifications! 🚀🔥