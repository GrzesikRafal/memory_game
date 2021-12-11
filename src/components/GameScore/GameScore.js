import * as S from './GameScoreStyle'
import GameScoreItem from './GameScoreItem/GameScoreItem'

const GameScore = ({ movesCounter, time, $themeContext }) => {
    return (
        <S.ScoresParent>
            <GameScoreItem title='Time' value={time} $themeContext={$themeContext} />
            <GameScoreItem title='Moves' value={movesCounter} $themeContext={$themeContext} />
        </S.ScoresParent>
    )
}

export default GameScore
