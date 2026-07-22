import { View } from 'react-native'
import { UiDateInput, UiInput, UiSelect, UiText } from '@/6-shared/ui'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import { UiButton } from '@/6-shared/ui/button'
import { Common } from '@/6-shared/constants'

export const HomeScreen = () => {
  const [dateState, setDateState] = useState('')
  const [selectState, setSelectState] = useState('1')
  const options = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
    {
      label: 'Option 3',
      value: '3',
    },
  ]

  const router = useRouter()
  const handlePress = () => {
    router.navigate('/test')
  }

  return (
    <View>
      <SafeAreaView
        style={{
          padding: 8,
          gap: 8,
        }}
      >
        <UiText type="title" style={{ textAlign: 'center' }}>
          Testique
        </UiText>

        <UiInput placeholder={'Testique'} />

        <UiDateInput
          value={dateState}
          onChangeText={setDateState}
          valueFormat={Common.Date}
          displayFormat={Common.Date2}
        />

        <UiSelect value={selectState} options={options} onValueChange={setSelectState} />

        <UiButton onPress={handlePress} label="Go to Test" />
      </SafeAreaView>
    </View>
  )
}
