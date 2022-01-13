import * as S from './NewGameButtonStyle'
import { ThemeContext } from "../ThemeProvider/ThemeProvider"
import { useContext } from "react"

const NewGameButton = ({$bigFont}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <S.NewGameButton to='/' $themeContext={themeContext.theme} $bigFont={$bigFont}>
            New Game
        </S.NewGameButton>
    )
}

export default NewGameButton
