/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/6-shared/constants/theme'
import { useColorScheme } from '@/6-shared/helpers/useColorScheme'

export function useTheme() {
  const scheme = useColorScheme()
  const theme = scheme === 'unspecified' ? 'light' : scheme

  return Colors[theme]
}
