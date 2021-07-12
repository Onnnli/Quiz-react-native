import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

import Main from './components/pages/Main';

export default function App() {
	return (
		<PaperProvider>
			<Main />
		</PaperProvider>

	);
}

