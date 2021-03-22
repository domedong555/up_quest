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
                            เงื่อนไขและข้อตกลงในการรับทุน
                        </Text>
                    </View>
                </View>
                <View style={{ flex:5, backgroundColor: '#FFFFFF', padding:10}}>
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
                <View style={{flex: 1, backgroundColor: '#A788FF', width: '100%', paddingLeft:5}}>
                    <View style={{ margin: 10}}> 
                        <Text style={{ fontSize: 20, color: 'white' }}>
                            เงื่อนไขการถูกยกเลิกให้ได้รับทุนการศึกษา
                        </Text>
                    </View>
                </View>
                <View style={{ flex:5, backgroundColor: '#FFFFFF', padding:10 }}>
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