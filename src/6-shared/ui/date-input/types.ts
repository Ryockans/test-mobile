import { UiInputProps } from '@/6-shared/ui/input/types'

export interface UiDateInputProps extends Omit<
  UiInputProps,
  'value' | 'defaultValue' | 'keyboardType' | 'maxLength' | 'onChangeText'
> {
  value?: string
  defaultValue?: string
  valueFormat?: string
  displayFormat?: string
  onChangeText?: (value: string) => void
  maxDate?: Date
  minDate?: Date
}
