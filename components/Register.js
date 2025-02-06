import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/AppStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Register({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [IsShow, setIsShow] = useState(false);

    const validateForm = () => {
        let errors = {};
        console.warn('SDF')
        // Name validation
        if (!name) {
            errors.name = 'Name is required';
        } else if (!/^[A-Za-z ]+$/.test(name)) {
            errors.name = 'Name should contain only letters';
        }

        // Email validation
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            errors.email = 'Invalid email format';
        }

        // Password validation
        if (!password) {
            errors.password = 'Password is required';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            errors.password = 'Password must be at least 6 characters, include letters and numbers';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            alert('Form Submitted Successfully!');
        }
    };


    const navigate = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                            value={name}
                            onChangeText={setName}
                        />
                        {errors.name && <Text style={styles.error}>{errors.name}</Text>}
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
                            value={email}
                            onChangeText={setEmail}
                        />
                        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
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
                                value={password}
                                onChangeText={setPassword}
                            />
                            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                        </View>
                        <TouchableOpacity
                            style={errors.password ? [styles.icon, { top: 10 }] : styles.icon}
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

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={validateForm}
                >
                    <Text style={styles.button} >Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.SignupContainer}>
                    <Text style={styles.label}>Already have an account?</Text>
                    <Text
                        style={styles.text}
                        onPress={navigate}
                    >Login</Text>
                </View>

            </ScrollView>
        </View>
    )
}