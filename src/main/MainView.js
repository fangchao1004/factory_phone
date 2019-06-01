import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import HomeView from '../modeOfHome/HomeView'
import SelfView from '../modeOfSelf/SelfView'

class MainView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'a1',
        };
    }

    renderContent(pageView) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#feffff' }}>
                {pageView}
            </View>
        );
    }
    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}
            >
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image style={styles.icon} source={require('../../assets/tabBar/deviceList2.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/tabBar/deviceList1.png')} />}
                    selected={this.state.selectedTab === 'a1'}
                    onPress={() => this.onChangeTab('a1')}
                >
                    {this.renderContent(<HomeView navigation={this.props.navigation} />)}
                </TabNavigator.Item>
                <TabNavigator.Item
                    renderIcon={() => <Image style={styles.icon} source={require('../../assets/tabBar/selfCenter2.png')} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require('../../assets/tabBar/selfCenter1.png')} />}
                    title="个人中心"
                    selected={this.state.selectedTab === 'a4'}
                    onPress={() => this.onChangeTab('a4')}
                >
                    {this.renderContent(<SelfView navigation={this.props.navigation} />)}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

export default MainView;

const styles = StyleSheet.create({
    tab: {
        height: 55,
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',
        marginTop: 10
    },
})