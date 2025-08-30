import axios from 'axios'
import React, { useState } from 'react'
const Logo = require('../assets/Images/Logo.png'); 
import { View, Text, TextInput, Pressable, Image, KeyboardAvoidingView } from 'react-native'

const Login = () => {

    // USESTATE

    const [email, setEmail] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [success, setSuccess] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onLogin = async () => {
        setError('')
        setSuccess('')
        const data={email, password}
        try {
            const response = await axios.post("http://localhost:4000/Login", data)
                setSuccess('Successfully Logged In')
                window.localStorage.setItem("UserID", response.data.UserID)
        } catch (error) { 
            setError("Login Failed")
            console.log(error)
        }
    }

return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:20, marginBottom: 20 }}>
            <Image source={Logo} style={{ width: 200, height: 200 }} />
            <View   style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 20, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24 }}>Email</Text>
                <TextInput 
                    value={email}
                    onChangeText={(value: string) => setEmail(value)}
                    placeholder="Email"
                    style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 350, fontFamily: 'InstrumentSerif', fontSize: 20, outline: 'none', paddingVertical: 4, textAlign: 'center' }}
                />
            </View>
            <View   style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 5 }}>Password</Text>
                <TextInput 
                    value={password}
                    onChangeText={(value: string) => setPassword(value)}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 350, fontFamily: 'InstrumentSerif', fontSize: 20, outline: 'none', paddingVertical: 4 ,textAlign: 'center' }}
                />
            </View>
            <Text style={{ color: 'red', fontFamily: 'InstrumentSerif', fontSize: 18 }}>{error}</Text>
            <Text style={{ color: 'green', fontFamily: 'InstrumentSerif', fontSize: 18 }}>{success}</Text>
            <Pressable onPress={() => onLogin()} style={{ backgroundColor: '#1b8f1fff', paddingHorizontal: 80, paddingVertical: 10, borderRadius: 5}}>
                <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
)
}

export default Login