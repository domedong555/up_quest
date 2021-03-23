import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { firebase } from './firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';

const QuestScreen = ({route}) => {

    const [questDetails, setQuestDetails] = useState({
        amountTime: '',
        dateEnd: '',
        dateStart: '',
        description: '',
        location: '',
        questName: '',
        staff: '',
        timeEnd: '',
        timeStart: '',
        unit: '',
        unitEnroll: '',
    })

    const navigation = useNavigation();

    const questId = route.params.taskId
    console.log(questId)

    const questsRef = firebase.firestore().collection('quests').doc(questId)

    useEffect(() => {
        questsRef.get().then((doc) => {
            if (doc.exists) {
                setQuestDetails(doc.data());
                console.log("Document data:", doc.data());
                console.log(questDetails, '123');
            } else {
                // doc.data() will be undefined in this case 
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    const onBackPress = () => {
        navigation.goBack()
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
                            {/* <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                Logout
                            </Text> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'white' }}>
                <View style={{ flex: 1, alignItems:'center', backgroundColor:'#CCBAFF'}}>
                    <View style={{flex: 1, backgroundColor: '#A788FF', width: '100%', marginTop: 35,paddingLeft:5}}>
                        <View style={{ margin: 10}}> 
                            <Text style={{ fontSize: 20, color: 'white' }}>
                                {questDetails.questName}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', height: 130, flex: 7.5, marginBottom:35, backgroundColor:'#CCBAFF' }}>
                    <View style={{ paddingLeft: 10, width: '100%', backgroundColor: 'white', flex:1}}>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            {/* <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                {questDetails.questName}
                            </Text> */}
                        </View>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text style= {{ flexDirection: 'column' }}>
                                สถานที่ {questDetails.location}
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', flexDirection: 'column' }}>
                                {questDetails.timeStart} - {questDetails.timeEnd}
                            </Text>
                        </View>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text>
                                อาจารย์ {questDetails.staff}
                            </Text>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', flexDirection: 'column' }}>
                                จำนวน {questDetails.amountTime} ชั่วโมง
                            </Text>
                        </View>
                            <Text style={{ marginTop: 10 }}>
                                วันเรื่มงาน {questDetails.dateStart}  
                            </Text>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text style= {{ flexDirection: 'column' }}>
                                วันสิ้นสุดงาน {questDetails.dateEnd}
                            </Text>
                        </View>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: 4, marginTop:10}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'purple' }}>
                                รายละเอียดงาน
                            </Text>
                            <Text>
                                {questDetails.description}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
            {/* <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <Text>
                    {questDetails.questName}
                </Text>
                <Text>
                    {questDetails.staff}
                </Text>
                <Text>
                    {questDetails.location}
                </Text>
                <Text>
                    {questDetails.dateStart}
                </Text>
                <Text>
                    {questDetails.dateEnd}
                </Text>
                <Text>
                    {questDetails.timeStart}
                </Text>
                <Text>
                    {questDetails.timeEnd}
                </Text>
                <Text>
                    {questDetails.amountTime}
                </Text>
                <Text>
                    {questDetails.unit}
                </Text>
                <Text>
                    {questDetails.unitEnroll}
                </Text>
                <Text>
                    {questDetails.description}
                </Text>
            </View> */}
        </View>
    )
}

export default QuestScreen;