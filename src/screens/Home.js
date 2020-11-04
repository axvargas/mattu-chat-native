import React, { useRef } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Item, Input, Text, Button } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import logoApp from '../assets/chatLogo.png'
const Home = ({ setUsername }) => {
    const { control, handleSubmit, errors } = useForm({
        defaultValues: {
            username: '',
        },
    })
    const usernameRef = useRef()
    const rules = {
        username: {
            required: "Type your username please",
            validate: (value) => value.trim() !== '' || "Type your username please"
        }
    }
    const onSubmit = async (data) => {
        setUsername(data.username.trim())
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View>
                    <Image
                        source={logoApp}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                </View>
                <Item>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        // onFocus={() => {
                        //     usernameRef.current.focus();
                        // }}
                        rules={rules.username}
                        render={({ onChange, onBlur, value }) => (
                            <Input
                                placeholder="Username"
                                style={styles.input}
                                placeholderTextColor='grey'
                                onChangeText={(value) => {
                                    onChange(value)
                                }}
                                value={value}
                                ref={usernameRef}
                            />
                        )}
                    />
                </Item>
                {errors.username && <Text style={styles.errorMsg}>{errors.username.message}</Text>}
                <Button
                    style={styles.btn}
                    onPress={handleSubmit(onSubmit)}
                    full
                >
                    <Text>Let's chat</Text>
                </Button>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 100
    },
    logo: {
        width: '100%',
        height: 200,
        marginBottom: 30
    },
    errorMsg: {
        textAlign: 'left',
        fontSize: 12,
        marginLeft: 8,
        color: 'grey',
    },
    input: {
        color: '#fff'
    },
    btn: {
        marginTop: 40,
        justifyContent: 'center',
        backgroundColor: '#0098d3',
        borderRadius: 2
    }
})
