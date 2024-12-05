import { RFValue } from 'react-native-responsive-fontsize'
import { styled } from 'styled-components'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight() + RFValue(10)}px;
    padding-bottom: ${getStatusBarHeight() + RFValue(10)}px;
    align-items: center;
`

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`

export const Title = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: center;
    color: ${({theme}) => theme.colors.white};
`