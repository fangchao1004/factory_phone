import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements';
import { NavigationActions, StackActions } from "react-navigation"

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'LoginView' })
    ]
});

class SelfView extends Component {
    render() {
        return (
            <View>
                <Text style={{ marginTop: 100 }}>个人中心</Text>
                <Button
                    buttonStyle={{ width: 100 }}
                    containerStyle={{ width: 100 }}
                    title='退出登录'
                    type="solid"
                    raised
                    onPress={this.logoutHandler}
                />
            </View>
        );
    }
    logoutHandler = () => {
        this.props.navigation.dispatch(resetAction);
    }
}

export default SelfView;