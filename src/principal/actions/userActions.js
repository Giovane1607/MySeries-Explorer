const USER_LOGIN = 'USER_LOGIN'
const userLogin = user => ({
    type: USER_LOGIN,
    user
})

const USER_LOGOUT = 'USER_LOGOUT'
const userLogout = () => ({
    type: USER_LOGIN,
})


export const tryLogin = ({email, password}) =>{
    

    const firebaseConfig = {
        apiKey: "AIzaSyBod1ud4upi8uz3ZV5RwScf0_Lq-gPEwMY",
        authDomain: "series-c2405.firebaseapp.com",
        projectId: "series-c2405",
        storageBucket: "series-c2405.appspot.com",
        messagingSenderId: "467040018303",
        appId: "1:467040018303:web:a2e1a277d8060e3eb1844a",
        measurementId: "G-7VD72GF89G"
    };
    const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInWithEmailAndPassword(auth, email, password)
    .then(loginUserSuccess)
    .catch(error => {
        console.error('Erro durante o login:', error);

        if (error.code === 'auth/invalid-credential') {
            Alert.alert(
                'Email inválido',
                'Deseja criar uma conta?',
                [
                    {
                        text: 'Não',
                        onPress: () => console.log('Usuário não quer criar conta'),
                        style: 'cancel'
                    },
                    {
                        text: 'Sim',
                        onPress: () => {
                            createUserWithEmailAndPassword(auth, email, password)
                                .then(loginUserSuccess)
                                .catch(loginUserFailed);
                        }
                    }
                ],
                { cancelable: true }
            );
            return;
        }
        loginUserFailed(error);
    })
    .then(() => this.setState({ isLoading: false }));
}
