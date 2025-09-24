import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BORDER_RADIUS, BUTTON_STYLES, CONTAINER_STYLES, INPUT_STYLES, SPACING, TEXT_STYLES } from '../styles/GlobalStyles'

const E4 = () => {
  return (
    <View>
      <Text style={styles.title}>Bài 4:</Text>
      <View style={styles.container}>
        <View style={styles.login}>
            <Image style={styles.image} source={{uri: "https://rikkei.edu.vn/wp-content/uploads/2024/12/logo-rikkei2.png"}} />
            <TextInput style={styles.input} placeholder='Tên đăng nhập' />
            <TextInput style={styles.input} placeholder='Mật khẩu' />
            <TouchableOpacity
             style={styles.button}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...TEXT_STYLES.title,
  },
  container: {
    ...CONTAINER_STYLES.centered,
  },
  login: {
    ...CONTAINER_STYLES.form,
    ...CONTAINER_STYLES.wrapper,
    gap: SPACING.sm,
  },
  image: {
    width: '100%',
    maxWidth: 300,
    height: 110,
    resizeMode: 'cover',
    paddingHorizontal: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    ...INPUT_STYLES.base,
    marginBottom: SPACING.sm,
  },
  button: {
    ...BUTTON_STYLES.base,
    ...BUTTON_STYLES.primary,
    marginBottom: SPACING.sm,
  },
  buttonText: {
    ...TEXT_STYLES.button,
  },
})

export default E4