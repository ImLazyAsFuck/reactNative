import { Heart, MessageCircle, Send } from 'lucide-react-native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const E3 = () => {
  return (
    <View>
      <Text style={styles.title}>Bài 3:</Text>
      <View style={styles.container}>
        <View style={styles.post}>
          <View style={styles.header}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' }}
              style={styles.avatar}
            />
            <Text style={styles.username}>thuy_anh26</Text>
          </View>
          
          <View style={styles.content}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/b8/86/b2/b886b20ce517adae1f8b2fb5bad00fe6.jpg' }}
              style={styles.postImage}
            />
          </View>
          
          <View style={styles.actionBar}>
            <TouchableOpacity style={styles.actionButton}>
              <Heart size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MessageCircle size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Send size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              <Text style={styles.username}>thuy_anh26</Text> Một buổi chiều yên bình bên bờ biển. 🌊 ☀️
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  post: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButton: {
    marginRight: 16,
    padding: 8,
  },
  description: {
    width: '100%',
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default E3