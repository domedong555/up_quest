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
            <View style={{ flex:1, backgroundColor:'#FFFFFF' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-start", backgroundColor:'white' }}>
                            <TouchableOpacity onPress={onBackPress}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex:2, flexDirection:'row', justifyContent:"center", backgroundColor:'white' }}>
                            <View>
                                <Text>Duty</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <Text>
                    บทบาทหน้าที่ของนิสิตทุนการศึกษา
                </Text>
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
    )
}

export default DutyScreen;