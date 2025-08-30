import Header from '@/components/Header/Header';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
const Logo = require('../../assets/Images/Logo.png'); 

const index = () => {
return (
    <SafeAreaView>
        <ScrollView>
            <Header />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <Image source={Logo} style={{ width: 500, height: 500 }} />
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 32, marginTop: 5 }}>Welcome to Ever Health</Text>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, fontStyle: 'italic',marginTop: 10, paddingHorizontal: 40, textAlign: 'center' }}>your comprehensive health and fitness companion to help you achieve your health & wellness goals.</Text>
                <Link href={'/Registration'}  style={{ backgroundColor: '#1ea823ff', paddingHorizontal: 40,paddingVertical: 10, borderRadius: 5, marginTop: 20 }}>
                    <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontWeight: 'bold', fontSize: 20 }}>Get Started</Text>
                </Link>
            </View>
        </ScrollView>
    </SafeAreaView>
)
}

export default index