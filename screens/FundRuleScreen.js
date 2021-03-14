import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const FundRuleScreen = () => {

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
                                <Text>Fund Rule</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View>
                    <Text>
                        เงื่อนไขและข้อตกลงในการรับทุน
                    </Text>
                    <Text>
                        1. ผู้รับทุนต้องเข้าร่วมกิจกรรมทั้งภายในมหาวิทยาลัย คณะ และภายนอกมหาวิทยาลัยพะเยา ตามที่มหาวิทยาลัยกำหนดเว้นแต่มีเหตุอันควร
                    </Text>
                    <Text>
                        2. ผู้รับทุนต้องรายงานผลการเรียนทุกภาคการศึกษา ให้งานทุนการศึกษาทราบ ภายใน 2 สัปดาห์ หลังจากที่มหาวิทยาลัยประกาศผลการเรียน
                    </Text>
                    <Text>
                        3. ผู้รับทุนต้องปฏิบัติงานหรือทำกิจกรรมบำเพ็ญประโยชน์ตามเงื่อนไขที่ผู้ให้ทุนกำหนดเป็นระยะเวลาไม่น้อยกว่า 30 ชั่วโมง / ภาคการศึกษา
                    </Text>
                    <Text>
                        4. ผู้รับทุนจะต้องลงชื่อรับเงินทุนการศึกษาด้วยตนเอง ภายวันที่ 1-7 ของทุกเดือน
                    </Text>
                    <Text>
                        5. กรณ๊ที่นิสิตไม่ปฏิบัติงานหรือบำเพ็ญประโยชน์ตามระยะเวลาที่กำหนด ผู้ให้ทุนสามารถตัดสิทธิในการขอรับทุนได้
                    </Text>
                </View>
                <View>
                    <Text>
                        เงื่อนไขมนการถูกยกเลิกให้ได้รับทุนการศึกษา
                    </Text>
                    <Text>
                        1. นิสิตถึงแก่กรรม
                    </Text>
                    <Text>
                        2. นิสิตไม่ปฏิบัติตามเงื่อนไขที่มหาวิทยาลัยกำหนด และขาดคุณสมบัติข้อใดข้อหนึ่ง
                    </Text>
                    <Text>
                        3. นิสิตมีพฤติกรรมที่ไม่เหมาะสม และคณะกรรมการพิจารณาทุนการศึกษาของมหาวิทยาลัยมีมติให้ตัดสิทธิ์การรับทุนการศึกษา
                    </Text>
                    <Text>
                        4. ผู้ให้ทุนได้พิจารณาแล้วเห็นว่ามีเหตุผลอันสมควรให้ยุติการได้รับทุนการศึกษา
                    </Text>
                    <Text>
                        5. นิสิตลาออก หรือถูกให้ออกจากการเป็นนิสิตมหาวิทยาลัยพะเยา
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default FundRuleScreen;