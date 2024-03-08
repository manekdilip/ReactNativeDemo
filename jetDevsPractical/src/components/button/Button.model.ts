//you can define all possible props here , like custom styles and many more
export interface ButtonProps {
  onPress: () => void;
  isValid: boolean;
  buttonText: String;
  style: object;
}
