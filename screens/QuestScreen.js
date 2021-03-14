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
                                <Text>Quest</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
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
            </View>
        </View>
    )
}

export default QuestScreen;