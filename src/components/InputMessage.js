import React, { useRef } from 'react'
import { StyleSheet, TouchableOpacity, View, Platform } from 'react-native'
import { Item, Input, Icon, Text } from 'native-base'
import { useForm, Controller } from 'react-hook-form'
import { db } from '../utils/firebase'
import moment from 'moment'
const InputMessage = ({ username }) => {
    const { control, handleSubmit, reset, errors } = useForm({
        defaultValues: {
            message: '',
        },
    })
    const messageRef = useRef()
    const rules = {
        message: {
            required: "Type your message please",
            validate: (value) => value.trim() !== '' || "Type your message please"
        }
    }

    const onSubmit = async (data) => {
        const time = moment().format('hh:mm a')
        await db.ref('general')
            .push({ username: username, text: data.message.trim(), time })
        reset()
    }


    return (
        <View style={styles.container}>
            <Item
                style={styles.itemInput}
            >
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    // onFocus={() => {
                    //     usernameRef.current.focus();
                    // }}
                    rules={rules.message}
                    render={({ onChange, onBlur, value }) => (
                        <Input
                            placeholder="Type your message"
                            style={styles.input}
                            multiline
                            placeholderTextColor='grey'
                            onChangeText={(value) => {
                                onChange(value)
                            }}
                            value={value}
                            ref={messageRef}
                        />
                    )}
                />
                <TouchableOpacity
                    enabled={false}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Icon type="FontAwesome" name="send" style={styles.iconSend} />
                </TouchableOpacity>
            </Item>
        </View >
    )
}

export default InputMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16202b',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    itemInput: {
        borderColor: '#16202b'
    },
    iconSend: {
        color: '#fff'
    },
    input: {
        color: '#fff'
    }
})
