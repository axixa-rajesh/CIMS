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

const SubjectsPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [subjects, setSubjects] = useState([
        ['S01', 'Mathematics', 'C01']
    ]);
    const [subjectName, setSubjectName] = useState('');
    const [courseId, setCourseId] = useState('');

    const handleSave = () => {
        if (subjectName && courseId) {
            const newId = `S0${subjects.length + 1}`
            const newRow = [newId, subjectName, courseId];
            setSubjects([...subjects, newRow]);
            setSubjectName('');
            setCourseId('');
            setViewMode('table');
        }
    };
    return (
        <SafeAreaView style={GlobalStyles.safeArea}>
            <View style={GlobalStyles.pageHeader}>
                <View>
                    <Text style={GlobalStyles.headerTitle}>
                        {viewMode === 'table' ? 'Subjects' : 'Add New Subject'}
                    </Text>
                    <Text style={GlobalStyles.headerSubtitle}>Manage Course Content</Text>
                </View>
                <TouchableOpacity
                    style={[GlobalStyles.toggleBtn, viewMode === 'form' && GlobalStyles.cancelBtn]}
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
                            data={['ID', 'Subject Name', 'Course ID']} 
                            flexArr={[0.5, 2, 1]} 
                            style={GlobalStyles.tableHead} 
                            textStyle={GlobalStyles.headText}
                        />
                        {subjects.map((rowData, index) => (
                            <Row 
                                key={index}
                                data={rowData}
                                flexArr={[0.5, 2, 1]}
                                style={GlobalStyles.row}
                                textStyle={GlobalStyles.cellText}
                            />
                        ))}
                    </Table>
                </View>
            ) : (
                <FormShell buttonTitle='Save Subject' onSave={handleSave}>
                    <View style={GlobalStyles.formGroup}>
                        <Text style={GlobalStyles.label}>Subject Name</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder='e.g. Operating System'
                            value={subjectName}
                            onChangeText={setSubjectName}
                        />
                    </View>
                    <View style={GlobalStyles.formGroup}>
                        <Text style={GlobalStyles.label}>Course ID</Text>
                        <TextInput
                            style={GlobalStyles.input}
                            placeholder='e.g. C01'
                            value={courseId}
                            onChangeText={setCourseId}
                        >
                        </TextInput>
                    </View>
                </FormShell>
            )}
        </ScrollView>
        </SafeAreaView>
    );
}
export default SubjectsPage;