import * as S from './GameSummaryStyle'
import SummaryItem from './SummaryItem'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useContext } from 'react'

const GameSummary = ({ movesCounter, time }) => {

    const themeContext = useContext(ThemeContext)
    const animationBackground = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: .5,
            transition: {
                duration: 1
            }
        },
    }
    const animationSummaryContainer = {
        hidden: {
            height: 0,
            opacity: 0
        },
        visible: {
            height: 'auto',
            opacity: 1,
            transition: {
                delay: 1,
                duration: 2,
            }
        }
    }

    return (
        <>
            <S.Background variants={animationBackground} animate='visible' initial='hidden' />
            <S.SummaryContainer variants={animationSummaryContainer} animate='visible' initial='hidden'>
                <S.Title>You did it!</S.Title>
                <S.Description>Game over! Here's how you got on... </S.Description>
                <SummaryItem title='Time Elapsed' value={time} $themeContext={themeContext.theme} />
                <SummaryItem title='Moves Taken' value={movesCounter} $themeContext={themeContext.theme} />
                <S.SetupNewGameButton to='/' whileHover={{ scale: 1.1 }} $themeContext={themeContext.theme}>Setup New Game</S.SetupNewGameButton>
                <S.RankingButton to='leaderboard' whileHover={{ scale: 1.1 }} $themeContext={themeContext.theme}>Leaderboard</S.RankingButton>
            </S.SummaryContainer>
        </>
    )
}

export default GameSummary