import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Modal() {
  const translateY = useRef(new Animated.Value(300)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 300,
        useNativeDriver: true,
      }),
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => setIsVisible(false));
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={openModal} />

      {isVisible && (
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View
            style={[styles.overlay, { opacity: overlayOpacity }]}
          />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.title}>This is the modal</Text>
        <Button title="Close Modal" onPress={closeModal} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});
