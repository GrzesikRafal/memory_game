import * as S from './GameContainerStyle'
import PropTypes from 'prop-types'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'
import { useContext } from 'react'

export const GameContainer = ({ $justify, $SVG, children, variants, initial, animate }) => {
    const themeContext = useContext(ThemeContext)
    const fillSVG = themeContext.theme.success.slice(1)//removing # from color to use it in StyledComponent

    return (
        <S.MainContainer
            $SVG={$SVG}
            variants={variants}
            initial={initial}
            animate={animate}
            $justify={$justify}
            $themeContext={themeContext.theme}
            fillSVG={fillSVG} >
            {children}
        </S.MainContainer>

    )
}
GameContainer.propTypes = {
    $justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center']),
    $bg: PropTypes.string
}
export default GameContainer
