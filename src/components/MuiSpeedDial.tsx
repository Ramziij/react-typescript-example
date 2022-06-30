import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';
import { useState } from 'react'
import Popover from '@mui/material/Popover';

    const MuiSpeedDial = () => {
    const [open, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    
  
  return (
        <SpeedDial 
        ariaLabel="Navigation speed dial"
        sx={{ position: 'absolute', bottom: 20, right: 16 }}
        icon={<HelpIcon />}
        onClose={handleClose}
        onOpen={handleClick}
        
        >
        <Popover
        open={open}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 300, left: 700 }}
     
      >
        <h1>Hello World</h1>
        </Popover>
        </SpeedDial>
        
        
        
    )
}

export default MuiSpeedDial