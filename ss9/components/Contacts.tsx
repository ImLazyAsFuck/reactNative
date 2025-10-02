import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BORDER_RADIUS,
  COLORS,
  Contact,
  ContactAction,
  SPACING,
  STORAGE_KEY,
} from "../constants/shared";
import ModalAddContact from "./ModalAddContact";
import ModalEditContact from "./ModalEditContact";
import ContactItem from "./ui/ContactItem";

const contactsReducer = (
  state: Contact[],
  action: ContactAction
): Contact[] => {
  switch (action.type) {
    case "SET_CONTACTS":
      return action.payload;
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id !== action.payload);
    case "UPDATE_CONTACT":
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    default:
      return state;
  }
};

const Contacts: React.FC = () => {
  const [contacts, dispatch] = useReducer(contactsReducer, []);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedContacts = data ? JSON.parse(data) : [];
      dispatch({ type: "SET_CONTACTS", payload: parsedContacts });
    } catch (error) {
      console.error("Error loading contacts:", error);
      Alert.alert("Lỗi", "Không thể tải danh bạ");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveContacts = useCallback(async (contactsToSave: Contact[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(contactsToSave));
    } catch (error) {
      console.error("Error saving contacts:", error);
      Alert.alert("Lỗi", "Không thể lưu danh bạ");
    }
  }, []);

  const handleAddContact = useCallback(
    async (contactData: Contact) => {
      const newContact: Contact = {
        ...contactData,
        id: Date.now().toString(),
      };

      const updatedContacts = [...contacts, newContact];
      dispatch({ type: "ADD_CONTACT", payload: newContact });
      await saveContacts(updatedContacts);
      setAddModalVisible(false);
    },
    [contacts, saveContacts]
  );

  const handleEditContact = useCallback((contact: Contact) => {
    setSelectedContact(contact);
    setEditModalVisible(true);
  }, []);

  const handleUpdateContact = useCallback(
    async (updatedContact: Contact) => {
      const updatedContacts = contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      dispatch({ type: "UPDATE_CONTACT", payload: updatedContact });
      await saveContacts(updatedContacts);
      setEditModalVisible(false);
      setSelectedContact(null);
    },
    [contacts, saveContacts]
  );

  const handleDeleteContact = useCallback(
    async (contactId: string) => {
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      dispatch({ type: "REMOVE_CONTACT", payload: contactId });
      await saveContacts(updatedContacts);
    },
    [contacts, saveContacts]
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadContacts();
    setRefreshing(false);
  }, [loadContacts]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);
  return (
    <SafeAreaView style={styles.container}>
      <ModalAddContact
        visible={addModalVisible}
        onClose={() => setAddModalVisible(false)}
        onAddContact={handleAddContact}
      />

      <ModalEditContact
        visible={editModalVisible}
        contact={selectedContact}
        onClose={() => {
          setEditModalVisible(false);
          setSelectedContact(null);
        }}
        onUpdateContact={handleUpdateContact}
      />

      <FlatList
        style={styles.flatList}
        data={contacts}
        keyExtractor={(item) => item.id!}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Danh bạ</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setAddModalVisible(true)}
            >
              <Text style={styles.addButtonText}>+ Thêm mới</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {isLoading ? "Đang tải..." : "Danh bạ của bạn đang trống"}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onEdit={handleEditContact}
            onDelete={handleDeleteContact}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatList: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.lg,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.dark,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xl,
    marginTop: SPACING.xl * 2,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: SPACING.lg,
  },
  emptyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  emptyButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Contacts;
