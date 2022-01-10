import * as S from './TopResultsStyle'
import { useDoubleDigit } from '../../Hooks/useDoubleDigit'
import { MdCheckCircle as UserScoreIcon } from 'react-icons/md'
import useLocalStorage from '../../Hooks/useLocalStorage'
const Result = ({ value, rank, sortedGridSize }) => {
    const { minutes, seconds } = value
    const doubleDigitSeconds = useDoubleDigit(seconds)
    const [storaged4GridScore] = useLocalStorage('4GridScore')
    const [storaged6GridScore] = useLocalStorage('6GridScore')

    const storagedScore = sortedGridSize == 4 ? storaged4GridScore : storaged6GridScore
    const score = typeof (value) === 'object' ? `${minutes}:${doubleDigitSeconds}` : value

    return (
        <S.ResultContainer>
            <S.Rank>{`#${rank}`}</S.Rank>
            <p>{score}</p>
            {storagedScore && storagedScore.map((LocalUserScore, index) => {
                if ((LocalUserScore.movesCounter === value) ||
                    (LocalUserScore.minutes === value.minutes && LocalUserScore.seconds === value.seconds)) {
                    return <UserScoreIcon key={index} />
                }
            })}

        </S.ResultContainer>
    )
}

export default Result
