import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const E3 = () => {
  return (
    <View>
      <Text style={styles.title}>Bài 3:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput style={styles.input} placeholder='Nhập họ và tên' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
},
  input: {
    borderWidth: 1,
    borderColor: '#111111',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
    textAlign: 'left',
  },
  inputContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  }
})

export default E3