import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { GlobalStyles, Colors } from '../../assets/styles';

const LoginPage = () => (
  <KeyboardAvoidingView
    style={GlobalStyles.flex1}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <View style={GlobalStyles.centerAll}>
      <Text style={GlobalStyles.loginTitle}>Welcome Back</Text>
      <Text style={GlobalStyles.loginSubtitle}>
        Sign in to continue to CIMS
      </Text>

      <TextInput
        style={GlobalStyles.input}
        placeholder="Email Address"
        placeholderTextColor={Colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={Colors.textMuted}
      />

      <TouchableOpacity activeOpacity={0.8} style={GlobalStyles.primaryButton}>
        <Text style={GlobalStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Optional: Forgot Password link to match professional UIs */}
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.primary,
            fontWeight: '600',
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
);

export default LoginPage;
