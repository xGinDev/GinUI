import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
    children: React.ReactNode;
    onPress: () => void;
    variant?: 'default' | 'outline';
};

export function Button({ children, onPress, variant = 'default' }: ButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                variant === 'outline' && styles.outline,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    variant === 'outline' && styles.outlineText,
                ]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#111827',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: '600',
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: '#111827',
        borderWidth: 1,
    },
    outlineText: {
        color: '#111827',
    },
});
