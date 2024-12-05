import styled from 'styled-components'
import {RFValue} from 'react-native-responsive-fontsize'

export const Timer = styled.View`
  margin-top: ${RFValue(25)}px;
  margin-right: ${RFValue(15)}px;
  flex-direction: row;
`

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme})=> theme.fonts.bold};
  color: ${({theme})=> theme.colors.white};
  margin: 0px ${RFValue(5)}px;
`

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const Input = styled.TextInput`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=> theme.colors.white};
  width: 100%;
`
export const BombMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  /* padding-bottom: ${RFValue(10)}px; */
  margin: 0 ${RFValue(30)}px;
  margin-bottom: ${RFValue(50)}px ;
  text-align: center;
  color: #FF0044;
`