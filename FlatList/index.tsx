import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const pessoas = [
  { id: 1, nome: "Carlos Andrade", tipo: "Compulsivo", dificuldade: "Fácil", estrategia: "Criar senso de urgência", ambiente: "Loja iluminada" },
  { id: 2, nome: "Fernanda Lima", tipo: "Analítico", dificuldade: "Difícil", estrategia: "Fornecer dados", ambiente: "Ambiente neutro" },
  { id: 3, nome: "Roberto Souza", tipo: "Fiel", dificuldade: "Médio", estrategia: "Oferecer benefícios", ambiente: "Local familiar" },
  { id: 4, nome: "Juliana Mendes", tipo: "Indeciso", dificuldade: "Médio", estrategia: "Criar confiança", ambiente: "Local tranquilo" },
  { id: 5, nome: "Eduardo Martins", tipo: "Negociador", dificuldade: "Difícil", estrategia: "Criar margem de negociação", ambiente: "Local informal" },
];

export default function App(){
  let i = 0;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfis de Clientes</Text>
      <View style={{flexDirection: "row", margin: 20}}>
        <View style={{width: '20%'}}><Text style={{fontWeight: 'bold'}}>Nome</Text></View>
        <View style={{width: '10%'}}><Text style={{fontWeight: 'bold'}}>Tipo</Text></View>
        <View style={{width: '10%'}}><Text style={{fontWeight: 'bold'}}>Dificuldade</Text></View>
        <View style={{width: '20%'}}><Text style={{fontWeight: 'bold'}}>Estratégia</Text></View>
        <View style={{width: '10%'}}><Text style={{fontWeight: 'bold'}}>Ambiente</Text></View>
        <View style={{width: '30%', marginRight: 30}}>
              <Text style={{fontWeight: 'bold'}}>Ações</Text>
        </View>
        
      </View>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          let cor = i % 2 == 0 ? '#DCDCDC' : 'white'
          i++;
          return (
          
          <View style={{flexDirection: "row", backgroundColor: cor, padding: 10}}>
            
            <View style={{width: '20%'}}><Text style={{fontWeight: 'bold'}}>{item.nome}</Text></View>
            <View style={{width: '10%'}}><Text>{item.tipo}</Text></View>
            <View style={{width: '10%'}}><Text>{item.dificuldade}</Text></View>
            <View style={{width: '20%'}}><Text>{item.estrategia}</Text></View>
            <View style={{width: '10%'}}><Text>{item.ambiente}</Text></View>
            <View style={{width: '30%', flexDirection: "row"}}>
                  <View style={{padding: 10}}>
                      <Button title="Editar" color="#DAA520"  />
                    </View>
                    <View style={{padding: 10}}>
                      <Button title="Excluir" color="#FF6347"  />
                    </View>
                  </View>
          </View>
        )}

        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

