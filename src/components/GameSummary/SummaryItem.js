import * as S from './GameSummaryStyle'
import { useDoubleDigit } from '../../Hooks/useDoubleDigit'
export const SummaryItem = ({ title, value, $themeContext }) => {
    let { minutes, seconds } = value
    const doubleDigitSecond = useDoubleDigit(seconds)

    return (
        <S.ResultParent $themeContext={$themeContext}>
            <S.ResultTitle>{title}</S.ResultTitle>
            <S.Result $themeContext={$themeContext}>{typeof (value) === 'object' ? `${minutes}:${doubleDigitSecond}` : `${value} Moves`}</S.Result>
        </S.ResultParent>
    )
}

export default SummaryItem
