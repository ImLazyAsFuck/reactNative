import E1 from '@/components/E1'
import E2 from '@/components/E2'
import E3 from '@/components/E3'
import E4n7 from '@/components/E4'
import B5 from '@/components/E5'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <B5 title="Bài 1-5: Các component cơ bản" />
      
      <SafeAreaView style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <E1 />
          <E2 />
          <E3 />
          <E4n7 />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: '#eeeeee',
    flex: 1,
    padding: 10,
  }
})
