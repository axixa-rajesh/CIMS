import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const { width: screenWidth } = Dimensions.get('window');

interface CustomTableProps {
  head: string[];
  data: any[][];
  widthArr: number[];
}
export const CustomTable = ({ head, data, widthArr }: CustomTableProps) => {
  const totalTableWidth = widthArr.reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.tableCard, { width: totalTableWidth }]}>
        <Table borderStyle={{ borderWidth: 0 }}>
          <Row
            data={head}
            widthArr={widthArr}
            style={styles.head}
            textStyle={styles.headText}
          />
          <Rows
            data={data}
            widthArr={widthArr}
            style={styles.row}
            textStyle={styles.rowText}
          />
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 16,
    width: screenWidth,
    alignItems: 'center',
    marginTop: 20,
  },
  tableCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  head: {
    height: 50,
    backgroundColor: '#4F46E5',
    paddingHorizontal: 0,
    margin: 0,
  },
  headText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 13,
  },
  row: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  rowText: {
    textAlign: 'center',
    color: '#334155',
    fontSize: 14,
  },
});
