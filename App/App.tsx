import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from './src/assets/styles';
import AdmissionLeadsPage from './src/screens/Admissions/AdmissionLeadsPage';
const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={GlobalStyles.flex1}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={GlobalStyles.flex1.backgroundColor}
        />
        <AdmissionLeadsPage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
