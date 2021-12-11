import * as S from './GameOptionsStyle'
import GameContainer from '../../components/GameContainer/GameContainer'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import GameOption from "../../components/GameOption/GameOption"
import { ThemeContext } from "../../components/ThemeProvider/ThemeProvider"
import { useSelector, useDispatch } from 'react-redux'
import { setNewGame } from '../../Redux/settingsSlice'
import { prepareNewGame } from '../../Redux/gameSlice'
import { useContext } from "react"

const GameOptions = () => {
    const { gridSize, gameTheme } = useSelector((state) => state.gameSettings)
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()

    const startNewGame = () => {
        dispatch(prepareNewGame())
        dispatch(setNewGame(gridSize))
    }
    const list = {
        hidden: { y: '-100vh', transition: { when: "afterChildren", }, },
        visible: { y: 0, transition: { when: "beforeChildren", staggerChildren: 0.3, }, },
        exit: { x: '-100vw', }

    }
    const item = {
        hidden: { x: '-100vw' },
        visible: { x: 0 },
        start: { opacity: 0 },
        button: { opacity: 1, transition: { delay: 2 } }
    }
    return (
        <GameContainer $SVG>
            <S.OptionsContainer variants={list} initial='hidden' animate='visible' exit='exit'>
                <S.AbsoluteThemeButton>
                    <ThemeButton />
                </S.AbsoluteThemeButton>
                <S.RowTitle variants={item} >Select Theme</S.RowTitle>
                <S.GameOptionsRow variants={item}>
                    <GameOption option='Numbers' value='Numbers' name='theme' checked={!!(gameTheme === 'Numbers')} />
                    <GameOption option='Icons' value='Icons' name='theme' checked={!!(gameTheme === 'Icons')} />
                </S.GameOptionsRow>

                <S.RowTitle variants={item}>Grid Size</S.RowTitle>
                <S.GameOptionsRow variants={item} >
                    <GameOption option='4 x 4' value={4} name='size' checked={!!(gridSize === 4)} />
                    <GameOption option='6 x 6' value={6} name='size' checked={!!(gridSize === 6)} />

                </S.GameOptionsRow>

                <S.Button variants={item} initial='start' animate='button' to='/game' onClick={startNewGame} $theme={themeContext.theme}>
                    Start Game
                </S.Button>

            </S.OptionsContainer>
        </GameContainer>
    )
}

export default GameOptions
