import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import React from 'react';

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <IconButton aria-label='Toggle light dark mode' onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}/>
      </header>
    )
  }

export default ColorModeToggle;
