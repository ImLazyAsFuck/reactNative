import E1 from '@/components/E1';
import E2 from '@/components/E2';
import E3 from '@/components/E3';
import E4 from '@/components/E4';
import E5 from '@/components/E5';
import E6 from '@/components/E6';
import E7 from '@/components/E7';
import E8 from '@/components/E8';
import ETH from '@/components/ETH';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <E1 />      
        <E2 />
        <E3 />
        <E4 />
        <E5 />
        <E6 />
        <E7 />
        <E8 />
        <ETH />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#eeeeee',
    flex: 1,
    padding: 10,
  }
});

export default Layout;