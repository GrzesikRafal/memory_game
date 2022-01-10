import * as S from './GameStyle'
import GameContainer from '../../components/GameContainer/GameContainer'
import GameSummary from '../../components/GameSummary/GameSummary'
import Navigation from '../../components/Navigation/Navigation'
import GameScore from '../../components/GameScore/GameScore'
import GridItem from '../../components/GridItem/GridItem'
import useLocalStorage from '../../Hooks/useLocalStorage'
import { clearArrayOfGuesses, addToSuccessGuesses } from '../../Redux/gameSlice'
import { ThemeContext } from '../../components/ThemeProvider/ThemeProvider'
import { useEffect, useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { axiosInstance } from '../../axiosInstance'
import { useStopwatch } from 'react-timer-hook'
import { Redirect } from 'react-router'

export const Game = () => {
    const { seconds, minutes, start: startTimer, pause: pauseTimer } = useStopwatch({ autoStart: false })
    const { gameTheme, gridSize, arrayOfNumbers } = useSelector(state => state.gameSettings)
    const { arrayOfGuesses, successGuesses } = useSelector(state => state.userGuesses)
    const [storaged4GridScore, setStoraged4GridScore] = useLocalStorage('4GridScore')
    const [storaged6GridScore, setStoraged6GridScore] = useLocalStorage('6GridScore')
    const [isGameFinished, setIsGameFinished] = useState(false)
    const [isGameStarted, setIsGameStarted] = useState(false)
    const [movesCounter, setMovesCounter] = useState(0)
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()

    const insertScoreToLocalStorage = (gridSize) => {
        const storagedScore = gridSize === 4 ? storaged4GridScore : storaged6GridScore
        const setStoragedScore = gridSize === 4 ? setStoraged4GridScore : setStoraged6GridScore
        storagedScore ?
            setStoragedScore([...storagedScore, { movesCounter, minutes, seconds }])
            :
            setStoragedScore([{ movesCounter, minutes, seconds }])
    }

    const storeScoreInDatabase = async () => {
        try {
            await axiosInstance.post(`${gridSize}/moves.json`, movesCounter)
            await axiosInstance.post(`${gridSize}/time.json`, { minutes, seconds })
        }
        catch (err) {
            console.log(err.response)
        }
    }
    const startGame = () => {
        setIsGameStarted(true)
        startTimer()
    }
    const SlideInAnimation = {
        hidden: { x: '100vw' },
        visible: { x: 0, }
    }

    const incrementMoves = () => setMovesCounter(movesCounter + 1)

    useEffect(() => {
        if (arrayOfGuesses.length === 2) {
            if (arrayOfGuesses[0] === arrayOfGuesses[1]) {
                dispatch(addToSuccessGuesses(arrayOfGuesses[0]))
                dispatch(clearArrayOfGuesses())
            }
            else {
                setTimeout(() => {
                    dispatch(clearArrayOfGuesses())
                }, 1000);
            }
        }
    }, [arrayOfGuesses])

    useEffect(() => {
        if (isGameFinished) {
            insertScoreToLocalStorage(gridSize)
            storeScoreInDatabase()
        }
    }, [isGameFinished])

    useEffect(() => {
        if (successGuesses.length === gridSize * gridSize / 2) {
            pauseTimer()
            setIsGameFinished(true)
        }
    }, [successGuesses])

    return (
        <GameContainer variants={SlideInAnimation} initial='hidden' animate='visible' $justify='flex-start' >
            <Navigation />
            {arrayOfNumbers.length !== 0 ? (
                <S.GridContainer $gridSize={gridSize}>
                    {arrayOfNumbers.map((value, index) => (
                        <GridItem
                            key={index}
                            value={value}
                            gameTheme={gameTheme}
                            movesHandler={incrementMoves}
                            isGameStarted={isGameStarted}
                            startGame={startGame}
                            $themeContext={themeContext.theme}
                        >
                        </GridItem>

                    ))}
                </S.GridContainer>)
                :
                <Redirect to='/' />}
            <GameScore movesCounter={movesCounter} time={{ seconds, minutes }} $themeContext={themeContext.theme} />
            {isGameFinished && <GameSummary movesCounter={movesCounter} time={{ seconds, minutes }} />}
        </GameContainer>

    )
}
export default Game
