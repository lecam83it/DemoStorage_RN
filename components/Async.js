import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,

} from 'react-native';

export default class App extends Component {

  saveData(){
    let user = 'Lee DT';
    AsyncStorage.setItem('USER', user);
  }

  async displayData(){
    try {
      let user = await AsyncStorage.getItem('USER');
      alert(user);
    } catch (error) {
      console.error(error);
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnBorder} 
          onPress={this.saveData.bind(this)}
        >
          <Text style={styles.btnText} >SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBorder} 
            onPress={this.displayData.bind(this)}
          >
          <Text style={styles.btnText} >GET</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 4,
  },
  btnText : {
    fontSize: 20,
    margin: 5,
  },
  btnBorder : {
    borderColor: 'black',
    borderWidth: 1,
    margin : 20,
  }

});
