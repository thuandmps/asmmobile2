import { View, Text } from 'react-native'
import React from 'react'
import SectionView from './SectionView'

const danhsach = [
    {
        address: "Ho chi Minh",
        time: "10:00"
    },
    {
        address: "Ha Noi",
        time: "12:00"
    },
    {
        address: "Hai Phong",
        time: "15:00"
    },
]

const Bai2 = () => {
  return (
    <View>
      <Text>Bai2</Text>
      <SectionView title="Lịch Trình" data={danhsach}/>
    </View>
  )
}

export default Bai2