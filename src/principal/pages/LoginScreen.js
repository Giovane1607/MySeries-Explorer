import React from "react";
import { View, StyleSheet, TextInput, Button, ActivityIndicator, Text, Alert } from 'react-native';
import FormRow from '../components/FormRow'
import 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {connect} from 'react-redux'
import {tryLogin} from '../actions'

 class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: '',
        }
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }



    tryLogin() {
        this.setState({ isLoading: true, message: '' });
    
        const { email: mail, password } = this.state;
        
        this.props.tryLogin({mail, password})
        
}


    getMessageByErrorCode(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/invalid-credential':
                return 'Usuário não encontrado';
            default:
                return 'Erro desconhecido';
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message)
            return null;

        return (
            <View>
                <Text>{message}</Text>
            </View>
        )
    }

    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator />;
        <Button
            title="Entrar"
            onPress={() => this.tryLogin()}
        />
    }
    render() {
        return (
            <View styles={styles.container}>
                <FormRow first={true}>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)}
                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={styles.input}
                        placeholder="******"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                    />
                </FormRow>

                {this.renderButton()}
                {this.renderMessage()}
                <Button
                    title="Entrar"
                    onPress={() => this.tryLogin()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    input: {
        paddingLeft: 10,
        paddingRight: 5,
        paddingBottom: 5,
    }

})

export default connect(null, {tryLogin})(LoginScreen)