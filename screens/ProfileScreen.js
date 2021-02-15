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
        <View style={{ flex:1, flexDirection:'column' }}>
            <View style={{ flex:1.5, backgroundColor:'#FFFFFF' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between',alignItems:'flex-end' }}>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-start", backgroundColor:'white' }}>
                            <TouchableOpacity onPress={onBackPress}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex:2, flexDirection:'row', justifyContent:"center", backgroundColor:'white' }}>
                            <View>
                                <Text>Profile</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>
                            <TouchableOpacity onPress={onSignOutPress}>
                                <Text>Sign out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{ flex: 1, alignItems:'center', backgroundColor:'#CCBAFF'}}>
                    <View style={{marginTop: 10}}>
                        <View style={{ margin: 20, alignItems:'center'}}> 
                            <Text style={{fontWeight: 'bold', fontSize: 30 }}>
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
                    <View style={{flex:1, alignItems: 'center', marginTop: 10}}>
                        <View style={{ backgroundColor:'white', width: 300, height: 50 , alignItems: 'center', margin: 5 }}>
                            <Text style={{fontSize: 30, marginTop: 5}}> 
                                ปกรณ์ ตะวันแสง
                            </Text>
                        </View>

                        <View style={{ backgroundColor:'white', width: 300, height: 70 , alignItems: 'center'}}>
                                <Text style={{fontSize: 15, marginTop: 5}}> 
                                    รหัส 61021493
                                </Text>
                                <Text style={{fontSize: 15}}> 
                                    สาขาวิศวกรรมซอฟต์แวร์
                                </Text>
                                <Text style={{fontSize: 15}}> 
                                    คณะเทคโนโลยีสารสนเทศและการสื่อสาร
                                </Text>
                        </View>

                        <View style={{ backgroundColor:'white', width: 300, height: 70 , alignItems: 'center', margin: 5}}>
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
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen;