import { UiButtonProps } from '@/6-shared/ui/button/types'
import { StyleSheet } from 'react-native'
import { Button, UniversalStyle } from '@expo/ui'
import { Host } from '@expo/ui/jetpack-compose'

export const UiButton = ({ type = 'primary', style: _style, children, ...rest }: UiButtonProps) => {
  const buttonStyle = styles[type as keyof typeof styles]
  const style = [styles.button, buttonStyle, _style] as UniversalStyle

  return (
    <Host matchContents>
      <Button style={style} {...rest}>
        {children}
      </Button>
    </Host>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: 'black',
  },
  primary: {},
  secondary: {},
  error: {},
  success: {},
  warning: {},
  info: {},
})
