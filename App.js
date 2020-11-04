import React, { useState } from 'react';
import {
	StyleSheet,
	StatusBar,
	View,
	LogBox
} from 'react-native';
import { Container } from 'native-base'
import Chat from './src/screens/Chat'
import Home from './src/screens/Home'

LogBox.ignoreLogs(["Setting a timer"])

const App = () => {
	const [username, setUsername] = useState(null)
	return (
		<>
			<StatusBar barStyle='light-content' backgroundColor='#16202b' />
			<Container style={styles.container}>
				{!username ?
					<Home setUsername={setUsername} />
					:
					<Chat username={username} />
				}
			</Container>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#16202b'
	}
});

export default App;
