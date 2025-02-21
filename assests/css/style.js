import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 0,
        marginLeft:16,
        color: '#00008B',
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

    // container: {
    //     backgroundColor: 'red'
    // },

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

    textWhite:{
        color: 'white'
    },

    textBlack:{
        color: 'black'
    },

    textBlue:{
        color: 'blue'
    },

    textSizeP:{
        fontSize: 10
    },

    textSizeM:{
        fontSize: 20
    },

    textSizeG:{
        fontSize: 30
    },

    textSizeXG:{
        fontSize: 40
    },

    textSizeXXG:{
        fontSize: 50
    },

    shadow:{
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 15, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.55,
        shadowRadius: 5.84,
    },
    p1:{
        padding:10
    },
    p2:{
        padding:20
    },
    p3:{
        padding:30
    },
    p4:{
        padding:40
    },
    p5:{
        padding:50
    },
    prefeitura: {
        width: 150,
        height: 38,
        // backgroundColor: 'none'
    },
    brt: {
        width: 120,
        height: 50,
    },
    loading: {
        width: 256,
        height: 256,
    },

    bgAmarelo:{
        backgroundColor: '#fbab18'
    },
    alignItemsJustify:{
        alignItemsJustify: 'justifyContent'
    },
    alignFlex1:{
        flex: 0,
    },

    bgTransparent5:{
        backgroundColor: 'rgba(0,0,0,0,0.5)'
    }
});

export default style;