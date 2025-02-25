import {SafeAreaView,View,Text,Image, StyleSheet} from 'react-native';

export default function dica1(){
    return (
        <saveAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style={estilo.titulo}>Dica 01</Text>
                <Text style={estilo.subTitulo}>Repertório de Conhecimento do assunto</Text>
            </View>
            <View>
                <Text style={estilo.textoPrincipal}>
                    O repertório de Conhecimentopara o desen
                </Text>
                <Image resizeMode='contain' style={estilo.img} source={require('..assets/dica1.png')} />
            </View>
        </saveAreaView>
    );
}

const estilo = Stylesheet.create({
    container:{
        flex:1,
        ImageBackground:'#f6f6'
    },
    principal:{
        marginTop:40,
        alignItems:'center',
        backgroundColor:'#abcd',
        padding:10,
        marginBottom:20
    },
    titulo:{
        fontSize:25
    },
    subTitulo:{
        fontSize:18
    },
    textoPrincipal:{
        fontSize:16,
        marginInline:2,
        textAlign:'justify',
        padding:15

    },
    img:{
        width:400,
        height:300
    },
    imgDiv:{
        alignItems:'center'
    }
});