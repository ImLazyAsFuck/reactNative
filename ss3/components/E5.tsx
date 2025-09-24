import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

const B5: React.FC<HeaderProps> = ({ 
  title, 
  backgroundColor, 
  textColor 
}) => {
  return (
    <View style={[styles.container, backgroundColor && { backgroundColor }]}>
      <Text style={[styles.title, textColor && { color: textColor }]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: Platform.select({
    ios: {
      backgroundColor: '#ffffff',
      paddingTop: StatusBar.currentHeight || 44,
      paddingBottom: 10,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#E1E1E1',
    },
    android: {
      backgroundColor: '#2196F3',
      paddingTop: StatusBar.currentHeight || 24,
      paddingBottom: 16,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'flex-start',
      elevation: 4,
    },
    default: {
      backgroundColor: '#ffffff',
      paddingTop: StatusBar.currentHeight || 44,
      paddingBottom: 10,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
    },
    android: {
      fontSize: 20,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'left',
    },
    default: {
      fontSize: 17,
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
    },
  }),
});

export default B5;
