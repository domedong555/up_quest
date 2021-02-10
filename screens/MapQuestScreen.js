import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Updates } from 'expo';

import { firebase } from './firebase/config';
import auth from 'firebase/auth';
import { FlatList } from 'react-native-gesture-handler';

const MapQuestScreen = () => {

    const [quests, setQuests] = useState([])

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }

    const questsRef = firebase.firestore().collection('quests')

    useEffect(() => {
        (async () => {
            try {
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
                        },
                        error => {
                            console.log(error)
                        }
                    )
            }catch (error) {
                alert(error)
            }
        })();
    }, [])

    const renderQuests = ({item}) => {
        return (
            <View style={{ width:335, height:100, flexDirection:'row' }}>
                <View style={{ flex:4 }}>
                    <View>
                        <Text>
                            {item.questName}
                        </Text>
                        <Text>
                            {item.staff}
                        </Text>
                        <Text>
                            {item.location}
                        </Text>
                        <Text>
                            {item.unit}
                        </Text>
                        <Text>
                            {item.amountTime}
                        </Text>
                    </View>                    
                </View>
                <View style={{ flex:1 }}>
                    <Button title='ลงทะเีบยน' />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex:1, flexDirection:'column' }}>
            <View style={{ flex:1.5, backgroundColor:'#FFFFFF' }}>
                <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-start", backgroundColor:'white' }}>
                            <TouchableOpacity onPress={onBackPress}>
                                <Text style={{ fontSize:24 }}>Back</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex:2, flexDirection:'row', justifyContent:"center", backgroundColor:'white' }}>
                            <View>
                                <Text style={{ fontSize:24 }}>Map Quest</Text>
                            </View>
                        </View>
                        <View style={{ flex:1, flexDirection:'row', justifyContent:"flex-end", backgroundColor:'white' }}>

                        </View>
                    </View>
            </View>
            <View style={{ flex:7, backgroundColor:'#CCBAFF' }}>
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