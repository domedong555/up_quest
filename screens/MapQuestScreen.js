import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { firebase } from './firebase/config';
import { FlatList } from 'react-native-gesture-handler';

import MapView, { Callout, Marker } from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';

const MapQuestScreen = () => {

    const [uid, setUid] = useState('')
    const [quests, setQuests] = useState([])
    const [markers, setMarkers] = useState([])
    const [EnrollRefData, setEnrollRefData] = useState([])
    const [StudentData, setStudentData] = useState({
        department : '',
        email : '',
        firstName : '',
        lastName : '',
        studentNumber : '',
        phoneNumber : '',
    })
    const [EnrollData, setEnrollData] = useState({
        taskId:''   
    })
    const [locationMarker, setLocationMarker] = useState([])
    const [taskList, setTaskList] = useState([])
    const [button, setButton] = useState('Press')

    const navigation = useNavigation();

    const onBackPress = () => {
        setButton('Press')
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
                    const unitCheck = []
                    const location = []
                    querySnapshot.forEach(doc => {
                        const quests = doc.data()
                        quests.id = doc.id
                        questData.push(quests)
                        if (doc.data().unit > doc.data().unitEnroll) {
                            unitCheck.push(doc.data().location)
                            if (doc.data().location == 'คณะเทคโนโลยีสารสนเทศและการสื่อสาร') {
                                location.push({location: 'คณะเทคโนโลยีสารสนเทศและการสื่อสาร', latitude: 19.02773816156706, longitude: 99.8998170998307})
                            }else if (doc.data().location == 'คณะพลังงานและสิ่งแวดล้อม') {
                                location.push({location: 'คณะพลังงานและสิ่งแวดล้อม' , latitude: 19.031479, longitude: 99.9015699})
                            }else if (doc.data().location == 'คณะวิศวกรรมศาสตร์') {
                                location.push({location: 'คณะวิศวกรรมศาสตร์' , latitude: 19.0315101, longitude: 99.9009085})
                            }else if (doc.data().location == 'คณะสหเวชศาสตร์') {
                                location.push({location: 'คณะสหเวชศาสตร์' , latitude: 19.0317001, longitude: 99.8999474})
                            }else if (doc.data().location == 'คณะเภสัชศาสตร์') {
                                location.push({location: 'คณะเภสัชศาสตร์' , latitude: 19.0313981, longitude: 99.898828})
                            }else if (doc.data().location == 'คณะสถาปัตยกรรมศาสตร์') {
                                location.push({location: 'คณะสถาปัตยกรรมศาสตร์' , latitude: 19.03127198126337, longitude: 99.8997568391155})
                            }else if (doc.data().location == 'คณะเกษครศาสตร์และทรัพยากรธรรมชาติ') {
                                location.push({location: 'คณะเกษครศาสตร์และทรัพยากรธรรมชาติ' , latitude: 19.0314755, longitude: 99.89861})
                            }else if (doc.data().location == 'คณะแพทยศาสตร์') {
                                location.push({location: 'คณะแพทยศาสตร์' , latitude: 19.0312754, longitude: 99.8985755})
                            }else if (doc.data().location == 'คณะพยาบาลศาสตร์') {
                                location.push({location: 'คณะพยาบาลศาสตร์' , latitude: 19.0313054, longitude: 99.8971983})
                            }else if (doc.data().location == 'คณะวิทยาศาสตร์') {
                                location.push({location: 'คณะวิทยาศาสตร์' , latitude: 19.0314398, longitude: 99.8973537})
                            }else if (doc.data().location == 'คณะวิทยาศาสตร์การแพทย์') {
                                location.push({location: 'คณะวิทยาศาสตร์การแพทย์' , latitude: 19.0312402, longitude: 99.8965614})
                            }else if (doc.data().location == 'คณะศิลปศาสตร์') {
                                location.push({location: 'คณะศิลปศาสตร์' , latitude: 19.03023868803022, longitude: 99.89486820947641})
                            }else if (doc.data().location == 'คณะนิติศาสตร์') {
                                location.push({location: 'คณะนิติศาสตร์' , latitude: 19.0265041, longitude: 99.8951506})
                            }else if (doc.data().location == 'คณะวิทยาการจัดการและสารสนเทศศาสตร์') {
                                location.push({location: 'คณะวิทยาการจัดการและสารสนเทศศาสตร์' , latitude: 19.0265336, longitude: 99.8948616})
                            }else if (doc.data().location == 'คณะรัฐศาสตร์และสังคมศาสตร์') {
                                location.push({location: 'คณะรัฐศาสตร์และสังคมศาสตร์' , latitude: 19.0261942, longitude: 99.894725})
                            }else if (doc.data().location == 'คณะทันตแพทยศาสตร์') {
                                location.push({location: 'คณะทันตแพทยศาสตร์' , latitude: 19.0282797, longitude: 99.9127909})
                            }else if (doc.data().location == 'วิทยาลัยการศึกษา') {
                                location.push({location: 'วิทยาลัยการศึกษา' , latitude: 19.0261942, longitude: 99.894725})
                            }else if (doc.data().location == 'หอประชุมพญางำเมือง') {
                                location.push({location: 'หอประชุมพญางำเมือง' , latitude: 19.0289339, longitude: 99.8971641})
                            }else if (doc.data().location == 'อาคารสำนักงานอธิการบดี') {
                                location.push({location: 'อาคารสำนักงานอธิการบดี' , latitude: 19.0285244, longitude: 99.8961563})
                            }else if (doc.data().location == 'ศูนย์การแพทย์และโรงพยาบาล มหาวิทยาลัยพะเยา') {
                                location.push({location: 'ศูนย์การแพทย์และโรงพยาบาล มหาวิทยาลัยพะเยา' , latitude: 19.0287594, longitude: 99.9217258})
                            }else if (doc.data().location == 'ศูนย์บรรณาสารและการเรียนรู้') {
                                location.push({location: 'ศูนย์บรรณาสารและการเรียนรู้' , latitude: 19.0311956, longitude: 99.8945081})
                            }else if (doc.data().location == 'อาคาร 99 ปี พระอุบาลีคุณูปมาจารย์') {
                                location.push({location: 'อาคาร 99 ปี พระอุบาลีคุณูปมาจารย์' , latitude: 19.0342652, longitude: 99.885721})
                            }else if (doc.data().location == 'ศูนย์หนังสือจุฬา') {
                                location.push({location: 'ศูนย์หนังสือจุฬา' , latitude: 19.0264871, longitude: 99.8948591})
                            }else if (doc.data().location == 'อาคารสงวนเสริมศรี') {
                                location.push({location: 'อาคารสงวนเสริมศรี' , latitude: 19.0342652, longitude: 99.885721})
                            }else if (doc.data().location == 'สนามกีฬา') {
                                location.push({location: 'สนามกีฬา' , latitude: 19.0328479, longitude: 99.8850987})
                            }else if (doc.data().location == 'หอพักนิสิต (UP 1-18)') {
                                location.push({location: 'หอพักนิสิต (UP 1-18)' , latitude: 19.0314479, longitude: 99.8892029})
                            }else if (doc.data().location == 'โรงเรียนสาธิตมหาวิทยาลัย') {
                                location.push({location: 'โรงเรียนสาธิตมหาวิทยาลัย' , latitude: 19.0353988, longitude: 99.8831087})
                            }else if (doc.data().location == 'พระพุทธภุชคารักษ์') {
                                location.push({location: 'พระพุทธภุชคารักษ์' , latitude: 19.0267887, longitude: 99.8904526})
                            }else {
                                alert('error')
                            }
                        }
                    });
                    setQuests(questData)
                    setLocationMarker(location)
                    console.log(quests, '1221')
                    console.log(unitCheck, 'Check unit')
                    console.log(locationMarker, 'Marker')
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
                    console.log(questRefData, '<- Data331')
                    setEnrollRefData(questRefData)
                    console.log(EnrollRefData, '<- Data3')
                },
                error => {
                    console.log(error)
                }
            )
        studentsRef
            .onSnapshot(
                querySnapshot => {
                    const studentData = []
                    querySnapshot.forEach(doc => {
                        const studentRef = doc.data()
                        // studentRef.id = doc.id
                        studentData.push(studentRef)
                    });
                    setStudentData(studentData)
                    console.log(StudentData, 'Testing')
                }
            )
    }, [button])

    const onEnrollPress = async({item}) => {
        try{
            console.log(uid)
            console.log(item)
            setButton('Pressed')
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
        if ((item.unit>item.unitEnroll) && ((EnrollRefData.includes(item.id)) == false)) {
            return (
                <View style={{ width: '100%', marginTop: 10, alignItems: 'center' }}>
                    <View style={{ width: '95%' }}>
                        <View style={{ borderWidth: 0.6, paddingLeft: 10, width: '100%', padding: 1, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style= {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: 5 }}>
                                    <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.questName}
                                    </Text>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.location}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end', paddingRight: 10, paddingTop: 5 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.dateStart} - {item.dateEnd}
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.timeStart} - {item.timeEnd}
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        จำนวน {item.amountTime} ชั่วโมง
                                    </Text>
                                </View>
                            </View>
                            
                            <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', paddingRight: 5 }}>
                                <View>
                                    <Text style= {{ flexDirection: 'column', paddingBottom:5}}>
                                        จำนวนคน {item.unitEnroll} / {item.unit}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'purple', padding: 5 }}>
                                    <Button 
                                        title='ลงทะเบียน' 
                                        onPress={() => onEnrollPress({item})}
                                    />
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }else if (((item.unit>item.unitEnroll) && ((EnrollRefData.includes(item.id)) == true))) {
            return (
                <View style={{ width: '100%', marginTop: 10, alignItems: 'center' }}>
                    <View style={{ width: '95%' }}>
                        <View style={{ borderWidth: 0.6, paddingLeft: 10, width: '100%', padding: 1, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style= {{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: 5 }}>
                                    <Text style= {{ fontSize: 18, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.questName}
                                    </Text>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.location}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'flex-end', paddingRight: 10, paddingTop: 5 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.dateStart} - {item.dateEnd}
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        {item.timeStart} - {item.timeEnd}
                                    </Text>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold', flexDirection: 'column' }}>
                                        จำนวน {item.amountTime} ชั่วโมง
                                    </Text>
                                </View>
                            </View>
                            
                            <View style= {{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'flex-end', paddingRight: 5 }}>
                                <View>
                                    <Text style= {{ flexDirection: 'column', paddingBottom:5}}>
                                        จำนวนคน {item.unitEnroll} / {item.unit}
                                    </Text>
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flexDirection: 'column', color: 'purple', padding: 5 }}>
                                    ลงทะเบียนแล้ว
                                </Text>
                            </View>
                        </View>
                    </View>
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
                            <Text style={{ fontSize: 25, color: 'white', margin: 5 }}>MAP QUEST</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end", backgroundColor: '#A788FF' }}>
                        {/* <TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                Logout
                            </Text>
                        </TouchableOpacity> */}
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
            <View style={{ flex: 1, backgroundColor: '#9773FF' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white' }} >
                            รายชื่องานที่เปิด
                        </Text>
                    </View>
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