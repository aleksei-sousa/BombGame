import { ImageBackground } from "react-native";
import { Timer,InputContainer, Input, TextTimer } from './styled'
import BombImg from '../../../../assets/images/Bomba.png'
import { useRef } from "react";
import { Keyboard } from "react-native";


function InputTimer() {

const input1 = useRef()
const input2 = useRef()
const input3 = useRef()

    return ( 
        <ImageBackground source={BombImg}
          resizeMode="contain"
          style={{
            width: '100%',
            minHeight: 180,
            marginTop:50,
            alignItems:'center',
            justifyContent:'center',
        }}  
        >
          <Timer>
            <InputContainer>
              <Input
                keyboardType={"number-pad"}
                maxLength={2}
                placeholder="60"
                placeholderTextColor="#bbb"
                ref={input1}
                onChangeText={(value)=>{
                  value.length > 1 && input2.current.focus()
                  //hoursInput
                }}
              />
            </InputContainer>
            <TextTimer>:</TextTimer>
            <InputContainer>
              <Input
                keyboardType={"number-pad"}
                maxLength={2}
                placeholder="10"
                placeholderTextColor="#bbb"
                ref={input2}
                onChangeText={(value)=>{
                  value.length > 1 && input3.current.focus()
                  //minutesInput
                }}
              />
            </InputContainer>
            <TextTimer>:</TextTimer>
            <InputContainer>
              <Input
                keyboardType={"number-pad"}
                maxLength={2}
                placeholder="00"
                placeholderTextColor="#bbb"
                ref={input3}
                onChangeText={(value)=>{
                  value.length > 1 && Keyboard.dismiss()
                  //secondsInput
                }}
              />
            </InputContainer>
          </Timer>
        </ImageBackground>
     );
}

export default InputTimer;