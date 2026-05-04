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

const AdmissionsPage = () => {
  const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
  const [admissions, setAdmissions] = useState([
    ['ADM01', 'Rakesh', 'BCA', '2026-05-04'],
  ]);
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');

  const handleSave = () => {
    if (studentName && course) {
      const newId = `ADM${admissions.length + 1 < 10 ? '0' : ''}${
        admissions.length + 1
      }`;
      const finalDate = admissionDate || new Date().toLocaleDateString('en-GB');
      const newRow = [newId, studentName, course, finalDate];
      setAdmissions([...admissions, newRow]);
      setStudentName('');
      setCourse('');
      setAdmissionDate('');
      setViewMode('table');
    }
  };
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.pageHeader}>
        <View>
          <Text style={GlobalStyles.headerTitle}>
            {viewMode === 'table' ? 'Admissions' : 'New Admission'}
          </Text>
          <Text style={GlobalStyles.headerSubtitle}>Student Enrollment</Text>
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
                data={['ID', 'Student', 'Course', 'Date']}
                flexArr={[0.6, 1.8, 1, 1]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              {admissions.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  flexArr={[0.6, 1.8, 1, 1]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              ))}
            </Table>
          </View>
        ) : (
          <FormShell buttonTitle="Confirm Admission" onSave={handleSave}>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Student Name</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Enter full name"
                value={studentName}
                onChangeText={setStudentName}
              />
            </View>

            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Course</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. BCA"
                value={course}
                onChangeText={setCourse}
              />
            </View>

            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Admission Date</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="YYYY-MM-DD"
                value={admissionDate}
                onChangeText={setAdmissionDate}
              />
            </View>
          </FormShell>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionsPage;