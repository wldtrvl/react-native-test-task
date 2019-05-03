import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'


const styles =  new StyleSheet.create({
    component: {
        justifyContent: 'flex-start',
        flex: 1
    },
    trackListItem: {
        margin: 10,
    },
    trackList: {
        fontSize: 20
    }
})

export default class FirstScreen extends Component{

    render(){
        return(
            <View style={styles.component}>
                <FlatList
                    data={this.props.playList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                         return (
                            <TouchableHighlight
                                style={styles.trackListItem}
                                onPress={() => this.props.songIndexCallback(index, item)}
                    >
                <Text key={item.id} style={styles.trackList}>{item.name}</Text>
              </TouchableHighlight>
            );
          }}
        />
            </View>
        )
    }
}