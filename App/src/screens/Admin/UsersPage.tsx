import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { GlobalStyles, Colors } from '../../assets/styles';

const UsersPage = () => (
  <View style={GlobalStyles.flex1}>
    <FlatList
      data={[{ id: '1', name: 'abc', email: 'abc@gmail.com' }]}
      contentContainerStyle={[GlobalStyles.scrollContent, { paddingTop: 20 }]}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={[GlobalStyles.card, GlobalStyles.userRow]}>
          <View style={GlobalStyles.sidebarAvatar}>
            <Text style={GlobalStyles.sidebarAvatarText}>
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={GlobalStyles.sidebarUserInfo}>
            <Text style={GlobalStyles.sidebarUserName}>{item.name}</Text>
            <Text style={GlobalStyles.sidebarUserSubtitle}>{item.email}</Text>
          </View>
        </View>
      )}
    />
    <TouchableOpacity style={GlobalStyles.fab} activeOpacity={0.8}>
      <Plus color="#fff" size={30} />
    </TouchableOpacity>
  </View>
);

export default UsersPage;
