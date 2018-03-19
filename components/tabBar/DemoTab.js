import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';


export default class DemoTab extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedTab : 'home',
        }
    }

    render(){
        return(
            <TabNavigator
            sceneStyle={styles.renderSence}
            tabBarStyle={styles.customTab}
            tabBarShadowStyle={{height: 20, backgroundColor: 'red'}}
            >
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View>
                        <Text>XXXXXXXXX</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View>
                        <Text>YYYYYYYYY</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
 
}
const styles = StyleSheet.create({
    customTab : {
        backgroundColor: 'pink',
    },
    renderSence:{
        backgroundColor : 'green'
    }
});