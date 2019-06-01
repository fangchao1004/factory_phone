import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

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
                            title='123'
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
        this.props.navigation.navigate('MainView')
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