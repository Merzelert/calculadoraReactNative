import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        armarNumero,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}//Numero de lineas que se muestran
                adjustsFontSizeToFit//Ajusta el tamaño del texto para que se vea completo
            >
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc
                    texto="C" //propiedad texto del componente BotonCalc
                    color="#9B9B9B" //propiedad color del componente BotonCalc
                    accion={limpiar} //propiedad accion del componente BotonCalc
                />
                <BotonCalc
                    texto="+/-"
                    color="#9B9B9B"
                    accion={positivoNegativo}
                />
                <BotonCalc
                    texto="del"
                    color="#9B9B9B"
                    accion={btnDelete}
                />
                <BotonCalc
                    texto="/"
                    color="#FF9427"
                    accion={btnDividir}
                />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc
                    texto="7"
                    accion={() => armarNumero('7')}
                />
                <BotonCalc
                    texto="8"
                    accion={() => armarNumero('8')}
                />
                <BotonCalc
                    texto="9"
                    accion={() => armarNumero('9')}
                />
                <BotonCalc
                    texto="X"
                    color="#FF9427"
                    accion={btnMultiplicar}
                />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc
                    texto="4"
                    accion={() => armarNumero('4')}
                />
                <BotonCalc
                    texto="5"
                    accion={() => armarNumero('5')}
                />
                <BotonCalc
                    texto="6"
                    accion={() => armarNumero('6')}
                />
                <BotonCalc
                    texto="-"
                    color="#FF9427"
                    accion={btnRestar}
                />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc
                    texto="1"
                    accion={() => armarNumero('1')}
                />
                <BotonCalc
                    texto="2"
                    accion={() => armarNumero('2')}
                />
                <BotonCalc
                    texto="3"
                    accion={() => armarNumero('3')}
                />
                <BotonCalc
                    texto="+"
                    color="#FF9427"
                    accion={btnSumar}
                />
            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc
                    texto="0"
                    ancho
                    accion={() => armarNumero('0')}
                />
                <BotonCalc
                    texto="."
                    accion={() => armarNumero('.')}
                />
                <BotonCalc
                    texto="="
                    color="#FF9427"
                    accion={calcular}
                />
            </View>
        </View>
    );
};
