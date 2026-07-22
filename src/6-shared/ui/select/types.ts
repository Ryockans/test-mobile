import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface UiSelectOption<TValue extends string = string> {
  label: string
  value: TValue
  description?: string
  disabled?: boolean
  leftSlot?: ReactNode
}

export interface UiSelectProps<TValue extends string = string> {
  value?: TValue
  placeholder?: string
  options: UiSelectOption<TValue>[]
  onValueChange?: (value: TValue) => void
  disabled?: boolean
  invalid?: boolean
  style?: StyleProp<ViewStyle>
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}
