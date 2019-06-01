import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation"
import HttpApi from '../util/HttpApi'

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'MainView' })
    ]
});

class LoginView extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.subView}>
                    <View>
                        <Text>登录界面</Text>
                        <Button
                            buttonStyle={{ width: 100 }}
                            containerStyle={{ width: 100 }}
                            title='登录'
                            type="solid"
                            raised
                            onPress={this.loginHandler}
                        />
                    </View>
                </View>
            </View>
        );
    }
    loginHandler = () => {
        console.log('点击登录');
        // this.props.navigation.dispatch(resetAction);
        // HttpApi.loginByUserInfo({username:'15555105983',password:'123456'},(res)=>{
        //     console.log(res.data.data);
        // })
        HttpApi.getAreaInfo({},(res)=>{
            console.log(res.data.data);
        })
    }
}

export default LoginView;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
    },
    subView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})