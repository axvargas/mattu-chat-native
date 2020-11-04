import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, Body, Title } from 'native-base'
import InputMessage from '../components/InputMessage'
import { map } from 'lodash'
import { db } from '../utils/firebase'
import Message from '../components/Message'

const Chat = ({ username }) => {
    const [messages, setMessages] = useState([])
    const scrollRef = useRef()
    useEffect(() => {
        const getMessages = async () => {
            const chat = db.ref('general')
            chat.on('value', (snapshot) => {
                setMessages(snapshot.val())
            })
        }
        getMessages()
    }, [])

    useEffect(() => {
        scrollRef.current.scrollTo({ y: 1000000 })
    }, [messages])
    return (
        <>
            <Header style={styles.header} androidStatusBarColor='#16202b' iosBarStyle="light-content">
                <Body>
                    <Title style={{ color: '#fff' }}>
                        Mattu Chat
                    </Title>
                </Body>
            </Header>
            <View style={styles.content}>
                <ScrollView style={styles.chatView} ref={scrollRef}>
                    {map(messages, (message, i) => (
                        <Message key={i} message={message} username={username} />
                    ))}
                </ScrollView>
                <InputMessage username={username} />
            </View>
        </>
    )
}

export default Chat

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: '#16202b'
    },
    chatView: {
        backgroundColor: '#1b2734'
    }
})
