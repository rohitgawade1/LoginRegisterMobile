import { View, Text, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from '../styles/AppStyle'

export default function Login({ navigation }) {
    const [IsShow, setIsShow] = useState(false);

    const navigate = () => {
        navigation.navigate('Register')
    }
    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>


                <View style={{ marginVertical: 60 }}>

                </View>

                <View style={styles.headingContainer}>
                    <Text style={styles.textHeading}>Hi, Welcome Back!👋</Text>
                </View>

                <View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Email</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Please Enter Your Email'
                            placeholderTextColor='#9e9e9e'
                        />
                    </View>

                </View>

                <View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Password</Text>
                    </View>

                    <View style={styles.textInputContainer}>
                        <View>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Please Enter Your Password'
                                placeholderTextColor='#9e9e9e'
                                secureTextEntry={IsShow ? false : true}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => setIsShow(!IsShow)}
                        >
                            <FontAwesome
                                name={IsShow ? 'eye-slash' : 'eye'}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <View style={styles.textContainer} >
                        <Text style={[styles.text, { color: 'red', marginLeft: 'auto' }]}>Forgot Password</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonContainer} >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>

                <View style={styles.SignupContainer}>
                    <Text style={[styles.text, { color: '#9e9e9e', marginRight: 8 }]}>Don't have an account?</Text>
                    <Text
                        style={styles.text}
                        onPress={navigate}
                    >Sign Up</Text>
                </View>
            </ScrollView>
        </View>
    )
}