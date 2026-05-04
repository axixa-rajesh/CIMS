import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Settings} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { GlobalStyles } from '../../assets/styles';

const SettingsPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const renderSettingInput = (label: string, currentValue: string) => (
        <View>
            <Text style={GlobalStyles.label}>{label}</Text>
            <TextInput style={GlobalStyles.input} defaultValue={currentValue} />
        </View>
    );
    return (
      <SafeAreaView style={GlobalStyles.safeArea}>
        <View style={GlobalStyles.pageHeader}>
          <View>
            <Text style={GlobalStyles.headerTitle}>
              {viewMode === 'table' ? 'System Settings' : 'Edit Config'}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              GlobalStyles.toggleBtn,
              viewMode === 'form' && GlobalStyles.cancelBtn,
            ]}
            onPress={() => setViewMode(viewMode === 'table' ? 'form' : 'table')}
          >
            <Text style={GlobalStyles.toggleBtnText}>
              {viewMode === 'table' ? 'Edit All' : 'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
          {viewMode === 'table' ? (
            <View style={GlobalStyles.card}>
              <Table>
                <Row
                  data={['Setting', 'Current Value']}
                  flexArr={[1, 1.5]}
                  style={GlobalStyles.tableHead}
                  textStyle={GlobalStyles.headText}
                />
                <Row
                  data={['Currency', 'INR (₹)']}
                  flexArr={[1, 1.5]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              </Table>
            </View>
          ) : (
            <View style={[GlobalStyles.card, GlobalStyles.formPadding]}>
              {renderSettingInput('App Name', 'CIMS Pro')}
              {renderSettingInput('Contact Email', 'support@cims.com')}
              {renderSettingInput('Currency Symbol', '₹')}
            
                <TouchableOpacity style={GlobalStyles.primaryButton}>
                    <Text style={GlobalStyles.buttonText}>Update Settings</Text>
                </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
export default SettingsPage;