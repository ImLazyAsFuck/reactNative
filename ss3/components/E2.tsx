import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const E2 = () => {
  return (
    <View>
      <Text style={styles.title}>Bài 2:</Text>
      <View style={styles.container1}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box5]}/>
      </View>
      <View style={styles.container2}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box5]}/>
      </View>
      <View style={styles.container3}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>
        <View style={[styles.box, styles.box4]}/>
        <View style={[styles.box, styles.box5]}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#ddd',
    paddingVertical: 10,
  },
  container3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  box: {
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box1:{
    width: 100,
    height: 40,
    backgroundColor: '#EF4444',
  },
  box2:{
    width: 80,
    height: 50,
    backgroundColor: '#F97316',
  },
  box3: {
    width: 120,
    height: 60,
    backgroundColor: '#22C55E',
  },
  box4:{
    width: 90,
    height: 30,
    backgroundColor: '#3B82F6',
  },
  box5: {
    width: 110,
    height: 55,
    backgroundColor: '#8B5CF6',
  }
})

export default E2