import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../../assets/styles';
import { Table, Row } from 'react-native-table-component';
import FormShell from '../../components/Shells/FormShells';
import PageShell from '../../components/Shells/PageShells';

const LiveClassesPage = () => {
    const [viewMode, setViewMode] = useState<'table' | 'form'>('table');
    const [liveClasses, setLiveClasses] = useState([
      ['LC1', 'React Hooks', 'Google Meet', 'meet.google.com/abc-defg']
    ]);
    const [subjectName, setSubjectName] = useState('');
    const [platform, setPlatform] = useState('');
    const [classLink, setClassLink] = useState('');
    const handleSave = () => {
      if (subjectName && platform && classLink) {
        const newId = `LC${liveClasses.length + 1}`;
        const newRow = [newId, subjectName, platform, classLink];

        setLiveClasses([...liveClasses, newRow]);
        setSubjectName('');
        setPlatform('');
        setClassLink('');
        setViewMode('table');
      }
    };
    return (
      <PageShell
        title="Live Classes"
        subtitle="Online Sessions"
        viewMode={viewMode}
        setViewMode={setViewMode}
      >
        {viewMode === 'table' ? (
          <View style={GlobalStyles.card}>
            <Table>
              <Row
                data={['ID', 'Subject', 'Platform', 'Link']}
                flexArr={[0.5, 1.5, 1, 2]}
                style={GlobalStyles.tableHead}
                textStyle={GlobalStyles.headText}
              />
              {liveClasses.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  flexArr={[0.5, 1.5, 1, 2]}
                  style={GlobalStyles.row}
                  textStyle={GlobalStyles.cellText}
                />
              ))}
            </Table>
          </View>
        ) : (
          <FormShell buttonTitle="Schedule Class" onSave={handleSave}>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Subject Name</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. Node.js Middleware"
                value={subjectName}
                onChangeText={setSubjectName}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Platform</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="e.g. Zoom, Google Meet"
                value={platform}
                onChangeText={setPlatform}
              />
            </View>
            <View style={GlobalStyles.formGroup}>
              <Text style={GlobalStyles.label}>Meeting Link</Text>
              <TextInput
                style={GlobalStyles.input}
                placeholder="https://..."
                autoCapitalize="none"
                value={classLink}
                onChangeText={setClassLink}
              />
            </View>
          </FormShell>
        )}
      </PageShell>
    );
}
export default LiveClassesPage;