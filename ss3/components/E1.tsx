import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const E1 = () => {
  return (
    <View>
        <Text style={styles.title}>Bài 1:</Text>
        <View style={styles.container}>
        <View style={styles.profileCard}>
          <Image 
            source={{ uri: 'https://i.pravatar.cc/150' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Lê Minh Anh</Text>
          <Text style={styles.description}>React Native Developer | UI/UX Enthusiast</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '90%',
        maxWidth: 300,
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#00f',
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
        textAlign: 'center',
      },
      description: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 20,
        fontStyle: 'italic',
      },
})

export default E1