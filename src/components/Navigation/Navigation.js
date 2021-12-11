import * as S from './NavigationStyle'
import ThemeButton from '../ThemeButton/ThemeButton'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useContext } from 'react'

export const Navigation = () => {

    const themeContext = useContext(ThemeContext)

    return (
        <S.Navigation $themeContext={themeContext.theme}>
            <S.Logo to='/' $themeContext={themeContext.theme}>Memory</S.Logo>
            <S.NewGame to='/' $themeContext={themeContext.theme}>New Game</S.NewGame>
            <S.AbsoluteThemeButtonContainer>
                <ThemeButton />
            </S.AbsoluteThemeButtonContainer>
        </S.Navigation>
    )
}
export default Navigation