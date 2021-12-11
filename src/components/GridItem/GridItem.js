import * as S from './GridItemStyle'
import { addElementToGuesses } from '../../Redux/gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useIcons } from '../../Hooks/useIcons'
export const GridItem = ({ value, gameTheme, $themeContext, movesHandler, isGameStarted, startGame }) => {

    const { arrayOfGuesses, successGuesses } = useSelector((state) => state.userGuesses)
    const [IsDisabled, setIsDisabled] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const listOfIcons = useIcons()
    const dispatch = useDispatch()

    const handleMovesCounter = () => movesHandler()
    const makeAGuess = () => {
        if (!isGameStarted) startGame()
        if (!isClicked) { //preventing from clicking couple times same button
            dispatch(addElementToGuesses(value))
            setIsClicked(true)
        }
    }

    useEffect(() => {
        if (arrayOfGuesses.length === 2) {    //User made 2 guesses increment moves counter and check them before letting him continue
            setIsDisabled(true)
            handleMovesCounter()
            if (arrayOfGuesses[0] === arrayOfGuesses[1]) setIsDisabled(false)   //guesses are right keep on guessing
            else {   // guesses are wrong, wait a bit prevent from guessing and hide incorrenct guesses
                setTimeout(() => {
                    setIsClicked(false)
                    setTimeout(() => {
                        setIsDisabled(false)
                    }, 50);
                }, 1000);
            }
        }
    }, [arrayOfGuesses])

    useEffect(() => {
        return () => {   //Avoiding errors when user make a wrong guess and instantly switch to other page
            setIsClicked(false)
            setIsDisabled(false)
        }
    }, [])

    const chooseButtonToDisplay = () => {
        let buttonToDisplay = S.ButtonHidden
        if (arrayOfGuesses.includes(value) && isClicked) buttonToDisplay = S.ButtonPending
        if (successGuesses.includes(value)) buttonToDisplay = S.ButtonSuccess

        return React.createElement(
            buttonToDisplay,
            { disabled: IsDisabled, $themeContext: $themeContext, onClick: makeAGuess, },
            gameTheme === 'Numbers' ? value : listOfIcons[value]
        );
    }

    const ButtonToDisplay = chooseButtonToDisplay()

    return (
        <>
            {ButtonToDisplay}
        </>
    )
}

export default GridItem
