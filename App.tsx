import { View, Text } from 'react-native'
import React from 'react'
import { searchMovie } from './src/api/apicall';

const App = () => {
  console.log(searchMovie("avengers"));
  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App