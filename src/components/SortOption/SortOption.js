import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { useContext } from 'react'

const SortOption = ({ label, option1, option2, setValue, value }) => {
    const themeContext = useContext(ThemeContext)
    const radioStyle = { color: `${themeContext.theme.success}` }
    const labelStyle = { fontSize: '1.5rem', color: 'black', fontFamily: 'Gruppo', fontWeight: 'bold' }

    const handleChange = e => {
        setValue(e.target.value)
    }
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend" style={labelStyle}>{label}</FormLabel>
            <RadioGroup
                row
                aria-label={label}
                name={`controlled-radio-buttons-group-${label}`}
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    value={option1}
                    control={<Radio style={radioStyle} />}
                    label={label === 'Grid Size' ? `${option1}x${option1}` : option1} />
                <FormControlLabel
                    value={option2}
                    control={<Radio style={radioStyle} />}
                    label={label === 'Grid Size' ? `${option2}x${option2}` : option2} />
            </RadioGroup>
        </FormControl>
    )
}

export default SortOption
