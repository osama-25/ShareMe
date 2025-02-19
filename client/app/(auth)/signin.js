import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Googlesvg from '../../assets/images/google-icon.svg';
import { Link } from "expo-router";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);

    

    return (
        <View className="bg-white px-6 pt-20 h-screen-safe">
            <View className="flex flex-col">
                <Text className="text-4xl mb-2" style={{fontFamily:'OGBold'}}>Login</Text>
                <Text className="text-gray-500 mb-14">Welcome back to the app</Text>

                {/* Email Field */}
                <Text className="text-black mb-2" style={{fontFamily:'OGSBold'}}>Email Address</Text>
                <TextInput
                    className="border border-gray-300 rounded-lg px-4 py-4 text-gray-800"
                    placeholder="hello@example.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Field */}
                <View className="mt-5">
                    <View className="flex-row items-center justify-between mb-2">
                        <Text style={{fontFamily:'OGSBold'}}>Password</Text>
                        <Link href={'/forgetpass'}>
                            <Text className="text-blue-700 text-sm" style={{fontFamily:'OGSBold'}}>Forgot Password?</Text>
                        </Link>
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
                <Link href="/signup" className="mt-6">
                    <Text className="text-center text-blue-700" style={{fontFamily:'OGSBold'}}>Create an account</Text>
                </Link>
            </View>
        </View>
    );
}
export default LoginScreen