import { View, Text } from 'react-native'
import React from 'react'
import HeaderCustom from './HeaderCustom'

const Bai1 = () => {
    return (
        <View>
            <HeaderCustom
                leftIcon={require("../accets/images/gg.png")}
                title="Trang chủ"
                rightIcon={require("../accets/images/gg.png")}
            />

            <HeaderCustom
                leftIcon={require("../accets/images/gg.png")}
                title="Trang chủ"
                rightIcon={require("../accets/images/gg.png")}
            />

            <HeaderCustom
            title="Trang chủ"
            />

        </View>
    )
}

export default Bai1