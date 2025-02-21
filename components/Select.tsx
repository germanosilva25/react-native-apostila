import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import style from '@/assets/css/style';

const cores = [
    {id: 1, nome: "Azul", familia: "Escura"},
    {id: 2, nome: "Vermelho", familia: "Clara"},
    {id: 3, nome: "Preto", familia: "Escura"},
    {id: 4, nome: "Roxo", familia: "Clara"},
    {id: 5, nome: "Rosa", familia: "Clara"},
    {id: 6, nome: "Cinza", familia: "Clara"},
]


interface Cor  {
    id: number,
    nome: string,
    familia: string
}
export default function Select(){
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [cor, setValueCor] = useState<Cor>();
    const [cor2, setValueCor2] = useState();

    
    useEffect(() => {
        if(cor)
            setValueCor2(cor)
    }, [cor])

    useEffect(() =>{
        setValueCor2(cor)
    })


    return (
        <View style={{flex:1}}>
          <Text style={[style.textBlack, style.textSizeM, style.bgTransparent5]}>Qual cor? {cor}</Text>
          <Dropdown
            selectedValue={selectedValue} setSelectedValue={setSelectedValue}
            style={[styles.dropdown, styles.selectContainer]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={cores || []} // Ensure estacoes is always an array
            search
            maxHeight={300}
            valueField="id"
            labelField="nome"
            placeholder="Selecione um item"
            searchPlaceholder="Search..."
            value={cor}
            onChange={ function(item) {
              setValueCor(item.id); // Use item.id as per the valueField
    
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
            )}
            
          />
        </View>
    )
}


const styles = StyleSheet.create({

    icon: {
      marginRight: 5,
      // color: 'white',
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    home: {
      marginTop: 0,
      padding: 10,
    },
    label: {
      fontSize: 18,
      marginBottom: 0,
      marginLeft:16,
      color: 'white',
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
  
    selectContainer: {
      // width: 200,
      borderRadius: 10,
      backgroundColor: '#fff',
      elevation: 12, // For Android shadow
      shadowColor: '#000', // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.55,
      shadowRadius: 5.84,
  },
  
  picker: {
      height: 60,
      width: '100%',
  },
  
  dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
  },
  
  
  });