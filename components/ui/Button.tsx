import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  const variantStyles = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-700 border border-gray-500',
  };

  return (
    <TouchableOpacity
      {...props}
      className={`${variantStyles[variant]} py-3 rounded-lg active:opacity-80`}
    >
      <Text className="text-white text-center font-bold text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
}