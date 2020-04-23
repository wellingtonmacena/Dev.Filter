import React from 'react'
import {Text} from 'react-native'
import {WebView} from 'react-native-webview'

 function Profile({route, navigation }){
    
    const {nome} = route.params

    return(
    
        <WebView style ={{flex: 1}} source ={{uri:`https://github.com/${route.params}`}}></WebView>
   )
}

export default Profile