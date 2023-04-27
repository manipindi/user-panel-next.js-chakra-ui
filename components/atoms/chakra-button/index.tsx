import { Button, } from '@chakra-ui/react'
import React, { ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react'
import styled from 'styled-components'


type ChakraButtonProps = {
    children ?: ReactNode
}

type ChakraProps = ChakraButtonProps & ComponentPropsWithoutRef<typeof Button>


export default function ChakraButton({children, ...rest}:ChakraProps) {
  return (
    <Button {...rest}>
        {children}
    </Button>
  )
}
