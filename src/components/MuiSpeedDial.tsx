import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';

export const MuiSpeedDial = () => {
    return (
        <SpeedDial 
        ariaLabel="Navigation speed dial"
        sx={{ position: 'absolute', bottom: 20, right: 16 }}
        icon={<HelpIcon />}
        >     
        </SpeedDial>
    )
}