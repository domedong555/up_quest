import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { firebase } from './firebase/config';
import { FlatList } from 'react-native-gesture-handler';

import MapView, { Callout, Marker } from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';

const MapQuestScreen = () => {

    const [uid, setUid] = useState('')
    const [quests, setQuests] = useState([])
    const [markers, setMarkers] = useState([])
    const [EnrollRefData, setEnrollRefData] = useState([])
    const [StudentData, setStudentData] = useState([])
    const [EnrollData, setEnrollData] = useState({
        taskId:''   
    })

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }
    
    const questsRef = firebase.firestore().collection('quests')
    const staffsRef = firebase.firestore().collection('staffs')
    const studentsRef = firebase.firestore().collection('users')
    const questsEnrollRef = firebase.firestore().collection('questsEnroll')

    const getStorageData = async() => {
        try {
            const uid = await AsyncStorage.getItem("uid")
            setUid(uid)
            console.log(uid)
        } catch (error) {

        }
    }

    useEffect(() => {
        getStorageData()
        questsRef
            .onSnapshot(
                querySnapshot => {
                    const questData = []
                    querySnapshot.forEach(doc => {
                        const quests = doc.data()
                        quests.id = doc.id
                        questData.push(quests)
                    });
                    setQuests(questData)
                    console.log(quests, '122')
                },
                error => {
                    console.log(error)
                    }
                )
        const questsDataEnrollRef = firebase.firestore().collection('questsEnroll').where('studentEnrollId','==',uid)
        questsDataEnrollRef
            .onSnapshot(
                querySnapshot => {
                    const questRefData = []
                    querySnapshot.forEach(doc => {
                        const questsRef = doc.data().taskId
                        console.log(questsRef)
                        questRefData.push(questsRef)
                    });
                    console.log(questRefData, '<- Data1')
                    setEnrollRefData(questRefData)
                    console.log(EnrollRefData, '<- Data3')
                },
                error => {
                    console.log(error)
                }
            )
        // studentsRef
        //     .onSnapshot(
        //         querySnapshot => {
        //             const studentData = []
        //             querySnapshot.forEach(doc => {
        //                 const studentRef = doc.data()
        //                 // studentRef.id = doc.id
        //                 studentData.push(studentRef)
        //             });
        //             setStudentData(studentData)
        //             console.log(StudentData, 'Test')
        //         }
        //     )

    }, [])

    const onEnrollPress = async({item}) => {
        try{
            console.log(uid)
            console.log(item)
            questsRef.doc(item.id).update({
                unitEnroll : item.unitEnroll + 1
            });
            const data = {
                studentEnrollId : uid,
                // studentDepartment : StudentData.department,
                // studentEmail : StudentData.email,
                // studentFirst : StudentData.firstName,
                // studentLastName : StudentData.lastName,
                // studentNumber : StudentData.studentNumber,
                // StudentPhone : StudentData.phoneNumber,
                taskId : item.id,
                questName : item.questName,
                location : item.location,
                amountTime : item.amountTime,
                status : 'In Progress',
                createdAt : firebase.firestore.FieldValue.serverTimestamp()
            };
            questsEnrollRef.add(data);
            alert('ลงทะเบียนงานสำเร็จ')
        }catch(error){
            alert(error) 
        }
    }

    const renderQuests = ({item}) => {
        if ((item.unit>item.unitEnroll) && (EnrollRefData.includes(item.taskId) == false)) {
            return (
                <View style={{ width:335, height:100, flexDirection:'row' }}>
                    <View style={{ flex:4 }}>
                        <View>
                            <Text>
                                {item.questName}
                            </Text>
                            <Text>
                                {item.location}
                            </Text>
                            <Text>
                                {item.unit}
                            </Text>
                            <Text>
                                {item.unitEnroll}
                            </Text>
                            <Text>
                                {item.amountTime}
                            </Text>
                        </View>                    
                    </View>
                    <View style={{ flex:1 }}>
                        <Button title='ลงทะเบียน' onPress={() => onEnrollPress({item})}/>
                    </View>
                </View>
            )
        }

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
                                <Text>Map Quest</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:7, backgroundColor:'#CCBAFF' }}>
                <MapView style={{ flex:1 }}
                    showsPointsOfInterest={true}
                    showsIndoors={true}
                    showsTraffic={true}
                    showsBuildings={true}
                    pitchEnabled={true}
                    zoomEnabled={true}
                    rotateEnabled={true}
                    initialRegion={{
                    latitude: 19.028539426739485,
                    longitude: 99.89619075319574,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009
                    }}>
                        <Marker
                            coordinate={{ latitude:19.02773816156706, longitude:99.8998170998307}}
                        >
                            <Callout>
                                <Text>
                                    คณะเทคโนโลยีสารสนเทศและการสื่อสาร
                                </Text>
                            </Callout>
                        </Marker>
                </MapView>
            </View>
            <View style={{ flex:8, backgroundColor:'#FFFFFF' }}>
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
    )
}
 
export default MapQuestScreen;