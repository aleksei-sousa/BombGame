import { Container, Input, InputContainer } from "./styled";
import { useRef } from "react";
import { Keyboard } from "react-native";


function InputPassword() {

    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()

    return ( 
        <Container>
            <InputContainer>
                <Input keyboardType={"number-pad"} maxLength={1} ref={input1} onChangeText={(value)=> value && input2.current.focus()}/>
            </InputContainer>
            <InputContainer>
                <Input keyboardType={"number-pad"} maxLength={1} ref={input2} onChangeText={(value)=> value && input3.current.focus()}/>
            </InputContainer>
            <InputContainer>
                <Input keyboardType={"number-pad"} maxLength={1} ref={input3} onChangeText={(value)=> value && Keyboard.dismiss()}/>
            </InputContainer>
        </Container>
     );
}

export default InputPassword;