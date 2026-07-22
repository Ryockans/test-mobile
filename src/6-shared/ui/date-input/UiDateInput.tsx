import { useMemo, useState } from 'react'
import { DateTimePicker } from '@expo/ui/community/datetime-picker'
import { Pressable, View } from 'react-native'
import { UiInput } from '@/6-shared/ui/input'
import { UiDateInputProps } from './types'
import { Common } from '@/6-shared/constants/common'
import { dayjs } from '@/6-shared/libs/dayjs'

export const DATE_FORMATS = {
  date: Common.Date2,
  dateTime: Common.DateTime,
  apiDate: Common.Date,
  apiDateAlt: Common.Date3,
  time: Common.Time,
  dateString: Common.DateString,
} as const

type DateInput = string | number | Date | null | undefined

const parseDate = (value: DateInput) => {
  if (value === null || value === undefined || value === '') return null

  if (value instanceof Date) return value

  let parsed

  if (typeof value !== 'string') {
    parsed = dayjs(value)
  } else if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
    parsed = dayjs(value, DATE_FORMATS.date)
  } else if (/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/.test(value)) {
    parsed = dayjs(value, DATE_FORMATS.dateTime)
  } else {
    parsed = dayjs(value)
  }

  return parsed.isValid() ? parsed.toDate() : null
}

export function UiDateInput({
  value,
  defaultValue,
  valueFormat = Common.Date2,
  displayFormat = valueFormat,
  placeholder = displayFormat,
  onChangeText,
  maxDate,
  minDate,
  ...rest
}: UiDateInputProps) {
  const [innerValue, setInnerValue] = useState(() =>
    value || defaultValue ? dayjs(value ?? defaultValue).format(valueFormat) : undefined
  )
  const [isOpen, setIsOpen] = useState(false)

  const formattedValue = useMemo(() => dayjs(innerValue).format(displayFormat), [innerValue, displayFormat])
  const pickerValue = useMemo(
    () => (innerValue ? dayjs(innerValue, valueFormat).toDate() : new Date()),
    [innerValue, valueFormat]
  )

  const handlePick = (selectedDate: Date) => {
    setIsOpen(false)

    console.log('selectedDate:', selectedDate)

    if (!selectedDate) {
      return
    }

    setInnerValue(dayjs(selectedDate).format(valueFormat))
  }

  console.log('innerValue:', innerValue)
  console.log('pickerValue:', pickerValue)

  return (
    <>
      <Pressable disabled={rest.disabled} onPress={() => setIsOpen(true)}>
        <View pointerEvents="none">
          <UiInput value={formattedValue} placeholder={placeholder} editable={false} {...rest} />
        </View>
      </Pressable>

      {isOpen ? (
        <DateTimePicker
          value={pickerValue}
          mode="date"
          presentation="dialog"
          maximumDate={maxDate}
          minimumDate={minDate}
          onValueChange={(_, selectedDate) => handlePick(selectedDate)}
          onDismiss={() => setIsOpen(false)}
          disabled={rest.disabled}
        />
      ) : null}
    </>
  )
}
