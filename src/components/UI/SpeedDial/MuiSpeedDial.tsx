import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';
import { useTour } from '@reactour/tour'


const MuiSpeedDial = () => {
const { setIsOpen } = useTour()

    return (
        
        <SpeedDial
        ariaLabel="Navigation speed dial"
        sx={{ position: 'absolute', bottom: -35, right:-75}}
        icon={<HelpIcon />}
        onClick={() => setIsOpen(true)}
        >
        </SpeedDial>    
    )
}

export default MuiSpeedDial