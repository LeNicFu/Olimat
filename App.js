import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'//////
import Manager from './src/manager'
import { InfoProvider } from './src/context'

export default function App() {
  return <InfoProvider>
    <Manager />
  </InfoProvider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
