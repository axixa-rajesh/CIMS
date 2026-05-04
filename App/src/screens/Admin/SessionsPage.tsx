import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { GlobalStyles } from '../../assets/styles';

const SessionsPage = () => {
  const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
  const renderInput = (label: string, placeholder: string) => (
    <View style={GlobalStyles.formGroup}>
      <Text style={GlobalStyles.label}>{label}</Text>
      <TextInput style={GlobalStyles.input} placeholder={placeholder}/>
    </View>
  );
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.pageHeader}>
        <View>
          <Text style={GlobalStyles.headerTitle}>
            {viewMode === 'table' ? 'Academic Sessions' : 'Create Session'}
          </Text>
          <Text style={GlobalStyles.headerSubtitle}>Manage Year & Timings</Text>
        </View>
        <TouchableOpacity
          style={[
            GlobalStyles.toggleBtn,
            viewMode === 'form' && GlobalStyles.cancelBtn,
          ]}
          onPress={() => setViewMode(viewMode === 'table' ? 'form' : 'table')}
        >
          <Text style={GlobalStyles.toggleBtnText}>
            {viewMode === 'table' ? '+ New' : 'Back'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
        {viewMode === 'table' ? (
          <View style={GlobalStyles.card}>
            <Table>
              <Row
                data={['ID', 'Session Year', 'Status']}
                flexArr={[1, 2, 1]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              <Row
                data={['S1', '2025 - 2026', 'Active']}
                flexArr={[1, 2, 1]}
                style={GlobalStyles.row}
                textStyle={GlobalStyles.cellText}
              />
            </Table>
          </View>
        ) : (
          <View>
            {renderInput('Session Year', 'e.g. 2026-27')}
            {renderInput('Start Date', 'DD/MM/YYYY')}
            {renderInput('End Date', 'DD/MM/YYYY')}

            <TouchableOpacity style={GlobalStyles.primaryButton}>
              <Text style={GlobalStyles.buttonText}>Save Session</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
export default SessionsPage;