import { useState } from "react"
import { ThemeProvider } from "react-bootstrap"
import { darkTheme, lightTheme } from "../../styles/theme"


export default function ThemeContext(){
    const [theme, setTheme] = useState("light")
    const ThemeStyle = theme === 'light' ? lightTheme : darkTheme


    return (
        <>
        <ThemeProvider theme={themeStyle}>
            hi
        </ThemeProvider>
        </>
    )
}