import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Table, Row } from "react-native-table-component";
import { GlobalStyles } from "../../assets/styles";

const renderInput = (label: string) => (
  <View style={GlobalStyles.formGroup}>
    <Text style={GlobalStyles.label}>{label}</Text>
    <TextInput style={GlobalStyles.input} placeholder={`Enter ${label}`}/>
  </View>
);
const BranchesPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    return (
      <SafeAreaView style={GlobalStyles.safeArea}>
        <View style={GlobalStyles.pageHeader}>
          <View>
            <Text style={GlobalStyles.headerTitle}>
              {viewMode === 'table' ? 'Branches' : 'Setup Branch'}
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
              {viewMode === 'table' ? '+ Add' : 'Back'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
          {viewMode === 'table' ? (
            <View style={GlobalStyles.card}>
              <Table>
                <Row
                  data={['ID', 'Branch', 'City']}
                  flexArr={[0.5, 2, 1]}
                  style={GlobalStyles.tableHead}
                  textStyle={GlobalStyles.headText}
                />
                <Row
                  data={['B1', 'North Campus', 'Bikaner']}
                  flexArr={[0.5, 2, 1]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              </Table>
            </View>
          ) : (
            <View style={[GlobalStyles.card, GlobalStyles.formPadding]}>
              {renderInput('Branch Name')}
              {renderInput('Manager Name')}

            <TouchableOpacity style={GlobalStyles.primaryButton}>
                <Text style={GlobalStyles.buttonText}>Save Branch</Text>
            </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
export default BranchesPage;