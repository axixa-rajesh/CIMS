import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Users, GraduationCap, BookOpen, Clock } from 'lucide-react-native';
import { GlobalStyles } from '../../assets/styles';

const DashboardPage = () => (
  <ScrollView style={GlobalStyles.flex1}>
    <View style={GlobalStyles.grid}>
      <View style={GlobalStyles.dashboardCard}>
        <View style={GlobalStyles.iconBox}>
          <Users color={'#fff'} size={20} />
        </View>
        <Text style={GlobalStyles.cardValue}>1,250</Text>
        <Text style={GlobalStyles.cardLabel}>Total Users</Text>
      </View>

      <View style={GlobalStyles.dashboardCard}>
        <View style={[GlobalStyles.iconBox, { backgroundColor: '#10B981' }]}>
          <GraduationCap color={'#fff'} size={20} />
        </View>
        <Text style={GlobalStyles.cardValue}>450</Text>
        <Text style={GlobalStyles.cardLabel}>Graduates</Text>
      </View>
    </View>
  </ScrollView>
);

export default DashboardPage;
