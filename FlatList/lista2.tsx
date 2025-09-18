import { StyleSheet, Text, View, FlatList, SafeAreaView, Button  } from 'react-native';


const pessoas = [
  {nome: "Lucas", idade: 22, email: "lucas.silva@gmail.com"},
  {nome: "Carla", idade: 31, email: "carla.moraes@yahoo.com"},
  {nome: "Fernando", idade: 45, email: "fernando_oliveira@outlook.com"},
  {nome: "Amanda", idade: 26, email: "amanda.rocha@gmail.com"},
  {nome: "Tiago", idade: 34, email: "tiago123@gmail.com"},
  {nome: "Juliana", idade: 27, email: "juliana.alves@hotmail.com"},
  {nome: "Bruno", idade: 30, email: "bruno.costa@uol.com.br"},
  {nome: "Renata", idade: 25, email: "renata.ribeiro@yahoo.com"},
  {nome: "Diego", idade: 21, email: "diego.souza@gmail.com"},
  {nome: "Patrícia", idade: 33, email: "patricia.melo@terra.com.br"},
  {nome: "Rafael", idade: 29, email: "rafael.santos@outlook.com"},
  {nome: "Marina", idade: 24, email: "marina.lima@gmail.com"},
  {nome: "André", idade: 39, email: "andre.gomes@yahoo.com"},
  {nome: "Larissa", idade: 28, email: "larissa.ferreira@gmail.com"},
  {nome: "Felipe", idade: 36, email: "felipe.carvalho@hotmail.com"},
  {nome: "Isabela", idade: 23, email: "isabela.martins@uol.com.br"},
  {nome: "Rodrigo", idade: 32, email: "rodrigo.almeida@gmail.com"},
  {nome: "Camila", idade: 30, email: "camila.pereira@yahoo.com"},
  {nome: "Marcelo", idade: 41, email: "marcelo.barbosa@gmail.com"},
  {nome: "Beatriz", idade: 26, email: "beatriz.farias@outlook.com"}
];


export default function App() {
  return (
    <View style={{marginTop: 50, padding: 10}}>
    <View style={{marginTop: 10, backgroundColor: "gray", padding: 10, flexDirection: 'row'}}>
      <View style={{width: "30%"}}><Text style={{color: 'white', fontSize: 20}}>Nome</Text></View>
      <View style={{width: "50%"}}><Text style={{color: 'white', fontSize: 20}}>E-mail</Text></View>
      <View style={{width: "20%"}}><Text style={{color: 'white', fontSize: 20}}>Idade</Text></View>

    </View>
    <FlatList
      data={pessoas}
      renderItem={
        ({item})=>(
          <View style={{margin: 2, backgroundColor: "#F0E68C", padding: 10, flexDirection: 'row'}}>
            
            <View style={{width: "20%"}}>
              <Text>
                {item.nome}
              </Text>
            </View>

            <View style={{width: "50%"}}>
              <Text>
                {item.email}
              </Text>
            </View>
            <View style={{width: "30%"}}>
              <Button title="Editar" color='black'/>
            </View>
          </View>
        )
      }
    />
    </View>
  );
}


