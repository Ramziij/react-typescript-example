import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import HelpIcon from '@mui/icons-material/Help';
import { Popover } from '@reactour/popover';
import { useState} from 'react'
import ReactPlaceholder from 'react-placeholder'
import { TourProvider } from '@reactour/tour'
import  doSteps  from ''


    const MuiSpeedDial = () => {
    const [isOpen, setIsOpen] = useState(false)
    const demoId = 'close-click'
    const steps = doSteps(demoId)
   

   
        
  return (

    
        <SpeedDial 
        ariaLabel="Navigation speed dial"
        sx={{ position: 'absolute', bottom: 20, right: 16 }}
        icon={<HelpIcon />}
        onClick={() => setIsOpen((o)=>!o)}
        >
            <TourProvider
                steps={steps}
                onClickClose={({ setCurrentStep, currentStep, setIsOpen }) => {
                if (currentStep === steps.length - 1) {
                setIsOpen(false)
                }
                setCurrentStep(s => (s === steps.length - 1 ? 0 : s + 1))
                }}
>
                 <ReactPlaceholder demoId={demoId} />
            </TourProvider>
           

        
        </SpeedDial>


        
        
       
        
        
    )
}

export default MuiSpeedDial