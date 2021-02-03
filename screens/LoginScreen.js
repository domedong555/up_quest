import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { firebase } from './firebase/config';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('Home', {user: user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    return (
        <View style={{ flex: 1, alignItems:'center', backgroundColor:'#CCBAFF'}}>
                <Image
                    style={{ width:'150px', height:'150px', borderWidth:'10' }}
                    source={require('../assets/icon.png')}
                />
                <TextInput
                    style={{ textAlign: 'center', backgroundColor:'white' }}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={{ textAlign: 'center', backgroundColor:'white' }}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button
                    title="เข้าสู่ระบบ"
                    onPress={() => onLoginPress()}
                />
                <View>
                    <TouchableOpacity>
                        <Text onPress={onFooterLinkPress}>
                            สมัครสมาชิก
                        </Text>                        
                    </TouchableOpacity>

                </View>
        </View>
    );
};

export default LoginScreen;