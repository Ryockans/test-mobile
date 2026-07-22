import { View } from 'react-native'
import { UiButton } from '@/6-shared/ui/button'
import { useRouter } from 'expo-router'

export const TestScreen = () => {
  const router = useRouter()
  const handlePress = () => {
    router.navigate('/')
  }

  return (
    <View>
      <UiButton onPress={handlePress} label="Go to Home" />
    </View>
  )
}
