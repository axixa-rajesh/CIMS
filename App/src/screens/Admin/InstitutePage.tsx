import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { GlobalStyles } from '../../assets/styles';

const InstitutePage = () => {
  const [viewMode, setViewMode] = useState<'table' | 'form'>('table');

  const renderInput = (label: string, placeholder: string) => (
    <View style={GlobalStyles.formGroup}>
      <Text style={GlobalStyles.label}>{label}</Text>
      <TextInput style={GlobalStyles.input} placeholder={placeholder} />
    </View>
  );

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.pageHeader}>
        <Text style={GlobalStyles.headerTitle}>
          {viewMode === 'table' ? 'Institutes' : 'Add New'}
        </Text>
        <TouchableOpacity
          style={[
            GlobalStyles.toggleBtn,
            viewMode === 'form' && GlobalStyles.cancelBtn,
          ]}
          onPress={() => setViewMode(viewMode === 'table' ? 'form' : 'table')}
        >
          <Text style={GlobalStyles.toggleBtnText}>
            {viewMode === 'table' ? '+ Add' : 'Back'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
        {viewMode === 'table' ? (
          <View style={GlobalStyles.card}>
            <Table>
              <Row
                data={['ID', 'Name', 'Status']}
                flexArr={[0.5, 2, 1]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              <Row
                data={['01', 'Elite Academy', 'Active']}
                flexArr={[0.5, 2, 1]}
                style={GlobalStyles.row}
                textStyle={GlobalStyles.cellText}
              />
            </Table>
          </View>
        ) : (
          <View style={[GlobalStyles.card, GlobalStyles.formPadding]}>
            {renderInput('Institute Name', 'Enter name')}
            {renderInput('Owner', 'Owner name')}
            <TouchableOpacity style={GlobalStyles.primaryButton}>
              <Text style={GlobalStyles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstitutePage;
