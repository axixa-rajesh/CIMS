import React, { useState, useEffect } from 'react';
import { Dimensions, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from './src/assets/styles';

import Sidebar from './src/components/Sidebar/Sidebar';

import DashboardPage from './src/screens/Dashboard/DashboardPage';
import UsersPage from './src/screens/Admin/UsersPage';
import LoginPage from './src/screens/Auth/LoginPage';
import AttendancePage from './src/screens/Students/AttendancePage';
import CoursesPage from './src/screens/Academic/CoursesPage';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');

  const renderContent = () => {
    switch (activeScreen) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Attendance':
        return <AttendancePage />;
      case 'Profile':
        return <UsersPage />;
      case 'Courses':
        return <CoursesPage />;
      default:
        return <DashboardPage />;
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[GlobalStyles.flex1, { backgroundColor: '#FFFFFF' }]}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {activeScreen === 'Login' ? (
          <LoginPage />
        ) : (
          <Sidebar
            activeScreen={activeScreen}
            onNavigate={id => setActiveScreen(id)}
          >
            {renderContent()}
          </Sidebar>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;