import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Updates } from 'expo';

import { firebase } from './firebase/config';
import auth from 'firebase/auth';

const ProfileScreen = () => {

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }

    const onSignOutPress = () => {
        firebase
            .auth()
                .signOut()
                    .then(() => console.log('User signed out!'));
        navigation.navigate('Login');
    }


    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#B4B4B4' }}>
            <View style={{ flex: 1.5, backgroundColor: '#A788FF' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                        <TouchableOpacity onPress={onBackPress}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                ย้อนกลับ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: "center" }}>
                        <View>
                            <Text style={{ fontSize: 25, color: 'white', margin: 5 }}>UP QUEST</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end", backgroundColor: '#A788FF' }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{ flex: 1, alignItems:'center', backgroundColor:'#CCBAFF'}}>
                    <View style={{marginTop: 10, backgroundColor: '#A788FF', width: '100%'}}>
                        <View style={{ margin: 20, alignItems:'center'}}> 
                            <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white' }}>
                                บัญชีของฉัน
                            </Text>
                         </View>
                        <View style={{ alignItems: 'center'}}>
                            {/* <Image
                                style={{ width:'150px', height:'150px' }}
                                source={require('../assets/icon.png')}
                            /> */}
                        </View>
                    </View>
                <View style={{ backgroundColor: 'white'}}>
                    <View style={{flex:1, alignItems: 'center', marginTop: 10}}>
                        <View style={{ backgroundColor:'white', width: '100%', height: 50 , alignItems: 'center', margin: 5 }}>
                            <Text style={{fontSize: 30, padding: 5, fontWeight: 'bold'}}> 
                                ปกรณ์ ตะวันแสง
                            </Text>
                        </View>

                        <View style={{ borderWidth: 1, width: '95%'}}>

                        </View>

                        <View style={{ backgroundColor:'white', width: 300, height: 70 , alignItems: 'center', margin: 5}}>
                            <View style={{ padding: 5 }}>
                                <Text style={{fontSize: 15 }}> 
                                    รหัส 61021493
                                </Text>
                                <Text style={{fontSize: 15}}> 
                                    สาขาวิศวกรรมซอฟต์แวร์
                                </Text>
                                <Text style={{fontSize: 15}}> 
                                    คณะเทคโนโลยีสารสนเทศและการสื่อสาร
                                </Text>
                            </View>
                        </View>

                        <View style={{ borderWidth: 1, width: '95%'}}>

                        </View>

                        <View style={{ backgroundColor:'white', width: 300, height: 100 , alignItems: 'center', margin: 5, padding: 5}}>
                            <View style={{ padding: 5 }}>
                                <Text style={{fontSize: 20}}> 
                                    text11111111
                                </Text>
                                <Text style={{fontSize: 20}}> 
                                    text21111111111
                                </Text>
                                <Text style={{fontSize: 20}}> 
                                    text3111111111
                                </Text>
                            </View>
                        </View>

                        <View style={{ borderWidth: 1, width: '95%'}}>

                        </View>
                        
                    </View>
                </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen;