import { forwardRef } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { useTheme } from '@/6-shared/helpers/useTheme'
import { Fonts, Spacing } from '@/6-shared/constants/theme'
import { UiInputProps } from './types'

export const UiInput = forwardRef<TextInput, UiInputProps>(function UiInput(
  { disabled, editable = true, style, inputStyle, leftSlot, rightSlot, invalid, placeholderTextColor, ...rest },
  ref
) {
  const theme = useTheme()
  const isEditable = editable && !disabled

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: disabled ? theme.backgroundSelected : theme.backgroundElement,
          borderColor: invalid ? theme.danger : theme.border,
        },
        style,
      ]}
    >
      {leftSlot ? <View style={styles.slot}>{leftSlot}</View> : null}
      <View style={styles.content}>
        <TextInput
          ref={ref}
          editable={isEditable}
          placeholderTextColor={placeholderTextColor ?? theme.placeholder}
          style={[
            styles.input,
            {
              color: isEditable ? theme.text : theme.textSecondary,
            },
            inputStyle,
          ]}
          {...rest}
        />
      </View>
      {rightSlot ? <View style={styles.slot}>{rightSlot}</View> : null}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    gap: Spacing.two,
  },
  slot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    minHeight: 46,
    justifyContent: 'center',
  },
  input: {
    minHeight: 46,
    paddingVertical: 0,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: Fonts.sans,
  },
})
