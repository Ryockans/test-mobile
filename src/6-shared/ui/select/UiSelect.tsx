import { useMemo, useState } from 'react'
import { Modal, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { useTheme } from '@/6-shared/helpers/useTheme'
import { Spacing } from '@/6-shared/constants/theme'
import { UiText } from '@/6-shared/ui/text'
import { UiSelectOption, UiSelectProps } from './types'

function UiSelectChevron() {
  const theme = useTheme()

  return (
    <UiText type="smallBold" style={{ color: theme.textSecondary }}>
      v
    </UiText>
  )
}

export function UiSelect<TValue extends string = string>({
  value,
  placeholder = 'Select an option',
  options,
  onValueChange,
  disabled,
  style,
  invalid,
  leftSlot,
  rightSlot,
}: UiSelectProps<TValue>) {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = useMemo(() => options.find((option) => option.value === value), [options, value])

  const close = () => setIsOpen(false)

  const handleSelect = (option: UiSelectOption<TValue>) => {
    if (option.disabled) {
      return
    }

    onValueChange?.(option.value)
    close()
  }

  return (
    <>
      <View
        style={[
          styles.triggerContainer,
          {
            backgroundColor: disabled ? theme.backgroundSelected : theme.backgroundElement,
            borderColor: invalid ? theme.danger : theme.border,
          },
          style,
        ]}
      >
        {leftSlot ? <View style={styles.triggerSlot}>{leftSlot}</View> : null}
        <Pressable disabled={disabled} onPress={() => setIsOpen(true)} style={styles.trigger}>
          <UiText style={{ color: selectedOption ? theme.text : theme.placeholder }}>
            {selectedOption?.label ?? placeholder}
          </UiText>
        </Pressable>
        <View style={styles.triggerSlot}>{rightSlot ?? <UiSelectChevron />}</View>
      </View>

      <Modal transparent visible={isOpen} animationType="fade" onRequestClose={close}>
        <Pressable style={styles.backdrop} onPress={close}>
          <View
            style={[
              styles.sheet,
              {
                backgroundColor: theme.background,
                borderColor: theme.border,
              },
            ]}
          >
            <ScrollView contentContainerStyle={styles.options}>
              {options.map((option) => {
                const isSelected = option.value === value

                return (
                  <Pressable
                    key={option.value}
                    disabled={option.disabled}
                    onPress={() => handleSelect(option)}
                    style={[
                      styles.option,
                      {
                        backgroundColor: isSelected ? theme.backgroundSelected : theme.background,
                        opacity: option.disabled ? 0.5 : 1,
                      },
                    ]}
                  >
                    {option.leftSlot ? <View style={styles.optionSlot}>{option.leftSlot}</View> : null}
                    <View style={styles.optionContent}>
                      <UiText type="default">{option.label}</UiText>
                      {option.description ? (
                        <UiText type="small" style={{ color: theme.textSecondary }}>
                          {option.description}
                        </UiText>
                      ) : null}
                    </View>
                  </Pressable>
                )
              })}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  triggerContainer: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.three,
    paddingRight: Spacing.three,
    gap: Spacing.two,
  },
  trigger: {
    flex: 1,
    minHeight: 46,
    justifyContent: 'center',
  },
  triggerSlot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    justifyContent: 'center',
    padding: Spacing.four,
  },
  sheet: {
    maxHeight: '70%',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  options: {
    padding: Spacing.two,
    gap: Spacing.one,
  },
  option: {
    minHeight: 52,
    borderRadius: 8,
    paddingHorizontal: Spacing.three,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  optionSlot: {
    width: 20,
    alignItems: 'center',
  },
  optionContent: {
    flex: 1,
    gap: Spacing.one,
  },
})
