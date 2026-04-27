import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { GlobalStyles, Colors } from '../../assets/styles';

const LoginPage = () => (
  <KeyboardAvoidingView style={GlobalStyles.flex1} behavior="padding">
    <View style={GlobalStyles.centerAll}>
      <Text style={GlobalStyles.loginTitle}>Welcome</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Email"
        placeholderTextColor={Colors.placeholder}
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={Colors.placeholder}
      />
      <TouchableOpacity style={GlobalStyles.primaryButton}>
        <Text style={GlobalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

export default LoginPage;