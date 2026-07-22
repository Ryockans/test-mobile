import { forwardRef } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { UiInput } from '@/6-shared/ui/input'
import { UiTextareaProps } from './types'

export const UiTextarea = forwardRef<TextInput, UiTextareaProps>(function UiTextarea(
  { minHeight = 120, inputStyle, textAlignVertical = 'top', multiline = true, style, ...rest },
  ref
) {
  return (
    <UiInput
      ref={ref}
      multiline={multiline}
      textAlignVertical={textAlignVertical}
      style={[styles.container, style]}
      inputStyle={[styles.input, { minHeight }, inputStyle]}
      {...rest}
    />
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  input: {
    paddingTop: 0,
  },
})
