import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

import Loading from '../../components/Loading'
import { sendEmailResetPassword } from '../../utils/actions'
import { validateEmail } from '../../utils/helpers'

export default function RecoverPassword({ navigation }) {

    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async() => {
        
        if (!validateData()) {
            return
        }

        setLoading(true)
        const result = await sendEmailResetPassword(email)
        setLoading(true)

        if (!result.statusResponse) {
            Alert.alert("Error", "Este Correo no está relacionado a ningún usuario.")
            return
        }

        Alert.alert("Confirmación", "Se le ha enviado un email con las instrucciones para cambiar las contraseña.")
        navigation.navigate("account", { screen: "login" })

    }

    const validateData = () => {
        setErrorEmail(null)
        let valid = true

        if (!validateEmail(email)) {
            setErrorEmail("Debes ingresar un email válido.")
            valid = false
        }
        return valid
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Ingresa tu email..."
                containerStyle={styles.inputForm}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                defaultValue={email}
                errorMessage={errorEmail}
                keyboardType="email-address"
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.icon}
                    />
                }
            />
            <Button
                title="Recuperar Contraseña"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnRecover}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Recuperando Contraseña..."/>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    inputForm: {
        width: "90%"
    },
    btnContainer: {
        marginTop: 20,
        width: "85%",
        alignSelf: "center"
    },
    btnRecover: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
    }
})
