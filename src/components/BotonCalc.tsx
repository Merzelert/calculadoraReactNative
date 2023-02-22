import React from 'react';
import { styles } from '../theme/appTheme';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {//Propiedades del componente BotonCalc
    texto: string;
    color?: string;//? = opcional
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, color = '#2D2D2D', ancho = false, accion }: Props) => { //color = '#2D2D2D' = valor por defecto
    //ancho = false = valor por defecto

    return (
        <TouchableOpacity
            onPress={() => accion(texto)}//Si se presiona el componente BotonCalc, se ejecuta la funcion accion
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80,//Si ancho es true, ancho 180, sino 80
            }}>
                <Text style={{//Estilo del texto del componente BotonCalc, si el color es igual a #9B9B9B, texto negro, sino blanco
                    ...styles.botonTexto,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};
