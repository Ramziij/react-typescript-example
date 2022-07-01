import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';
import { useState } from 'react'
import { Popover } from '@reactour/popover';

    const MuiSpeedDial = () => {
    const [isOpen, setIsOpen] = useState(false)
  
  return (
        <SpeedDial 
        ariaLabel="Navigation speed dial"
        sx={{ position: 'absolute', bottom: 20, right: 16 }}
        icon={<HelpIcon />}
        onClick={() => setIsOpen((o)=>!o)}
        >
            {isOpen ?(
            <Popover position="center">
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Ab minima numquam vel dolore amet quos iure at! Aut, nisi eaque dignissimos 
            totam officiis soluta quod ullam nostrum excepturi, possimus ratione.
            </p>
            </Popover>
        ):null}

        
        </SpeedDial>
        
        
        
        
        
    )
}

export default MuiSpeedDial