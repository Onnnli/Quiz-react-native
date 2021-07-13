import React from 'react';
import { View, Text, Button } from 'react-native';
import {authServices} from '../../services/authServices';

import LoginForm from '../forms/LoginForm';

const Main = ({navigation}) => {
	const googleAuth = () => {
		console.log('google auth')
		const response = authServices.googleAuth();
		console.log(response)
	}
	return (
		<View>
			<LoginForm />
			<View>
				<Text>
					или войти с помощью
				</Text>
			</View>
			<Button onPress={googleAuth} title="with google" />
		</View>
	);
};

export default Main;
