import { ReactNode } from 'react'
import { StyleProp, TextStyle, TextInputProps, ViewStyle } from 'react-native'

export interface UiInputProps extends Omit<TextInputProps, 'editable' | 'style'> {
  editable?: boolean
  disabled?: boolean
  invalid?: boolean
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}
