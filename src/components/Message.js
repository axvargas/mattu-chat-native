import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import letterColors from '../utils/letterColors'
const Message = ({ message, username }) => {
    const { username: uname, text, time } = message
    const [bgColor, setBgColor] = useState(null)
    const isMine = username === uname
    useEffect(() => {
        const char = uname.trim()[0].toUpperCase()
        const indexLetter = char.charCodeAt() - 65
        setBgColor(letterColors[indexLetter])
    }, [])
    const conditionalStyles = {
        container: {
            justifyContent: isMine ? 'flex-end' : 'flex-start'
        },
        viewMessage: {
            backgroundColor: isMine ? '#f0f0f1' : '#4b86f0'
        },
        message: {
            color: isMine ? '#000' : '#fff',
            textAlign: isMine ? 'right' : 'left'
        }
    }
    return (
        <View style={[styles.container, conditionalStyles.container]}>
            {!isMine &&
                <View style={[styles.letterView, { backgroundColor: `rgb(${bgColor})` }]}>
                    <Text style={styles.letter}>{uname.substr(0, 1)}</Text>
                </View>
            }
            <View style={[styles.messageView, conditionalStyles.viewMessage]}>
                <Text style={[styles.message, conditionalStyles.message]}>{text}</Text>
                <Text style={[styles.time, isMine ? styles.timeLeft : styles.timeRight]}>{time}</Text>
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    letterView: {
        height: 35,
        width: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'grey'
    },
    letter: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase'
    },
    container: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    messageView: {
        borderRadius: 10,
        minHeight: 35,
        minWidth: '40%',
        maxWidth: '80%',
    },
    message: {
        padding: 5,
        paddingBottom: 25
    },
    time: {
        fontSize: 10,
        position: 'absolute',
        bottom: 5
    },
    timeRight: {
        right: 8,
        color: '#fff'
    },
    timeLeft: {
        left: 8,
        color: 'grey'
    }
})
