import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const E2 = () => {
    const [count, setCount] = useState(0)
  return (
    <View>
      <Text style={styles.title}>Bài 2:</Text>
      <View style={styles.container}>
        <Text style={styles.count}>{ count }</Text>
        <View style={styles.buttonContainer}>
            <Button onPress={() => setCount(count + 1)} title="Increment" />
            <Button onPress={() => setCount(count - 1)} title="Decrement" />
        </View>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    count: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 150,
        fontWeight: 'bold',
        color: '#111111',
    },
})

export default E2