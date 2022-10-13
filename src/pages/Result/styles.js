import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        paddingHorizontal: 22
    },
    button: {
        position: 'absolute',
        bottom: 32,
        backgroundColor: 'red',
        width: '100%',
        height: 60,
        marginTop: 80,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Rajdhani_700Bold'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 32,
        fontFamily: 'Rajdhani_700Bold'
    },  
    boxContainer: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 16,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        height: 100,
        backgroundColor: '#ccc',
        width: 100,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },
    infosBox: {
        display: 'flex',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Rajdhani_500Medium',
        marginBottom: 8
    },
    weight: {
        fontSize: 20,
        fontFamily: 'Rajdhani_500Medium',
        marginBottom: 8
    },
    price: {
        fontSize: 20,
        fontFamily: 'Rajdhani_500Medium',
        marginBottom: 8
    },
})