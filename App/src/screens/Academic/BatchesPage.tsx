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
import FormShell from '../../components/Shells/FormShells';

const BatchesPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [batches, setBatches] = useState([
      ['B01', 'Morning Batch', 'BCA', '09:00 AM']
    ]);
    const [batchName, setBatchName] = useState('');
    const [course, setCourse] = useState('');
    const [timing, setTiming] = useState('');

    const handleSave = () => {
        if (batchName && course && timing) {
            const newId = `B0${batches.length + 1}`;
            const newRow = [newId, batchName, course, timing];
            setBatches([...batches, newRow]);
            setBatchName('');
            setCourse('');
            setTiming('');
            setViewMode('table');
        }
    };
    return (
      <SafeAreaView style={GlobalStyles.safeArea}>
        <View style={GlobalStyles.pageHeader}>
          <View>
            <Text style={GlobalStyles.headerTitle}>
              {viewMode === 'table' ? 'Batches' : 'Add New Batch'}
            </Text>
            <Text style={GlobalStyles.headerSubtitle}>Schedule Management</Text>
          </View>
          <TouchableOpacity
            style={[
              GlobalStyles.toggleBtn,
              viewMode === 'form' && GlobalStyles.cancelBtn,
            ]}
            onPress={() => setViewMode(viewMode === 'table' ? 'form' : 'table')}
          >
            <Text style={GlobalStyles.toggleBtnText}>
              {viewMode === 'table' ? 'Add New' : 'Cancel'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={GlobalStyles.scrollContent}>
          {viewMode === 'table' ? (
            <View style={GlobalStyles.card}>
              <Table>
                <Row
                  data={['ID', 'Batch Name', 'Course', 'Timing']}
                  flexArr={[0.5, 1.5, 1, 1]}
                  style={GlobalStyles.tableHead}
                  textStyle={GlobalStyles.headText}
                />
                {batches.map((rowData, index) => (
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
            <FormShell buttonTitle="Save Batch" onSave={handleSave}>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Batch Name</Text>
                <TextInput
                  style={GlobalStyles.input}
                  value={batchName}
                  onChangeText={setBatchName}
                  placeholder="e.g. Full Stack Evening"
                />
              </View>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Course Name</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. BCA"
                  value={course}
                  onChangeText={setCourse}
                />
              </View>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Timing</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. 04:00 PM"
                  value={timing}
                  onChangeText={setTiming}
                />
              </View>
            </FormShell>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
export default BatchesPage;