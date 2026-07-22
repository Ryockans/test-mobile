import { TextProps } from 'react-native'
import { ThemeColor } from '@/6-shared/constants/theme'

export type UiTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code'
  themeColor?: ThemeColor
}
