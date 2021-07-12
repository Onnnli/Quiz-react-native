import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';

const LoginForm = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const clickHandler = () => {
		console.log(login, password)
	}

	return (
		<View>
			<Title style={styles.text}>Title</Title>
			<View style={styles.inputContainerStyle}>
				<TextInput
					label="Enter username"
					style={{ backgroundColor: 'transparent', paddingHorizontal: 0 }}
					placeholder="Enter username"
					value={login}
					onChangeText={setLogin}
				/>
			</View>
			<View style={styles.inputContainerStyle}>
				<TextInput
					label="Enter password"
					style={{ backgroundColor: 'transparent', paddingHorizontal: 0 }}
					placeholder="Enter password"
					value={password}
					onChangeText={setPassword}
				/>
			</View>
			<View>
				<Button mode="contained" onPress={clickHandler} style={styles.button}>
					Default
				</Button>
			</View>
		</View>
	);
};
export default LoginForm;

const styles = StyleSheet.create({

	inputContainerStyle: {
		margin: 8,
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
	}
})
