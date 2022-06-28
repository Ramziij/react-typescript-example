
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';


export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: -300, right: 16 }}
        icon={<HelpIcon />}
      >
      </SpeedDial>
    </Box>
  );
}