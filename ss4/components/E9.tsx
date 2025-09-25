import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2ContactInfo from "./Step2ContactInfo";
import Step3Review from "./Step3Review";
import { FormData } from "./types";

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
