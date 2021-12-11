import * as S from './LeadboardStyle'
import GameContainer from "../../components/GameContainer/GameContainer"
import TopResults from '../../components/TopResults/TopResults'
import SortOption from '../../components/SortOption/SortOption'
import { fetchMovesScore, fetchTimeScore } from '../../Redux/leadboardDataSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"



const Leaderboard = () => {
    const dispatch = useDispatch()
    const lastPlayedGridSize = useSelector(state => state.gameSettings.gridSize)
    const [sortedGridSize, setSortedGridSize] = useState(lastPlayedGridSize)
    const [sortedScore, setSortedScore] = useState('Time')

    useEffect(() => {
        dispatch(fetchMovesScore(4))
        dispatch(fetchMovesScore(6))
        dispatch(fetchTimeScore(4))
        dispatch(fetchTimeScore(6))
    }, [])

    return (
        <GameContainer $SVG $justify='flex-start'>
            <S.LeadboardContainer>
                <S.SortOptionsParent>
                    <SortOption
                        value={sortedGridSize}
                        setValue={setSortedGridSize}
                        label='Grid Size'
                        option1={4}
                        option2={6} />
                    <SortOption
                        value={sortedScore}
                        setValue={setSortedScore}
                        label='Score'
                        option1='Time'
                        option2='Moves' />
                </S.SortOptionsParent>
                <S.ScoreLeadboardTitle>{sortedScore === 'Time' ? 'Fastest Guesees' : 'Most Accurate Guesses'}</S.ScoreLeadboardTitle>
                <TopResults sortedGridSize={sortedGridSize} sortedScore={sortedScore} />
            </S.LeadboardContainer>
        </GameContainer>
    )
}

export default Leaderboard
