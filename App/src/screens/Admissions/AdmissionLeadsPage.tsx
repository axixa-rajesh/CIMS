import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/FormShells';

const AdmissionLeadsPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [leads, setLeads] = useState([
      ['L01', 'Akash', '9988776655', 'Full Stack'],
    ]);
    const [leadName, setLeadName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [interestedCourse, setInterestedCourse] = useState('');

    const handleSave = () => {
        if (leadName && phoneNumber && interestedCourse) {
            const newId = `L0${leads.length + 1}`;
            const newRow = [newId, leadName, phoneNumber, interestedCourse];
            setLeads([...leads, newRow]);
            setLeadName('');
            setPhoneNumber('');
            setInterestedCourse('');
            setViewMode('table');
        }
    };

    return (
      <SafeAreaView style={GlobalStyles.safeArea}>
        <View style={GlobalStyles.pageHeader}>
          <View>
            <Text style={GlobalStyles.headerTitle}>
              {viewMode === 'table' ? 'Admission Leads' : 'Add New Lead'}
            </Text>
            <Text style={GlobalStyles.headerSubtitle}>Inquiry Tracking</Text>
          </View>
          <TouchableOpacity
            style={[
              GlobalStyles.toggleBtn,
              viewMode === 'form' && GlobalStyles.cancelBtn,
            ]}
            onPress={() => setViewMode(viewMode === 'table' ? 'form' : 'table')}
          >
            <Text style={GlobalStyles.toggleBtnText}>
              {viewMode === 'table' ? ' + Add' : 'Back'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
          {viewMode === 'table' ? (
            <View style={GlobalStyles.card}>
              <Table>
                <Row
                  data={['ID', 'Lead Name', 'Phone', 'Course']}
                  flexArr={[0.5, 1.5, 1.2, 1]}
                  style={GlobalStyles.tableHead}
                  textStyle={GlobalStyles.headText}
                />
                {leads.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    flexArr={[0.5, 1.5, 1.2, 1]}
                    style={GlobalStyles.row}
                    textStyle={GlobalStyles.cellText}
                  />
                ))}
              </Table>
            </View>
          ) : (
            <FormShell buttonTitle="Save Lead" onSave={handleSave}>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Full Name</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="Enter student name"
                  value={leadName}
                  onChangeText={setLeadName}
                />
              </View>

              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Phone Number</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. 9876543210"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>

              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Interested Course</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. Java"
                  value={interestedCourse}
                  onChangeText={setInterestedCourse}
                />
              </View>
            </FormShell>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
export default AdmissionLeadsPage;