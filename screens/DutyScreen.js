import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const DutyScreen = () => {

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={{ flex:1, flexDirection:'column' }}>
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
                            {/* <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                Logout
                            </Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{flex: 1, backgroundColor: '#A788FF', width: '100%', marginTop: 35,paddingLeft:5}}>
                    <View style={{ margin: 10}}> 
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            บทบาทหน้าที่ของนิสิตทุนการศึกษา
                        </Text>
                    </View>
                </View>
                <View style={{ flex:14, backgroundColor: '#FFFFFF', padding:10}}>
                    <Text>
                        1. ตั้งใจศึกษาเล่าเรียนให้ผลการเรียนอยู่ในระดับที่ดี
                    </Text>
                    <Text>
                        2. นิสิตต้องตระหนักรู้คุณค่าของเงินทุนที่ได้รับ และค่าใช้จ่ายอย่างประหยัดให้เกิดประโยชน์สูงสุด
                    </Text>
                    <Text>
                        3. ประพฤติตนให้อยู่ในกฎระเบียบขอลมหาวิทยาลัยและสังคม
                    </Text>
                    <Text>
                        4. ทำกิจกรรมที่เป็นประโยชน์เพื่อตอบแทนเจ้าของทุนการศึกษา
                    </Text>
                    <Text>
                        5. ทำกิจกรรมที่เป็นประโยชน์เพื่อตอบแทนสังคม
                    </Text>
                    <Text>
                        หมายเหตุ : การปฏิบัติตามบทบาทหน้าที่ของนิสิตทุนการศึกษา มีผลต่อการพิจารณาทุนการศึกษา
                    </Text>
                </View>
                
            </View>
        </View>
    )
}

export default DutyScreen;