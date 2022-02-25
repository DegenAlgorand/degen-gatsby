import { useColorMode, Button, Switch } from '@chakra-ui/react';
import React from 'react';

const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Switch onChange={toggleColorMode} isChecked={colorMode === 'light' ? true : false} />
      </header>
    )
  }

export default ColorModeToggle;
