import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/Shells/FormShells';

const CoursesPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table')
    const [courses, setCourses] = useState([
      ['C01', 'BCA (Full Stack)', '3 Years']
    ]);
    const [courseName, setCourseName] = useState('');
    const [duration, setDuration] = useState('');

    const handleSave = () => {
        if (courseName && duration) {
            const newId = `C0${courses.length + 1}`;
            const newRow = [newId, courseName, duration];
            setCourses([...courses, newRow]);
            setCourseName('');
            setDuration('');
            setViewMode('table');
        }
    }
    const renderInput = (label: string, placeholder: string) => (
      <View style={GlobalStyles.formGroup}>
        <Text style={GlobalStyles.label}>{label}</Text>
        <TextInput style={GlobalStyles.input} placeholder={placeholder} />
      </View>
    );

    return (
      <SafeAreaView style={GlobalStyles.safeArea}>
        <View style={GlobalStyles.pageHeader}>
          <View>
            <Text style={GlobalStyles.headerTitle}>
              {viewMode === 'table' ? 'Courses' : 'Add New Course'}
            </Text>
            <Text style={GlobalStyles.headerSubtitle}>
              Curriculum Management
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
                  data={['ID', 'Course Name', 'Duration']}
                  flexArr={[0.5, 2, 1]}
                  style={GlobalStyles.tableHead}
                  textStyle={GlobalStyles.headText}
                />
                {courses.map((rowData, index) => (
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
            <FormShell buttonTitle="Save Course" onSave={handleSave}>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Course Name</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. BCA"
                  value={courseName}
                  onChangeText={setCourseName}
                />
              </View>
              <View style={GlobalStyles.formGroup}>
                <Text style={GlobalStyles.label}>Duration</Text>
                <TextInput
                  style={GlobalStyles.input}
                  placeholder="e.g. 3 Years"
                  value={duration}
                  onChangeText={setDuration}
                />
              </View>
            </FormShell>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}
export default CoursesPage;