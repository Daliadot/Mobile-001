import { createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../componentes/Home';
import Dica1 from '../componentes/Dica1';
import Dica2 from '../componentes/Dica2';

const Stack = createStaticNavigation();

export default function RotasBotao(){
    return (
        <NavigationContainer>
            <Stack.Navigation>
                <Stack.screen name="Home" component={Home} />
                <Stack.screen name="Dica1" component={Dica1} />
                <Stack.screen name="Dica2" component={Dica2} />
            </Stack.Navigation>
        </NavigationContainer>
    )
}