//you can define all possible props here , like custom styles and many more
export interface UserInputProps {
  isSecureText?: boolean;
  error: string | undefined;
  onChangeText: (text: string) => void;
  value: string;
  icon: any;
  placeholder: string;
}
