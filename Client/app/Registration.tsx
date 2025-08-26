import axios from 'axios'
import React, { useState } from 'react'
const Logo = require('../assets/Images/Logo.png'); 
import { View, Text, TextInput, Pressable, Image } from 'react-native'

const Registration = () => {

    // USESTATE

    const [Name, setName] = useState<string>('')
    const [Email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')
    const [Password, setPassword] = useState<string>('')

    const onLogin = async () => {
        setError('')
        setSuccess('')
        const data={Name, Email, Password}
        try {
            const response = await axios.post("http://localhost:4000/Registration", data)
                setSuccess('Registration successful! Kindly Log in')
                window.localStorage.setItem("UserID", response.data.UserID)
        } catch (error) { 
            setError("Registration Failed!")
            console.log(error)
        }
    }

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:20, marginBottom: 20 }}>
        <Image source={Logo} style={{ width: 200, height: 200 }} />
        <View   style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 20, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 22 }}>Name</Text>
            <TextInput 
                value={Name}
                onChangeText={(value: string) => setName(value)}
                placeholder="Name"
                style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 350, fontFamily: 'InstrumentSerif', fontSize: 20, outline: 'none', paddingVertical: 4, textAlign: 'center' }}
            />
        </View>
        <View   style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 20, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 22 }}>Email</Text>
            <TextInput 
                value={Email}
                onChangeText={(value: string) => setEmail(value)}
                placeholder="Email"
                style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 350, fontFamily: 'InstrumentSerif', fontSize: 20, outline: 'none', paddingVertical: 4, textAlign: 'center' }}
            />
        </View>
        <View   style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 22, marginTop: 5 }}>Password</Text>
            <TextInput 
                value={Password}
                onChangeText={(value: string) => setPassword(value)}
                placeholder="Password"
                secureTextEntry={true}
                style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 350, fontFamily: 'InstrumentSerif', fontSize: 20, outline: 'none', paddingVertical: 4 ,textAlign: 'center' }}
            />
        </View>
        <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            <Text style={{ color: 'red', fontFamily: 'InstrumentSerif', fontSize: 18 }}>{error}</Text>
            <Text style={{ color: 'green', fontFamily: 'InstrumentSerif', fontSize: 18 }}>{success}</Text>
            <Pressable onPress={() => onLogin()} style={{ backgroundColor: '#1ea823ff', paddingHorizontal: 80, paddingVertical: 10, borderRadius: 5}}>
                <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontWeight: 'bold', fontSize: 20 }}>Registration</Text>
            </Pressable>
        </View>
    </View>
)
}

export default Registration