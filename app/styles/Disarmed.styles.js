import { RFValue } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.colors.black};
    /* padding: ${ getStatusBarHeight() + RFValue(0)}px; */
    align-items: center;   /* Alinha horizontalmente */
`

export const Logo = styled.Image`
    width: ${RFValue(270)}px;
    height: ${RFValue(50)}px;
    margin-top: ${RFValue(100)}px;
`

export const Title = styled.Text`
    color: white;
    margin-top: ${RFValue(70)}px;
    font-size: ${RFValue(32)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: center;
`

export const SucessImg = styled.Image`
    width: ${RFValue(270)}px;
    height: ${RFValue(150)}px;
    margin: 0 auto;
    margin-top:  ${RFValue(50)}px;
    background-color: antiquewhite;
    margin-bottom: ${RFValue(50)}px;
`