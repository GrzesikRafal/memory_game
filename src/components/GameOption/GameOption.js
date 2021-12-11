import * as S from './GameOptionStyle'
import PropTypes from 'prop-types'
import { setGameGridSize, setGameTheme } from '../../Redux/settingsSlice'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useDispatch } from 'react-redux'
import { useContext } from 'react'

const GameOption = ({ option, name, checked, value }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch()

    const updateGameSettings = () => {
        if (name === 'theme') dispatch(setGameTheme(value))
        if (name === 'size') dispatch(setGameGridSize(value))
    }

    return (
        <label style={{ display: 'flex', justifyContent: 'space-around' }}>
            <S.Input
                role='radiogroup'
                defaultChecked={checked}
                type="radio"
                value={value}
                onClick={updateGameSettings}
                name={name}
                $themeContext={themeContext.theme}
            >
            </S.Input>
            <span>{option}</span>
        </label>

    )
}

GameOption.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    option: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
}
export default GameOption