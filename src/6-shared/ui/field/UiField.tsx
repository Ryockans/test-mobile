import { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'
import { UiText } from '@/6-shared/ui/text'
import { useTheme } from '@/6-shared/helpers/useTheme'
import { Spacing } from '@/6-shared/constants/theme'
import { UiFieldProps } from './types'

export function UiField({
  children,
  label,
  hint,
  error,
  required,
  disabled,
  style,
  controlStyle,
  leftSlot,
  rightSlot,
}: PropsWithChildren<UiFieldProps>) {
  const theme = useTheme()

  return (
    <View style={[styles.container, style]}>
      {label ? (
        <UiText type="smallBold" style={[styles.label, { color: disabled ? theme.textSecondary : theme.text }]}>
          {label}
          {required ? ' *' : ''}
        </UiText>
      ) : null}

      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: disabled ? theme.backgroundSelected : theme.backgroundElement,
            borderColor: error ? theme.danger : theme.border,
          },
          controlStyle,
        ]}
      >
        {leftSlot ? <View style={styles.slot}>{leftSlot}</View> : null}
        <View style={styles.content}>{children}</View>
        {rightSlot ? <View style={styles.slot}>{rightSlot}</View> : null}
      </View>

      {error ? (
        <UiText type="small" style={{ color: theme.danger }}>
          {error}
        </UiText>
      ) : hint ? (
        <UiText type="small" style={{ color: theme.textSecondary }}>
          {hint}
        </UiText>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  label: {
    paddingHorizontal: Spacing.one,
  },
  inputContainer: {
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
})
