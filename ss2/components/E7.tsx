import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const E7 = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputText.trim(),
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 7:</Text>
      
      <KeyboardAvoidingView 
        style={styles.chatContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          style={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.messageWrapper,
                message.isUser ? styles.userMessageWrapper : styles.otherMessageWrapper
              ]}
            >
              <View
                style={[
                  styles.messageBubble,
                  message.isUser ? styles.userMessage : styles.otherMessage
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    message.isUser ? styles.userMessageText : styles.otherMessageText
                  ]}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nhắn tin..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
            multiline
          />
          <TouchableOpacity 
            style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
            onPress={sendMessage}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

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
  chatContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  messageWrapper: {
    marginBottom: 12,
  },
  userMessageWrapper: {
    alignItems: 'flex-end',
  },
  otherMessageWrapper: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  userMessage: {
    backgroundColor: '#007AFF',
    borderBottomRightRadius: 6,
  },
  otherMessage: {
    backgroundColor: '#E5E5EA',
    borderBottomLeftRadius: 6,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  otherMessageText: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 100,
    marginRight: 8,
    backgroundColor: '#F8F8F8',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default E7;