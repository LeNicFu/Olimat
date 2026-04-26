import { GlobalContext, InfoProvider } from './src/context'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import Manager from './src/manager'
import { useContext } from 'react'

export default function App() {
  return <InfoProvider>
    <StatusBar style='auto' />
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
