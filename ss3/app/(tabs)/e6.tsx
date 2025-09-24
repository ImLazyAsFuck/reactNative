import B5 from '@/components/E5'
import E6 from '@/components/E6'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function E6Screen() {
  return (
    <View style={styles.container}>
      <B5 title="Bài 6: Product Grid View - Responsive" />
      <E6 />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
