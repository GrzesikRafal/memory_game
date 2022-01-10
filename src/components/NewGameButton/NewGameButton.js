import * as S from './NewGameButtonStyle'
import { ThemeContext } from "../ThemeProvider/ThemeProvider"
import { useContext } from "react"

const NewGameButton = () => {
    const themeContext = useContext(ThemeContext)

    return (
        <S.NewGameButton to='/' $themeContext={themeContext.theme} whileHover={{ scale: 1.1 }}>
            New Game
        </S.NewGameButton>
    )
}

export default NewGameButton
