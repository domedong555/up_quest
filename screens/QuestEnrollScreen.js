import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { firebase } from './firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';

const QuestEnrollScreen = () => {

    const [quests, setQuests] = useState([])
    const [totalTime, setTotalTime] = useState(0)

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }

    const questsRef = firebase.firestore().collection('questsEnroll')

    useEffect(() => {
        (async () => {
            try {
                const uid = await AsyncStorage.getItem("uid")
                questsRef
                    .where("studentEnrollId", "==", uid)
                        .onSnapshot(
                            querySnapshot => {
                                const questData = []
                                const amountTotal = []
                                querySnapshot.forEach(doc => {
                                    const quests = doc.data()
                                    quests.id = doc.id
                                    questData.push(quests)
                                    // amountTotal.push(doc.data().amountTime)
                                    if (doc.data().status == 'Pass') {
                                        amountTotal.push(doc.data().amountTime)
                                        // setTotalTime(totalTime + doc.data().amountTime)
                                    }
                                });
                                setQuests(questData)
                                const sum = amountTotal.reduce(function(a,b){
                                    return a+b;
                                },0);
                                setTotalTime(sum)
                            },
                            error => {
                                console.log(error)
                            }
                        )
                        
            } catch (error) {
                alert(error)
            }
        })();
    }, []);

    const renderQuests = ({item}) => {
        if (item.status == 'Pass') {
            return (
                <View style={{backgroundColor: '#EBECFD', width: '100%', borderRadius: 6, paddingLeft: 5, paddingRight: 5, marginBottom:10 }}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Task', {taskId: item.taskId})}
                    >
                        <View style={{ padding: 5 }}>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                งาน {item.questName}
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>
                                ระยะเวลา {item.amountTime} ชั่วโมง
                            </Text>
                        </View>
                            <Text>
                                สถานที่ {item.location}
                            </Text>
                        </View>
                            <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                                <Text style= {{ flexDirection: 'column' }}>
                                    
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'green', margin: 5 }}>
                                    {item.status}
                                </Text>
                            </View>
                    </TouchableOpacity>
                </View>
            )
        }else if(item.status == 'In Progress') {
            return (
                <View style={{backgroundColor: '#EBECFD', width: '100%', borderRadius: 6, paddingLeft: 5, paddingRight: 5, marginBottom:10 }}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Task', {taskId: item.taskId})}
                    >
                        <View style={{ padding: 5 }}>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                งาน {item.questName}
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>
                                ระยะเวลา {item.amountTime} ชั่วโมง
                            </Text>
                        </View>
                            <Text>
                                สถานที่ {item.location}
                            </Text>
                        </View>
                            <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                                <Text style= {{ flexDirection: 'column' }}>
                                    
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'yellow', margin: 5 }}>
                                    {item.status}
                                </Text>
                            </View>
                    </TouchableOpacity>
                </View>
            )
        }else {
            return (
                <View style={{backgroundColor: '#EBECFD', width: '100%', borderRadius: 6, paddingLeft: 5, paddingRight: 5, marginBottom:10 }}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('Task', {taskId: item.taskId})}
                    >
                        <View style={{ padding: 5 }}>
                        <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                            <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                งาน {item.questName}
                            </Text>
                            <Text style={{ fontWeight: 'bold' }}>
                                ระยะเวลา {item.amountTime} ชั่วโมง
                            </Text>
                        </View>
                            <Text>
                                สถานที่ {item.location}
                            </Text>
                        </View>
                            <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingRight: 4}}>
                                <Text style= {{ flexDirection: 'column' }}>
                                    
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'red', margin: 5 }}>
                                    {item.status}
                                </Text>
                            </View>
                    </TouchableOpacity>
                </View>
            )
        }
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
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{ flex: 1.1, alignItems:'center', backgroundColor:'#CCBAFF'}}>
                        <View style={{marginTop: 35, backgroundColor: '#A788FF', width: '100%'}}>
                            <View style={{ marginTop: 3, alignItems:'center'}}> 
                                <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white' }}>
                                    งานที่ลงทะเบียนแล้ว
                                </Text>
                            </View>
                            <View style={{ alignItems: 'center'}}>
                                {/* <Image
                                    style={{ width:'150px', height:'150px' }}
                                    source={require('../assets/icon.png')}
                                /> */}
                            </View>
                        </View>
                    </View>
                <View style={{ backgroundColor: 'white', flex: 8, width: '100%' ,padding:10}}>
                    { quests && (
                            <FlatList
                                data={quests}
                                renderItem={renderQuests}
                                keyExtractor={(item) => item.id}
                                removeClippedSubviews={true}
                            />
                        )}
                </View>
            </View>
            <View style={{ flex:1, backgroundColor: 'white', alignItems: 'center' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    รวมเวลาชั่วโมงทุนทั้งหมด {totalTime} ชั่วโมง
                </Text>
            </View>
        </View>
    )
}

export default QuestEnrollScreen;