import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux'
import FirstScreen from './Components/FirstScreen'
import SecondScreen from './Components/SecondScreen'
import OtherScreen from './Components/OtherScreen'

const TabIcon = ({focused,title}) => {
  return(
    <Text style={{color: focused? 'green' : 'black'}}>{title}</Text>
  )
}

class PlaylistItem {
	constructor(name, uri, image) {
		this.name = name;
		this.uri = uri;
		this.image = image;
	}
}

const PLAYLIST = [
	new PlaylistItem(
		'Comfort Fit - “Sorry”',
		'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
	new PlaylistItem(
		'Mildred Bailey – “All Of Me”',
		'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
	new PlaylistItem(
		'Podington Bear - “Rubber Robot”',
		'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
];

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      playList: PLAYLIST,
      currentSongId: 0,
    }
  }

  songIndexCallback = (index) => {
    this.setState({currentSongId: index}, () => Actions.player())
  }

  render(){
    return(
      <Router>
        <Stack key='root'>
          <Scene 
            key='tabbar'
            tabs
            headerBackTitle
            hideNavBar
            showLabel={false}
            tabStyle={{borderColor: 'black', borderWidth: 1}}>
              <Scene  key='first' 
                      title='Tracks' 
                      icon={TabIcon}>
                <Scene  key='songlist'  
                        title='Song List' 
                        component={() => (<FirstScreen playList={this.state.playList} 
                        songIndexCallback={this.songIndexCallback}/>)}/>
              </Scene>
              <Scene  key='player'  
                      title='Player' 
                      icon={TabIcon} 
                      component={() => (<SecondScreen playList={this.state.playList} 
                      currentSongId={this.state.currentSongId}/>)}/>
              <Scene  key='third' 
                      title='3' 
                      icon={TabIcon}>
                <Scene  key='settings' 
                        component={OtherScreen}/>
              </Scene>
              <Scene  key='fourth' 
                      title='4' 
                      icon={TabIcon}>
                <Scene  key='auth' 
                        component={OtherScreen}/>
              </Scene>
          </Scene>
        </Stack>
      </Router>
    );  
  } 
}

