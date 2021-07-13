import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput  } from 'react-native';

const LoginForm = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	const clickHandler = () => {
		console.log(login, password)
	}

	return (
		<View>
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
				<Button onPress={clickHandler} style={styles.button} title="button" />
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
