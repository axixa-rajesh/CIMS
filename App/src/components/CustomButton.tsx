import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'danger' | 'secondary';
  isLoading?: boolean;
  style?: ViewStyle;
}

export const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
  isLoading,
  style,
}: ButtonProps) => {
  const getBgColor = () => {
    switch (variant) {
      case 'danger':
        return '#EF4444';
      case 'secondary':
        return '#64748B';
      default:
        return '#4F46E5';
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.btn, { backgroundColor: getBgColor() }, style]}
      onPress={onPress}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    height: 44,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});