import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

import { Login } from './pages/Login';
import { Calc } from './pages/Calc';
import { Result } from './pages/Result';


export function Router() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login} />
            <Screen name="calc" component={Calc} />
            <Screen name="result" component={Result} />
        </Navigator>
    )
}