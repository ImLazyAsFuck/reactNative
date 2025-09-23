import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface CustomButtonProps {
  variant: ButtonVariant;
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  variant, 
  title, 
  disabled = false, 
  onPress 
}) => {
  const getButtonStyle = () => {
    if (disabled) {
      return [styles.button, styles.disabledButton];
    }
    
    switch (variant) {
      case 'primary':
        return [styles.button, styles.primaryButton];
      case 'secondary':
        return [styles.button, styles.secondaryButton];
      case 'danger':
        return [styles.button, styles.dangerButton];
      default:
        return [styles.button, styles.primaryButton];
    }
  };

  const getTextStyle = () => {
    if (disabled) {
      return [styles.buttonText, styles.disabledText];
    }
    
    switch (variant) {
      case 'primary':
        return [styles.buttonText, styles.primaryText];
      case 'secondary':
        return [styles.buttonText, styles.secondaryText];
      case 'danger':
        return [styles.buttonText, styles.dangerText];
      default:
        return [styles.buttonText, styles.primaryText];
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        ...getButtonStyle(),
        pressed && !disabled && styles.buttonPressed
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
};

const E8 = () => {
  const handleButtonPress = (buttonType: string) => {
    console.log(`${buttonType} button pressed!`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Bài 8:</Text>
        
        <View style={styles.buttonContainer}>
          <CustomButton 
            variant="primary"
            title="Button Primary"
            onPress={() => handleButtonPress('Primary')}
          />
          
          <CustomButton 
            variant="secondary"
            title="Button Secondary"
            onPress={() => handleButtonPress('Secondary')}
          />
          
          <CustomButton 
            variant="danger"
            title="Button Danger"
            onPress={() => handleButtonPress('Danger')}
          />
          
          <CustomButton 
            variant="primary"
            title="Button Disabled"
            disabled={true}
            onPress={() => handleButtonPress('Disabled')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  secondaryText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '600',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  dangerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#C7C7CC',
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.6,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default E8;