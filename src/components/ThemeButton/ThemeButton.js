import * as S from './ThemeButtonStyle'
import { darkTheme, lightTheme } from '../../ColorThemes/ColorThemes'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { MdNightsStay as MoonIcon, MdWbSunny as SunIcon } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'

const ThemeButton = () => {

    const themeContext = useContext(ThemeContext)
    const [, setStoragedTheme] = useLocalStorage('theme')

    const toogleTheme = () => {
        themeContext.theme.name === 'dark' ? setStoragedTheme(lightTheme) : setStoragedTheme(darkTheme)
        themeContext.changeTheme()
    }
    const themeAnimation = {
        hidden: { opacity: 0, y: '3vh' },
        visible: { opacity: 1, y: '0' },
        exit: { opacity: 0, y: '-3vh' }
    }
    return (
        <S.ThemeButton onClick={toogleTheme} aria-label='toogle color theme' >
            <AnimatePresence exitBeforeEnter>
                {themeContext.theme.name === 'dark' ?
                    <motion.div key="sun" variants={themeAnimation} whileHover={{ scale: 1.2 }} animate='visible' initial='hidden' exit='exit'>
                        <SunIcon color='#FFD700' />
                    </motion.div>
                    :
                    <motion.div key="moon" variants={themeAnimation} whileHover={{ scale: 1.2 }} animate='visible' initial='hidden' exit='exit'>
                        <MoonIcon color='#000' />
                    </motion.div>
                }
            </AnimatePresence>

        </S.ThemeButton>
    )
}

export default ThemeButton
