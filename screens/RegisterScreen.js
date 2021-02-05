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
        <View style={{alignItems: 'center', marginTop: 200,}}>
            <View style={{ display: 'flex'}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 5}}>
                    <Text>ชื่อ</Text>
                    <TextInput
                        //placeholder='ชื่อจริง'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20, width: 100}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <Text>สกุล</Text>
                    <TextInput
                        //placeholder='นามสกุล'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20, width: 100}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>รหัสนิสิต</Text>
                    <TextInput
                        //placeholder='รหัสนิสิต'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20,}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setStudentNumber(text)}
                        value={studentNumber}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>เบอร์โทร</Text>
                    <TextInput
                        //placeholder='เบอร์โทร'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>เบอร์โทรผู้ปกครอง</Text>
                    <TextInput
                        //placeholder='เบอร์โทรผู้ปกครอง'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setParentNumber(text)}
                        value={parentNumber}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>สาขาวิชา</Text>
                    <TextInput
                        //placeholder='สาขาวิชา'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setDepartment(text)}
                        value={department}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>อีเมล</Text>
                    <TextInput
                        //placeholder='อีเมล'
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>รหัสผ่าน</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        secureTextEntry
                        //placeholder='รหัสผ่าน'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 2}}>
                    <Text>ยืนยันรหัสผ่าน</Text>
                    <TextInput
                        placeholderTextColor="#aaaaaa"
                        style={{ textAlign: 'center', backgroundColor:'white', borderRadius: 5, height: 20}}
                        secureTextEntry
                        //placeholder='ยืนยันรหัสผ่าน'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                </View>
            </View>
            <View>
                <View style={{margin: 10, width:'150px', alignItems:'center'}}>
                        <Button
                            color="#AA67FF"
                            title="สร้างบัญชี"
                            onPress={() => onRegisterPress()}
                        />
                </View>
                
                <View >
                    <Text>ฉันมีบัญชีผู้ใช้แล้ว-
                        <TouchableOpacity>
                            <Text onPress={onFooterLinkPress} style={{color: 'blue'}}>เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </View>
    )
  }

export default RegisterScreen;