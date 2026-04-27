import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { Users } from 'lucide-react-native';
import { GlobalStyles } from "../../assets/styles";

const DashboardPage = () => (
    <ScrollView style={GlobalStyles.flex1}>
      <Text style={GlobalStyles.header}>Dashboard</Text>
      <View style={GlobalStyles.grid}>
        <View style={GlobalStyles.card}>
          <View style={GlobalStyles.iconBox}>
            <Users color={'#fff'} size={20} />
          </View>
          <Text style={GlobalStyles.cardValue}>1,250</Text>
          <Text style={GlobalStyles.cardLabel}>Users</Text>
        </View>
      </View>
    </ScrollView>
)
export default DashboardPage;