import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  color,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import DegenTokenLogo from "./logos/degenTokenLogo";


interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({children}:NavbarProps) => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={6}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="decentralized generation"
              display="flex"
              alignItems="center"
            >
              <DegenTokenLogo size={30} />
              <VisuallyHidden>decentralized generation</VisuallyHidden>
            </chakra.a>
            <Box display={{ base: "none", md: "inline-flex" }}>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                decentralized generation
              </chakra.h1>
            </Box>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                degen
              </chakra.h1>
            </Box>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
            </HStack>
            {children}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={10}
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
                <HStack>
                    <Text>
                        Dark/Light
                    </Text>
                    {/* <ColorModeToggle /> Will need to figure out how to assign children compoments as a prop in multiple places*/}
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default Navbar;
