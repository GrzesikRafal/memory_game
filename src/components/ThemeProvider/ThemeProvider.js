import { darkTheme, lightTheme } from "../../ColorThemes/ColorThemes"
import { createContext, useState, useEffect } from "react"
import useLocalStorage from "../../Hooks/useLocalStorage"
export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [storagedTheme] = useLocalStorage('theme')
    const [theme, setTheme] = useState(darkTheme)

    useEffect(() => {
        storagedTheme ? setTheme(storagedTheme) : setTheme(darkTheme)
    }, [])

    const changeTheme = () => {
        theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
    }

    return (
        <ThemeContext.Provider value={
            {
                theme,
                changeTheme
            }
        } >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider