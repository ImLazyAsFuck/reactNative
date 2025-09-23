import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const E5 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 5:</Text>
      
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>⚛</Text>
          </View>
        </View>

        <Text style={styles.welcomeTitle}>Chào mừng trở lại!</Text>
        <Text style={styles.welcomeSubtitle}>Đăng nhập để tiếp tục</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập địa chỉ email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111111',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#f0f0f0',
    },
    logoContainer: {
        marginBottom: 40,
    },
    logo: {
        width: 80,
        height: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 40,
        color: '#61dafb',
    },
    welcomeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    loginButton: {
        backgroundColor: '#007AFF',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 40,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#007AFF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
})

export default E5