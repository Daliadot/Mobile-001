import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';


export default function Home(){
    return(
            <SafeAreaView>
                    <View  style={estilo.container}>
                        <Text>Mundo do trabalhador</Text>
                        <Text>Dicas para o mercado de trabalho.</Text>

                    </View>

                    <View>
                            <TouchableOpacity style={styles.botao}>
                                <Text> Dica 1 - </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botao}>
                                <Text> Dica 2 - </Text>
                            </TouchableOpacity>
                    </View>
            </SafeAreaView>
    );
} 
const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        display: 'flex',
    },
    botao:{
        backgroundColor:'rgba(128,128,128, 0.3'
    }
});