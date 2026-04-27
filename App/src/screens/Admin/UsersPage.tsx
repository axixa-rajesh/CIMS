import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { GlobalStyles } from '../../assets/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const UsersPage = () => (
  <SafeAreaView style={GlobalStyles.flex1}>
    <Text style={GlobalStyles.header}>Users</Text>
    <FlatList
      data={[{ id: '1', name: 'abc', email: 'abc@gmail.com' }]}
      contentContainerStyle={{ paddingBottom: 100 }}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={GlobalStyles.userRow}>
          <View style={GlobalStyles.avatar}>
            <Text style={GlobalStyles.avatarText}>
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={GlobalStyles.userName}>{item.name}</Text>
            <Text style={GlobalStyles.userEmail}>{item.email}</Text>
          </View>
        </View>
      )}
    />
    <TouchableOpacity style={GlobalStyles.fab} activeOpacity={0.8}>
      <Plus color="#fff" size={30} />
    </TouchableOpacity>
  </SafeAreaView>
);

export default UsersPage;
