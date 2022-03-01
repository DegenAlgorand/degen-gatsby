import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react';

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Tooltip label='Toggle Dark Mode'>
        <IconButton aria-label='Toggle light dark mode' onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}/>
      </Tooltip>
    )
  }

export default ColorModeToggle;
