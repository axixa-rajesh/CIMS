import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/Shells/FormShells';
import PageShell from '../../components/Shells/PageShells';

const AttendancePage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [attendance, setAttendance] = useState([
      ['A01', 'Raju', 'Present', '2024-06-01']
    ]);
    const [studentName, setStudentName] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState('');

    const handleSave = () => {
        if (studentName && status && date) {
            const newId = `A${attendance.length + 1 < 10 ? '0' : ''}${attendance.length + 1}`;
            const finalDate = date || new Date().toLocaleDateString('en-GB');
            const newRow = [newId, studentName, status, finalDate];
            setAttendance([...attendance, newRow]);
            setStudentName('');
            setStatus('');
            setDate('');
            setViewMode('table');
        }
    };
    return (
      <PageShell
        title="Attendance"
        subtitle="Daily Tracking"
        viewMode={viewMode}
        setViewMode={setViewMode}
      >
        {viewMode === 'table' ? (
          <View style={GlobalStyles.card}>
            <Table>
              <Row
                data={['ID', 'Student', 'Status', 'Date']}
                flexArr={[0.5, 1.5, 1, 1]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              {attendance.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  flexArr={[0.5, 1.5, 1, 1]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              ))}
            </Table>
          </View>
        ) : (
          <FormShell buttonTitle="Mark Attendance" onSave={handleSave}>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Student Name</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. Raju"
                value={studentName}
                onChangeText={setStudentName}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Status</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="Present / Absent"
                value={status}
                onChangeText={setStatus}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Date</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="YYYY-MM-DD"
                value={date}
                onChangeText={setDate}
              />
            </View>
          </FormShell>
        )}
      </PageShell>
    );
}
export default AttendancePage;