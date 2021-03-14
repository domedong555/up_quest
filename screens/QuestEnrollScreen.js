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
                                    amountTotal.push(doc.data().amountTime)
                                    
                                    // if (doc.data().status == 'Pass') {
                                    //     setTotalTime(totalTime + doc.data().amountTime)
                                    // }
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
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Task', {taskId: item.taskId})}
                >
                    <View>
                        <Text>
                            นิสิต {item.studentEnrollId}
                        </Text>
                        <Text>
                            งาน {item.taskId}
                        </Text>
                        <Text>
                            สถานที่ {item.location}
                        </Text>
                        <Text>
                            สถานะ {item.status}
                        </Text>
                        <Text>
                            ระยะเวลา {item.amountTime}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
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
                                <Text>Quest Enroll</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
            { quests && (
                    <FlatList
                        data={quests}
                        renderItem={renderQuests}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                )}
            </View>
            <View style={{ flex:1, backgroundColor: 'white' }} >
                <Text>
                    รวมเวลาชั่วโมงทุนทั้งหมด {totalTime} ชั่วโมง
                </Text>
            </View>
        </View>
    )
}

export default QuestEnrollScreen;