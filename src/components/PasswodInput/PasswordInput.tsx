import { Container, InputContainer, Input } from './styled';
import { useRef } from 'react';
import { Keyboard } from 'react-native'; // Import necessário para dismiss do teclado

function PasswordInput() {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);

    return (
        <Container>
            <InputContainer>
                <Input
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={input1}
                    onChangeText={(value) => {
                        if (value) input2.current.focus(); // Foco no próximo campo
                    }}
                />
            </InputContainer>
            <InputContainer>
                <Input
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={input2}
                    onChangeText={(value) => {
                        if (value) input3.current.focus(); // Foco no próximo campo
                    }}
                />
            </InputContainer>
            <InputContainer>
                <Input
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={input3}
                    onChangeText={() => {
                        Keyboard.dismiss(); // Fecha o teclado ao completar o último campo
                    }}
                />
            </InputContainer>
        </Container>
    );
}

export default PasswordInput;
