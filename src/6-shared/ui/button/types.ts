import { ButtonProps } from '@expo/ui'

export type ButtonType = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'

export interface UiButtonProps extends ButtonProps {
  loading?: boolean
  full?: boolean
  size?: 'default' | 'small' | 'large'
  disabled?: boolean
  type?: ButtonType
}
