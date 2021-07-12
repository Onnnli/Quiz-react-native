import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import LoginForm from '../forms/LoginForm';
import { StatusBar } from 'expo-status-bar';

const Main = () => {
	return (
		<View>
			<LoginForm />
			<View>
				<Text>
					или войти с помощью
				</Text>
			</View>
			<StatusBar style='auto'/>
		</View>
	);
};

export default Main;
