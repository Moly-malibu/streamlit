import React, { ReactElement, ReactNode } from "react"
import { ThemeProvider as BaseUIThemeProvider } from "baseui"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

import {
  mainWidgetTheme,
  MainWidgetTheme,
  SidebarWidgetTheme,
} from "lib/widgetTheme"
import { Theme } from "theme"

export interface ThemeProviderProps {
  theme: Theme
  baseuiTheme?: MainWidgetTheme | SidebarWidgetTheme
  children: ReactNode
}

function ThemeProvider({
  theme,
  baseuiTheme,
  children,
}: ThemeProviderProps): ReactElement {
  return (
    <BaseUIThemeProvider theme={baseuiTheme || mainWidgetTheme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </BaseUIThemeProvider>
  )
}

export default ThemeProvider
