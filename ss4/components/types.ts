export interface FormData {
  name: string;
  age: string;
  phone: string;
  address: string;
}

export interface StepProps {
  formData: FormData;
  onUpdateData: (field: keyof FormData, value: string) => void;
}
