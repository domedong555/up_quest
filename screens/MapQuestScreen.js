import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { firebase } from './firebase/config';
import { FlatList } from 'react-native-gesture-handler';

import MapView, { Callout, Marker } from 'react-native-maps';

const MapQuestScreen = () => {

    const [quests, setQuests] = useState([])
    const [markers, setMarkers] = useState([])

    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack()
    }
    const questDataRef = firebase.firestore().collection('quests')
    const questsRef = firebase.firestore().collection('quests').where('unitEnroll','==',0)
    const staffsRef = firebase.firestore().collection('staffs')
    const questsEnrollRef = firebase.firestore().collection('questsEnroll')

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

    const onEnrollPress = async() => {
        try{

        }catch(error){
            alert(error)
        }
    }

    const renderQuests = ({item}) => {
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
                            {item.amountTime}
                        </Text>
                    </View>                    
                </View>
                <View style={{ flex:1 }}>
                    <Button title='ลงทะเีบยน' onPress={onEnrollPress}/>
                </View>
            </View>
        )
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