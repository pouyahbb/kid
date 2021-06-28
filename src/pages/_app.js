import { useState, useEffect } from 'react'
// Material ui setup
import { darkTheme, lightTheme } from '../components/muiTheme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { jssPreset, StylesProvider } from '@material-ui/core/styles'
import { create } from 'jss'

const jss = create({
	plugins: [...jssPreset().plugins],
	insertionPoint: 'mui-inject-first',
})

const Providers = ({ darkMode, children }) => {
	return (
		<StylesProvider jss={jss}>
			<MuiThemeProvider theme={lightTheme}>
				<SCThemeProvider theme={lightTheme}>
					<CssBaseline />
					{children}
				</SCThemeProvider>
			</MuiThemeProvider>
		</StylesProvider>
	)
}

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles)
		}
	})
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	)
}

export default MyApp
