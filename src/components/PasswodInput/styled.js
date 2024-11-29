import {RFValue} from 'react-native-responsive-fontsize'
import styled from 'styled-components'

export const Container = styled.View`
    margin: ${RFValue(50)}px ${RFValue(30)}px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const InputContainer = styled.View`
    border: 1px solid white;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0 ${RFValue(20)}px;
`
export const Input = styled.TextInput`
    font-size: ${RFValue(30)}px;
    padding: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.white};
    text-align: center;
    border-radius: 5px;
    width: 100%;
    background-color: ${(props)=>props.abled ===false ? "#9999998c" : "transparent"};
`