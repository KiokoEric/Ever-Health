
import React from 'react';
import { Image, Text, View } from 'react-native';
const Logo = require('../../assets/Images/Logo.png'); 

const Header = () => {
return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 5, marginTop: 2, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: 45, width: '100%' }}>
        <Image source={Logo} style={{ height: 65, width: 65 }}  />
        <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 28 }}>Ever Health</Text>
    </View>
)
}

export default Header