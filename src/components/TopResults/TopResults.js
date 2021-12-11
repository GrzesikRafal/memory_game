import * as S from './TopResultsStyle'
import Result from './Result'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { MdCheckCircle as YouserScoreIcon } from 'react-icons/md'

const TopResults = ({ sortedGridSize, sortedScore }) => {
    const { grid4Moves, grid6Moves, grid4Time, grid6Time } = useSelector(state => state.leadboardData)
    const themeContext = useContext(ThemeContext)
    
    const scoreFilters = `grid${sortedGridSize}${sortedScore}`
    let results

    switch (scoreFilters) {
        case 'grid4Time': results = grid4Time
            break;
        case 'grid6Time': results = grid6Time
            break;
        case 'grid4Moves': results = grid4Moves
            break;
        case 'grid6Moves': results = grid6Moves
            break;
    }

    results = results.slice(0, 10) // display only 10 best results

    return (
        <S.TopResultsContainer $themeContext={themeContext.theme}>
            <S.ResultContainer>
                <p>Rank</p>
                <p>Score</p>
            </S.ResultContainer>
            {
                results.map((value, index) =>
                    <Result key={index} value={value} rank={index + 1} sortedGridSize={sortedGridSize} />)
            }
            <S.ResultsLegend>
                <YouserScoreIcon style={{ color: 'green' }} />
                <p>- Your score</p>
            </S.ResultsLegend>
        </S.TopResultsContainer>
    )
}

export default TopResults
