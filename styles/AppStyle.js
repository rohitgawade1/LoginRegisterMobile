import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderRadius: 4,
        width: 300,
        color: '#000000',
        paddingHorizontal: 8
    },
    textHeading: {
        fontSize: 25,
        fontWeight: 'semibold'
    },
    headingContainer: {
        marginBottom: 20
    },
    text: {
        fontSize: 14,
        color: '#351A96',
        fontWeight: 'semibold'
    },
    textContainer: {
        marginVertical: 10
    },
    button: {
        color: '#ffffff',
        fontSize: 17
    },
    buttonContainer: {
        borderWidth: 1,
        backgroundColor: '#351A96',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 50
    },
    SignupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    }
})