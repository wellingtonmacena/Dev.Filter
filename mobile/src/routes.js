import React  from 'react'
import {NavigationContainer} from '@react-navigation/native' 
import {createStackNavigator} from "@react-navigation/stack"

const AppStack = createStackNavigator()

import Main from './pages/Main'
import Profile from './pages/Profile'


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator >
                
            <AppStack.Screen name= "Main" 
            component ={Main}
            options ={
                { headerBackTitleVisible: false},
                {headerTintColor: "#FFF"},
                {},
                {headerStyle:{
                    backgroundColor: '#1fb5f8'        
                }}
                }/>

            <AppStack.Screen name = "Dev.Filter" 
            component={Profile}
            options ={
                { headerBackTitleVisible: false},
                {headerTintColor: "#FFF"},
                {headerStyle:{
                    backgroundColor: '#1fb5f8'    
                }}
                }
            />
            </AppStack.Navigator>
        </NavigationContainer>
    )
    }