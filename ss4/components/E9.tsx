import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormData {
  name: string;
  age: string;
  phone: string;
  address: string;
}

interface StepProps {
  formData: FormData;
  onUpdateData: (field: keyof FormData, value: string) => void;
}

const Step1PersonalInfo = ({ formData, onUpdateData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 1: Thông tin cá nhân</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập họ và tên"
          value={formData.name}
          onChangeText={(value) => onUpdateData("name", value)}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tuổi:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập tuổi"
          value={formData.age}
          onChangeText={(value) => onUpdateData("age", value)}
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const Step2ContactInfo = ({ formData, onUpdateData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 2: Thông tin liên hệ</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số điện thoại:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại"
          value={formData.phone}
          onChangeText={(value) => onUpdateData("phone", value)}
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Địa chỉ:</Text>
        <TextInput
          style={[styles.textInput, styles.textArea]}
          placeholder="Nhập địa chỉ"
          value={formData.address}
          onChangeText={(value) => onUpdateData("address", value)}
          multiline
          numberOfLines={3}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const Step3Review = ({ formData }: StepProps) => {
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Bước 3: Xem lại và Xác nhận</Text>

      <View style={styles.reviewContainer}>
        <Text style={styles.reviewSectionTitle}>Thông tin cá nhân:</Text>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Tên:</Text>
          <Text style={styles.reviewValue}>{formData.name || "Chưa nhập"}</Text>
        </View>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Tuổi:</Text>
          <Text style={styles.reviewValue}>{formData.age || "Chưa nhập"}</Text>
        </View>

        <Text style={styles.reviewSectionTitle}>Thông tin liên hệ:</Text>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Số điện thoại:</Text>
          <Text style={styles.reviewValue}>
            {formData.phone || "Chưa nhập"}
          </Text>
        </View>
        <View style={styles.reviewItem}>
          <Text style={styles.reviewLabel}>Địa chỉ:</Text>
          <Text style={styles.reviewValue}>
            {formData.address || "Chưa nhập"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    phone: "",
    address: "",
  });

  const handleUpdateData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    alert(
      `Hoàn tất khảo sát!\n\nThông tin:\n- Tên: ${formData.name}\n- Tuổi: ${formData.age}\n- SĐT: ${formData.phone}\n- Địa chỉ: ${formData.address}`
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1PersonalInfo
            formData={formData}
            onUpdateData={handleUpdateData}
          />
        );
      case 2:
        return (
          <Step2ContactInfo
            formData={formData}
            onUpdateData={handleUpdateData}
          />
        );
      case 3:
        return (
          <Step3Review formData={formData} onUpdateData={handleUpdateData} />
        );
      default:
        return null;
    }
  };

  const getButtonText = () => {
    return currentStep === 3 ? "Hoàn tất" : "Tiếp theo";
  };

  const handleButtonPress = () => {
    if (currentStep === 3) {
      handleComplete();
    } else {
      handleNext();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bài 9: Form Khảo Sát</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Bước {currentStep}/3</Text>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              { width: `${(currentStep / 3) * 100}%` },
            ]}
          />
        </View>
      </View>

      {renderCurrentStep()}

      <View style={styles.navigationContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Quay lại</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.nextButton,
            currentStep === 1 ? styles.nextButtonFullWidth : null,
          ]}
          onPress={handleButtonPress}
        >
          <Text style={styles.nextButtonText}>{getButtonText()}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const E9 = () => {
  return <WizardForm />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  progressContainer: {
    marginBottom: 30,
  },
  progressText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 4,
  },
  stepContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#333",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  reviewContainer: {
    gap: 16,
  },
  reviewSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 8,
    marginTop: 8,
  },
  reviewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  reviewLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  reviewValue: {
    fontSize: 16,
    color: "#666",
    flex: 2,
    textAlign: "right",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 20,
  },
  backButton: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  nextButtonFullWidth: {
    flex: 2,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default E9;
