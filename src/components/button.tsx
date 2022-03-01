import React from 'react'
import { Button as ImportedButton} from '@chakra-ui/react';

interface ButtonProps {
  width: string,
  marginBottom: string,
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>,
  text: string
}

const Button = ({width, marginBottom, onClickHandler, text}: ButtonProps) => {

  return (
    <ImportedButton w={width} marginBottom={marginBottom} onClick={onClickHandler}>{text}</ImportedButton>
  )
}

export default Button;