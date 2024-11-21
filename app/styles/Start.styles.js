import { styled } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight() + RFValue(50)}px;
    background-color: ${({theme}) => theme.colors.background};
`

export const Logo = styled.Image`
    width: ${RFValue(270)}px;
    height: ${RFValue(50)}px;
    margin: 0 auto;
`

export const Title = styled.Text`
    margin-top: ${RFValue(50)}px;
    margin-bottom: ${RFValue(40)}px;
    font-size: ${RFValue(32)}px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.white};
`

export const SubTitle = styled.Text`
    font-size: ${RFValue(16 )}px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.white};
`
export const Rules = styled.Text`
  margin-top: ${RFValue(180)}px;
  font-size: ${RFValue(16)}px;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
`
// isso é a margem da parte superior, contando com o espaço da camera