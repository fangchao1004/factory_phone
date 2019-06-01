import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation"
import HttpApi from '../util/HttpApi'
import DeviceStorage, { USER_INFO } from '../util/DeviceStorage'

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
        HttpApi.loginByUserInfo({ username: '15555105983', password: '123456' }, (res) => {
            if (res.data.code === 0) {
                this.props.navigation.dispatch(resetAction);
                console.log('登录数据：', res.data.data[0]);
                DeviceStorage.save(USER_INFO, res.data.data[0]);
                setTimeout(() => {
                    DeviceStorage.get(USER_INFO).then((val) => {
                        console.log("获取：", val);
                    })
                }, 1000);
            }
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