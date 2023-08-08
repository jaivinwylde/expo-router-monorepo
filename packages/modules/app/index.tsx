import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"
import { ThemeProvider } from "shared/theme"

export function App() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Text>Test</Text>
    </ThemeProvider>
  )
}
