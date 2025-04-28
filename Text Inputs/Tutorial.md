Claro! Vou te mostrar como criar essa página em **React Native** com esses campos, usando:

- Inputs de texto (`TextInput`) para name, email, celular, password e documento
- Seletor de arquivo (`expo-image-picker` para avatar)
- Dropdowns (`@react-native-picker/picker`) para id_grupo, cargo e status
- Seletor de data (`@react-native-community/datetimepicker`) para data de nascimento

Vou montar o exemplo organizado:

---

### 1. Instale os pacotes necessários

```bash
npm install @react-native-picker/picker
npm install @react-native-community/datetimepicker
expo install expo-image-picker
```

---

### 2. Código da página (exemplo completo)

```jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CadastroUsuario() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    celular: '',
    password: '',
    documento: '',
    id_grupo: 'cliente',
    cargo: 'cabeleiro',
    status: 'ativo',
    data_nascimento: new Date(),
    avatar: null,
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChooseAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, avatar: result.assets[0].uri });
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || form.data_nascimento;
    setShowDatePicker(Platform.OS === 'ios');
    setForm({ ...form, data_nascimento: currentDate });
  };

  const handleSubmit = () => {
    console.log(form);
    // Aqui você pode enviar o formulário para o servidor
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        keyboardType="email-address"
        onChangeText={(text) => setForm({ ...form, email: text })}
      />

      <Text>Celular</Text>
      <TextInput
        style={styles.input}
        value={form.celular}
        keyboardType="phone-pad"
        onChangeText={(text) => setForm({ ...form, celular: text })}
      />

      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={form.password}
        secureTextEntry
        onChangeText={(text) => setForm({ ...form, password: text })}
      />

      <Text>Documento</Text>
      <TextInput
        style={styles.input}
        value={form.documento}
        keyboardType="numeric"
        onChangeText={(text) => setForm({ ...form, documento: text })}
      />

      <Text>Avatar</Text>
      <Button title="Escolher Avatar" onPress={handleChooseAvatar} />
      {form.avatar && (
        <Image
          source={{ uri: form.avatar }}
          style={{ width: 100, height: 100, marginVertical: 10 }}
        />
      )}

      <Text>Grupo</Text>
      <Picker
        selectedValue={form.id_grupo}
        onValueChange={(itemValue) => setForm({ ...form, id_grupo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Profissional" value="profissional" />
        <Picker.Item label="Cliente" value="cliente" />
        <Picker.Item label="Gerente" value="gerente" />
      </Picker>

      <Text>Cargo</Text>
      <Picker
        selectedValue={form.cargo}
        onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Cabeleireiro" value="cabeleiro" />
        <Picker.Item label="Manicure" value="manicure" />
        <Picker.Item label="Pedicure" value="pedicure" />
      </Picker>

      <Text>Status</Text>
      <Picker
        selectedValue={form.status}
        onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Inativo" value="inativo" />
      </Picker>

      <Text>Data de Nascimento</Text>
      <Button title="Selecionar Data" onPress={() => setShowDatePicker(true)} />
      <Text>{form.data_nascimento.toLocaleDateString()}</Text>
      {showDatePicker && (
        <DateTimePicker
          value={form.data_nascimento}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
};
```

---
