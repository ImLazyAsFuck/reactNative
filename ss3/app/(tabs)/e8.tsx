import B5 from '@/components/E5'
import E8 from '@/components/E8'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function E8Screen() {
  return (
    <View style={styles.container}>
      <B5 title="Bài 8: Màn hình đọc báo" />
      
      <SafeAreaView style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <E8 />
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
