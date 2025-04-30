import { jsx as _jsx } from "react/jsx-runtime";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
export function Button({ children, onPress, variant = 'default' }) {
    return (_jsx(TouchableOpacity, { onPress: onPress, style: [
            styles.button,
            variant === 'outline' && styles.outline,
        ], children: _jsx(Text, { style: [
                styles.text,
                variant === 'outline' && styles.outlineText,
            ], children: children }) }));
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
