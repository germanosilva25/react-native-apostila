*** Após criar o aplicativo, apague o conteúdo do return, deixando somente os parênteses.

 return ()

 Crie dentro do return uma View que será o container de toda a aplicação.

 return (
    <View> 

    </View>
 )

 Crie dentro dessa View os dois inputs

 ```js

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={}
        onChangeText={}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calcular IMC" onPress={} />
      {bmi && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Seu IMC: {bmi}</Text>
          <Text style={styles.resultText}>{category}</Text>
        </View>
      )}
    </View>
  );
```

Crie os useStata de cada variável
```js
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
```

Crie a função para calcular o índice de massa corporal
```js
    const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convertendo altura para metros
    if (w > 0 && h > 0) {
      const bmiValue = (w / (h * h)).toFixed(2);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
    } else {
      setBmi(null);
      setCategory('');
    }
  };
```


Crie a função para calcular a categoria
```js
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi >= 18.5 && bmi < 24.9) return 'Peso normal';
    if (bmi >= 25 && bmi < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };
```