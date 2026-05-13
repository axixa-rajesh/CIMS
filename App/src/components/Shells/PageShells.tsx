import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { GlobalStyles } from '../../assets/styles';

interface PageShellProps {
  title: string;
  subtitle: string;
  viewMode: 'table' | 'form';
  setViewMode: (mode: 'table' | 'form') => void;
  children: React.ReactNode;
}

function PageShell({
  title,
  subtitle,
  viewMode,
  setViewMode,
  children,
}: PageShellProps) {
  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.pageHeader}>
        <View>
          <Text style={GlobalStyles.headerTitle}>
            {viewMode === 'table' ? title : `Add ${title}`}
          </Text>
          <Text style={GlobalStyles.headerSubtitle}>{subtitle}</Text>
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
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
export default PageShell;