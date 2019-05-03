import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles =  new StyleSheet.create({
    component: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default class SecondScreen extends Component{
    render(){
        return(
            <View style={styles.component} >
                <Text>
                    Hello
                </Text>
            </View>
        )
    }
}