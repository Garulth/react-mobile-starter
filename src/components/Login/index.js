import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';


import { Text16, Text34 } from '../../common/styles';

class Login extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2abab0'
      }}>
      <Text34 style={{ color: '#FFF' }}>SHE VN</Text34>

      <Icon
        raised
        name='heartbeat'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} />
      <Button
        large
        rounded
        buttonStyle={{ height: 56 }}
        backgroundColor={'#b72217'}
        title='LOG IN' />

    </View>
  }
};
export default Login;