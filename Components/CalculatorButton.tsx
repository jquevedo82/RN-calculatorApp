import React from 'react'

import * as Haptics from 'expo-haptics'; 

import { View, Text, Pressable } from 'react-native'

import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';


interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    onPress?: () => void;
    doubleSize?: boolean;
}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress, doubleSize = false }: Props) => {
    return (
        <Pressable
            style={({pressed})=>({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.7 : 1,
                width: doubleSize ? 180 : 80,
            })}
            onPress={(a) => {
                Haptics.selectionAsync();
                onPress;
                console.log(a)
            }}
            
        >
            <Text 
                style={{
                    ...globalStyles.buttonText,
                    color: blackText? 'black' : 'white',
                }} 
                
                >
                    {label}</Text>
        </Pressable>
    )
}

export default CalculatorButton