import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/AppStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Register() {
    return (
        <ScrollView>
            <View style={{ marginVertical: 60 }}>

            </View>

            <View style={styles.headingContainer}>
                <Text style={styles.textHeading}>Create an account</Text>
                <Text style={styles.label}>Connect with your friends today!</Text>
            </View>

            <View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Name</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Please Enter Your Name'
                        placeholderTextColor='#9e9e9e'
                    />
                </View>

            </View>

            <View>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Email Address</Text>
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
                        />
                    </View>
                    <TouchableOpacity style={styles.icon}>
                        <FontAwesome
                            name='eye'
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

            <View style={styles.buttonContainer} >
                <Text style={styles.button}>Sign Up</Text>
            </View>

            <View style={styles.SignupContainer}>
                <Text style={styles.label}>Already have an account?</Text>
                <Text style={styles.text}>Login</Text>
            </View>

        </ScrollView>
    )
}