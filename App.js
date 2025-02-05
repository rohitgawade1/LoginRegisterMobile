import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles/AppStyle'
import Login from './components/Login'

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <Login />
    </SafeAreaView>
  )
}

