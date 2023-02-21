import  { useState, useRef } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        // eslint-disable-next-line curly
        if (numero.includes('.') && numeroTexto === '.') return;//Si el numero contiene un . y el numeroTexto es un ., no hace nada

        if (numero.startsWith('0') || numero.startsWith('-0')) {//Si el numero empieza con 0 o -0

            //Punto decimal
            if (numeroTexto === '.') {//Si el numeroTexto es un .
                setNumero(numero + numeroTexto);

                //Evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {//Si el numeroTexto es un 0 y el numero contiene un .
                setNumero(numero + numeroTexto);

                //Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {//Si el numeroTexto es diferente de 0 y el numero no contiene un .
                setNumero(numeroTexto);

                //Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {//Si el numeroTexto es un 0 y el numero no contiene un .
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }
    };

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));//Si el numero contiene un - lo reemplaza por nada
        } else {
            setNumero('-' + numero);//Si el numero no contiene un - lo agrega
        }
    };

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {//Si el numero contiene un -
            negativo = '-';//negativo = -
            numeroTemp = numero.substr(1);//numeroTemp = numero sin el -
        }

        if (numeroTemp.length > 1) {//Si el numeroTemp es mayor a 1
            setNumero(negativo + numeroTemp.slice(0, -1));//numero = negativo + numeroTemp sin el ultimo caracter
        } else {
            setNumero('0');//Si el numeroTemp es menor a 1, numero = 0
        }
    };

    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {//Si el numero termina con un .
            setNumeroAnterior(numero.slice(0, -1));//numeroAnterior = numero sin el ultimo caracter
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    };

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    };

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    };

    const calcular = () => {//Calcula el resultado de la operacion
        const num1 = Number(numero);//Convierte el numero a un numero
        const num2 = Number(numeroAnterior);//Convierte el numeroAnterior a un numero

        switch (ultimaOperacion.current) {//Segun la ultima operacion
            case Operadores.sumar://Si la ultima operacion fue sumar
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar://Si la ultima operacion fue restar
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar://Si la ultima operacion fue multiplicar
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir://Si la ultima operacion fue dividir
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    };

    return {
        numero,
        numeroAnterior,
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    };
};
