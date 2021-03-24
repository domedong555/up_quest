import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import MapView from 'react-native-maps'

const HomeScreen = (props) => {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    // const userID = props.extraData.id

    const navigation = useNavigation();

    const onProfilePress = () => {
        navigation.navigate('Profile')
        // navigation.navigate('Profile',{ user: userID })
    }

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#B4B4B4' }}>
            <View style={{ flex: 1.5, backgroundColor: '#A788FF' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
                        {/* <TouchableOpacity>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                โปรไฟล์
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: "center" }}>
                        <View>
                            <Text style={{ fontSize: 25, color: 'white', margin: 5 }}>UP QUEST</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-end", backgroundColor: '#A788FF' }}>
                        <TouchableOpacity onPress={onProfilePress}>
                            <Text style={{ fontSize: 20, color: 'white', margin: 5 }}>
                                โปรไฟล์
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex:15, backgroundColor:'#CCBAFF' }}>
                <View style={{ flex:2, backgroundColor:'#CCBAFF', marginHorizontal:20, marginTop: 20 }}>
                    {/* <View style={{ alignItems: 'center', margin: 5, marginTop: 55 }}> */}
                        <MapView style={{ flex:1 }}
                            showsPointsOfInterest={true}
                            showsIndoors={true}
                            showsTraffic={true}
                            showsBuildings={true}
                            pitchEnabled={false}
                            zoomEnabled={false}
                            rotateEnabled={false}
                            initialRegion={{
                                latitude: 19.028539426739485,
                                longitude: 99.89619075319574,
                                latitudeDelta: 0.009,
                                longitudeDelta: 0.009
                            }}
                        />
                        {/* <Image
                            style={{ width:'300px', height:'250px' }}
                            source={require('../assets/icon.png')}
                        /> */}
                    {/* </View> */}
                </View>
                <View style={{ flex:2, backgroundColor:'orange' }}>
                    <View style={{ flex:1, flexDirection:'column', alignItems:'center', backgroundColor:'white' }}>
                        <View style={{ width:150 , alignContent:'center'}}>
                            <Button color="#AA67FF" title='งานจิตอาสา' onPress={() => navigation.navigate('MapQuest')} />
                        </View>
                    </View>
                    <View style={{ flex:5, backgroundColor:'white' }}>
                        <View style={{ flex:1, backgroundColor:'white' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                {/* <View style={{ flex:1, backgroundColor:'white'}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('EducationReport')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:50, height:50}}
                                                source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                รายงาน
                                            </Text>
                                            <Text>
                                                ผลการเรียน
                                            </Text>
                                        </View>
                                            
                                    </TouchableOpacity>
                                </View> */}
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('QuestEnroll')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:80, height:80}}
                                                source={{uri:'https://image.flaticon.com/icons/png/512/760/760205.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                งานจิตอาสา
                                            </Text>
                                            <Text>
                                                ที่ลงทะเบียน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                                {/* <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Fund')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:50, height:50}}
                                                source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                ประวัติ
                                            </Text>
                                            <Text>
                                                การได้รับทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View> */}
                            </View>
                        </View>
                        <View style={{ flex:1, backgroundColor:'blue' }}>
                            <View style={{ flex:1, flexDirection:'row' }}>
                                {/* <View style={{ flex:1, backgroundColor:'white' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Income')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:50, height:50}}
                                                source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                รายรับ
                                            </Text>
                                            <Text>
                                                รายจ่าย
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View> */}
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                     <TouchableOpacity onPress={() => navigation.navigate('FundRule')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15  }}>
                                            <Image
                                                style={{ width:80, height:80}}
                                                source={{uri:'https://cdn.iconscout.com/icon/free/png-256/terms-condition-1795406-1522774.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                เงื่อนไขทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex:1, backgroundColor:'white' }}>
                                     <TouchableOpacity onPress={() => navigation.navigate('Duty')}>
                                        <View style={{ alignItems: 'center', margin: 5, marginTop: 15 }}>
                                            <Image
                                                style={{ width:80, height:80 }}
                                                source={{uri:'https://image.flaticon.com/icons/png/128/3248/3248732.png'}}
                                            />
                                        </View>

                                        <View style={{alignItems: 'center'}}>
                                            <Text>
                                                บทบาทหน้าที่
                                            </Text>
                                            <Text>
                                                ของนิสิตทุน
                                            </Text>
                                        </View>           
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;