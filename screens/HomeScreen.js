import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();

    const onProfilePress = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={{ flex:1, flexDirection:'column' }}>
            <View style={{ flex:1, backgroundColor:'#FFFFFF' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-start", backgroundColor:'white' }}>
                        <TouchableOpacity>
                            <Text>UP_Quest</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:2, flexDirection:'row', justifyContent:"center", backgroundColor:'white' }}>
                        <View>
                            <Text>Home</Text>
                        </View>
                    </View>
                    <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>
                        <TouchableOpacity onPress={onProfilePress}>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{ flex:1, backgroundColor:'gray' }}>

                </View>
                <View style={{ flex:4, backgroundColor:'pink' }}>

                </View>
                <View style={{ flex:3, backgroundColor:'orange' }}>
                    <View style={{ flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'white' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Quest')} >
                            <Button title='งานจิตอาสา'/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex:5, backgroundColor:'white' }}>
                        <View style={{ flex:1, backgroundColor:'red' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <View style={{ flex:1, backgroundColor:'pink' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <Text>
                                            รายงานผลการเรียน
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'red' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('QuestEnroll')}>
                                        <Text>
                                            งานจิตอาสาที่ลงทะเบียน
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'pink' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Fund')}>
                                        <Text>
                                            ประวัติการได้รับทุน
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex:1, backgroundColor:'blue' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                <View style={{ flex:1, backgroundColor:'red' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Income')}>
                                        <Text>
                                            รายรับรายจ่าบ
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'pink' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('FundRule')}>
                                        <Text>
                                            เงื่อนไขของทุน
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'red' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Duty')}>
                                        <Text>
                                            บทบาทหน้าที่ของนิสิตทุน
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;