Para usar o componente **`Link`** em um app **React Native Expo**, precisamos do pacote **`expo-router`**, que oferece navegação baseada em arquivos.  

---

### 📌 Passos:
1. **Instalar dependências**:
   ```sh
   npx expo install expo-router
   ```

2. **Criar estrutura de pastas**:
   ```
   my-app/
   ├── app/
   │   ├── index.tsx
   │   ├── profile.tsx
   │   ├── pedidos.tsx
   │   ├── pagamentos.tsx
   ├── app.json
   ├── package.json
   ├── tsconfig.json
   ├── babel.config.js
   ```

---

### 📜 Código Completo:

#### 1️⃣ **`app/_layout.tsx`** – Configura a Navegação
```tsx
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
```

---

#### 2️⃣ **`app/index.tsx`** – Página Inicial
```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Página Inicial</Text>
      <Link href="/profile" style={styles.link}>Ir para Perfil</Link>
      <Link href="/pedidos" style={styles.link}>Ver Pedidos</Link>
      <Link href="/pagamentos" style={styles.link}>Gerenciar Pagamentos</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  link: { fontSize: 18, color: "blue", marginVertical: 10 },
});
```

---

#### 3️⃣ **`app/profile.tsx`** – Página de Perfil
```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil</Text>
      <Link href="/" style={styles.link}>Voltar para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  link: { fontSize: 18, color: "blue", marginTop: 10 },
});
```

---

#### 4️⃣ **`app/pedidos.tsx`** – Página de Pedidos
```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📦 Pedidos</Text>
      <Link href="/" style={styles.link}>Voltar para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  link: { fontSize: 18, color: "blue", marginTop: 10 },
});
```

---

#### 5️⃣ **`app/pagamentos.tsx`** – Página de Pagamentos
```tsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function PaymentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💳 Pagamentos</Text>
      <Link href="/" style={styles.link}>Voltar para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
  link: { fontSize: 18, color: "blue", marginTop: 10 },
});
```

---

### 🎯 Como Rodar o App:
```sh
npx expo start
```
Depois, abra o app no **Expo Go** ou emulador.

---

### 🚀 Benefícios do `expo-router`
✅ **Navegação Automática** com URLs  
✅ **Menos Código** (sem necessidade de stacks/tabs)  
✅ **SEO-friendly** para Web  
✅ **Links mais naturais** (`Link href="/profile"`)  

Agora você tem um app com **React Native Expo** e **`Link`** para navegar entre páginas! 🔥🚀