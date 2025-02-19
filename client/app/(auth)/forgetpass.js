import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const forgetpass = () => {
    const [email, setEmail] = useState();

    return (
        <View className="bg-white px-6 pt-20 h-screen-safe">
            <View className="flex flex-col">
                <Text className="text-4xl font-bold mb-3">Forget Password?</Text>
                <Text className="text-md text-gray-500 font-semi mb-14">Enter your email address to get the password reset link.</Text>

                {/* Email Field */}
                <View className="mb-5">
                    <Text className="text-black mb-2 font-semibold">Email Address</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-4 text-gray-800"
                        placeholder="hello@example.com"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Login Button */}
                <TouchableOpacity className="mt-6 bg-blue-700 py-3 rounded-full">
                    <Text className="text-center text-white text-md font-semibold">Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default forgetpass