import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { firebase } from './firebase/config';

const RegisterScreen = () => {

    const navigation = useNavigation();

    //student information
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [studentNumber, setStudentNumber] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [parentNumber, setParentNumber] = useState('')
    const [department, setDepartment] = useState('')

    //id
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
    
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    firstName,
                    lastName,
                    studentNumber,
                    phoneNumber,
                    parentNumber,
                    department,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }


    return (
        <View>
                <TextInput
                    placeholder='ชื่อจริง'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='นามสกุล'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='รหัสนิสิต'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setStudentNumber(text)}
                    value={studentNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='เบอร์โทร'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='เบอร์โทรผู้ปกครอง'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setParentNumber(text)}
                    value={parentNumber}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='สาขาวิชา'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setDepartment(text)}
                    value={department}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder='อีเมล'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='รหัสผ่าน'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='ยืนยันรหัสผ่าน'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Button
                    title="สร้างบัญชี"
                    onPress={() => onRegisterPress()}
                />
                <View >
                    <Text>ฉันมีบัญชีผู้ใช้แล้ว
                        <TouchableOpacity>
                            <Text onPress={onFooterLinkPress}>-เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
        </View>
    )
  }

export default RegisterScreen;