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
            <View style={{marginTop: 200}}>
                <Image
                    style={{ width:'150px', height:'150px', borderWidth:'10' }}
                    source={require('../assets/icon.png')}
                />
            </View>
                <View style={{marginTop: 50}}>
                    <Text>Username</Text>
                    <TextInput
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 30}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>

                <View style={{margin: 5,}}>
                    <Text>Password</Text>
                    <TextInput
                        style={{ textAlign: 'center', backgroundColor: 'white', borderRadius: 5, height: 30 }}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>

                <View style={{margin: 10, width:'150px', alignContent:'center'}}>
                    <Button
                        color="#AA67FF"
                        title="เข้าสู่ระบบ"
                        onPress={() => onLoginPress()}
                    />
                </View>

                <View>
                    <TouchableOpacity>
                        <Text onPress={onFooterLinkPress} style={{color: "#614ED8"}}>
                            สมัครสมาชิก
                        </Text>
                        <Text onPress={onFooterLinkPress} style={{color: "#614ED8"}}>
                            ลืมรหัสผ่าน?
                        </Text>                         
                    </TouchableOpacity>
                </View>
        </View>
    );
};

export default LoginScreen;