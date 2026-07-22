import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface UiFieldProps {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  controlStyle?: StyleProp<ViewStyle>
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}
