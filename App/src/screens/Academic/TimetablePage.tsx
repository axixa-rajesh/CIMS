import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/Shells/FormShells';
import PageShell from '../../components/Shells/PageShells';

const TimetablePage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [timetable, setTimetable] = useState([
      ['T01', 'Monday', 'Java Programming', '09:00 AM']
    ]);
    const [day, setDay] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const handleSave = () => {
        if (day && subjectName && timeSlot) {
            const newId = `T0${timetable.length + 1}`;
            const newRow = [newId, day, subjectName, timeSlot];
            setTimetable([...timetable, newRow]);
            setDay('');
            setSubjectName('');
            setTimeSlot('');
            setViewMode('table');
        }
    };
    return (
      <PageShell
        title="Timetable"
        subtitle="Weekly Schedule"
        viewMode={viewMode}
        setViewMode={setViewMode}
      >
        {viewMode === 'table' ? (
          <View style={GlobalStyles.card}>
            <Table>
              <Row
                data={['ID', 'Day', 'Subject', 'Time']}
                flexArr={[0.5, 1, 1.5, 1]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              {timetable.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  flexArr={[0.5, 1, 1.5, 1]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              ))}
            </Table>
          </View>
        ) : (
          <FormShell buttonTitle="Save Slot" onSave={handleSave}>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Select Day</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. Monday"
                value={day}
                onChangeText={setDay}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Subject</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. PHP & MySQL"
                value={subjectName}
                onChangeText={setSubjectName}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Time Slot</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. 09:00 AM - 10:30 AM"
                value={timeSlot}
                onChangeText={setTimeSlot}
              />
            </View>
          </FormShell>
        )}
      </PageShell>
    );
}
export default TimetablePage;