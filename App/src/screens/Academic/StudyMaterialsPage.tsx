import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/Shells/FormShells';
import PageShell from '../../components/Shells/PageShells';

const StudyMaterialsPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [materials, setMaterials] = useState([
      ['M01', 'Java Basics Notes', 'BCA', 'PDF'],
    ]);
    const [fileName, setFileName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [materialType, setMaterialType] = useState('');
    const handleSave = () => {
        if (fileName && courseName && materialType) {
            const newId = `M0${materials.length + 1}`;
            const newRow = [newId, fileName, courseName, materialType];
            setMaterials([...materials, newRow]);
            setFileName('');
            setCourseName('');
            setMaterialType('');
            setViewMode('table');
        }
    };
    return (
      <PageShell
        title="Study Materials"
        subtitle="Academic Resources"
        viewMode={viewMode}
        setViewMode={setViewMode}
      >
        {viewMode === 'table' ? (
                <View style={GlobalStyles.card}>
                    <Table>
                        <Row 
                            data={['ID', 'File Name', 'Course', 'Type']} 
                            flexArr={[0.5, 2, 1, 1]} 
                            style={GlobalStyles.tableHead} 
                            textStyle={GlobalStyles.headText} 
                        />
                        {materials.map((rowData, index) => (
                            <Row
                                key={index}
                                data={rowData}
                                flexArr={[0.5, 2, 1, 1]}
                                style={GlobalStyles.row}
                                textStyle={GlobalStyles.cellText}
                            />
                        ))}
                    </Table>
                </View>
            ) : (
                <FormShell buttonTitle="Upload Material" onSave={handleSave}>
                    <View style={GlobalStyles.formGroup}>
                        <Text style={GlobalStyles.label}>File Title</Text>
                        <TextInput 
                            style={GlobalStyles.input} 
                            placeholder="e.g. OS Previous Year Papers" 
                            value={fileName}
                            onChangeText={setFileName}
                        />
                    </View>

                    <View style={GlobalStyles.formGroup}>
                        <Text style={GlobalStyles.label}>Course / Subject</Text>
                        <TextInput 
                            style={GlobalStyles.input} 
                            placeholder="e.g. BCA Semester 3" 
                            value={courseName}
                            onChangeText={setCourseName}
                        />
                    </View>

                    <View style={GlobalStyles.formGroup}>
                        <Text style={GlobalStyles.label}>Material Type</Text>
                        <TextInput 
                            style={GlobalStyles.input} 
                            placeholder="e.g. PDF, Video, Zip" 
                            value={materialType}
                            onChangeText={setMaterialType}
                        />
                    </View>
                </FormShell>
            )}
        </PageShell>
    );
};

export default StudyMaterialsPage;