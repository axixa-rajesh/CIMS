import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

type BadgeStatus = 'success' | 'danger' | 'warning' | 'info' | 'default';

interface CustomBadgeProps {
  text: string;
  status?: BadgeStatus;
  style?: ViewStyle;
}

export const CustomBadge = ({
  text,
  status = 'default',
  style,
}: CustomBadgeProps) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'success':
        return styles.success;
      case 'danger':
        return styles.danger;
      case 'warning':
        return styles.warning;
      case 'info':
        return styles.info;
      default:
        return styles.default;
    }
  };

  return (
    <View style={[styles.badgeContainer, getBadgeStyle(), style]}>
      <Text
        style={[
          styles.badgeText,
          status === 'default' ? { color: '#64748B' } : { color: '#FFFFFF' },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  success: {
    backgroundColor: '#22C55E',
  },
  danger: {
    backgroundColor: '#EF4444',
  },
  warning: {
    backgroundColor: '#F59E0B',
  },
  info: {
    backgroundColor: '#4F46E5',
  },
  default: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
});
export default CustomBadge;
