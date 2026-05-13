import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../assets/styles';

interface FormShellProps {
    buttonTitle: string;
    onSave: () => void;
    children: React.ReactNode;
}

const FormShell = ({ buttonTitle, onSave, children}: FormShellProps) => {
    return (
        <View style={[GlobalStyles.card, GlobalStyles.formPadding]}>
            {children}
            <TouchableOpacity style={GlobalStyles.primaryButton} onPress={onSave}>
                <Text style={GlobalStyles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default FormShell;