import * as S from "../GameScoreStyle";
import { useDoubleDigit } from "../../../Hooks/useDoubleDigit";

const GameScoreItem = ({ title, value, $themeContext }) => {
    const { minutes, seconds } = value
    const doubleDigitSecond = useDoubleDigit(seconds)

    return (
        <S.ScoreContainer $themeContext={$themeContext}>
            <p>{title}</p>
            <S.Value $themeContext={$themeContext}>
                {title === "Time" ? `${minutes}:${doubleDigitSecond}` : value}
            </S.Value>
        </S.ScoreContainer>
    );
};
export default GameScoreItem;
