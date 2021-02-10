import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './screens/firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import EducationReportScreen from './screens/EducationReportScreen';
import QuestEnrollScreen from './screens/QuestEnrollScreen';
import FundScreen from './screens/FundScreen';
import IncomeScreen from './screens/IncomeScreen';
import FundRuleScreen from './screens/FundRuleScreen';
import DutyScreen from './screens/DutyScreen';
import QuestScreen from './screens/QuestEnrollScreen';
import MapQuestScreen from './screens/MapQuestScreen';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState(null)
  const [userLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    const authListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserLogged(user ? true : false);
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
    return authListener;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator   
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login"
      >
        { userLogged == true ? (
          <>
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EducationReport" component={EducationReportScreen} />
            <Stack.Screen name="QuestEnroll" component={QuestEnrollScreen} />
            <Stack.Screen name="Fund" component={FundScreen} />
            <Stack.Screen name="Income" component={IncomeScreen} />
            <Stack.Screen name="FundRule" component={FundRuleScreen} />
            <Stack.Screen name="Duty" component={DutyScreen} />
            <Stack.Screen name="Quest" component={QuestScreen} />
            <Stack.Screen name='MapQuest' component={MapQuestScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegisterScreen} />          
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;