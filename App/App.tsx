import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import LoginPage from './src/screens/Auth/LoginPage';
import { GlobalStyles } from './src/assets/styles';
import UsersPage from './src/screens/Admin/UsersPage';
import DashboardPage from './src/screens/Dashboard/DashboardPage';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.flex1}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={GlobalStyles.flex1.backgroundColor}
        />
        <LoginPage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
