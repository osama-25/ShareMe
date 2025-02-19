import { View, Text, TextInput, TouchableOpacity, Image, Switch } from "react-native"
import React, { useState } from 'react'
import { Feather } from "@expo/vector-icons";
import Googlesvg from '../../assets/images/google-icon.svg'
import { Link } from "expo-router";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);

    return (
        <View className="bg-white px-6 pt-20 h-screen-safe">
            <View className="flex flex-col">
                <Text className="text-4xl mb-14" style={{fontFamily:'OGBold'}}>Create an account</Text>

                {/* Username Field */}
                <View className="mb-5">
                    <Text className="mb-2" style={{fontFamily:'OGSBold'}}>Username</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-4 text-gray-800"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                {/* Email Field */}
                <View className="mb-5">
                    <Text className="mb-2" style={{fontFamily:'OGSBold'}}>Email Address</Text>
                    <TextInput
                        className="border border-gray-300 rounded-lg px-4 py-4 text-gray-800"
                        placeholder="hello@example.com"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Password Field */}
                <View className="mb-5">
                    <View className="flex-row justify-between mb-2">
                        <Text style={{fontFamily:'OGSBold'}}>Password</Text>
                    </View>
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-3 mt-1">
                        <TextInput
                            className="flex-1 text-gray-800"
                            secureTextEntry={secureText}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            {secureText ? (
                                <Feather name="eye" size={22} color="gray" />
                            ) : (
                                <Feather name="eye-off" size={22} color="gray" />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Login Button */}
                <TouchableOpacity className="mt-6 bg-blue-700 py-3 rounded-full">
                    <Text className="text-center text-white text-lg" style={{fontFamily:'OGBold'}}>Login</Text>
                </TouchableOpacity>

                {/* Google Sign-In */}
                <Text className="text-center text-gray-500 my-4">or sign in with</Text>
                <TouchableOpacity className="flex-row items-center justify-center bg-gray-100 py-3 gap-x-4 rounded-full">
                    <Googlesvg width={24} height={24} />
                    <Text className="text-gray-700">Continue with Google</Text>
                </TouchableOpacity>

                {/* Create Account */}
                <View className="flex flex-row justify-center mt-6">
                    <Text>Already have an account? </Text>
                    <Link href="/signin">
                        <Text className="text-center text-blue-700" style={{fontFamily:'OGSBold'}}>Sign in here</Text>
                    </Link>
                </View>
            </View>
        </View>
    )
}

export default SignUp