import { Box, Flex, HStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  return (
    <Box bg="white" px="4vw" py="1.5vh" boxShadow="sm">
      <Flex h="4rem" alignItems="center" justifyContent="space-between">
        <Text fontSize="1.5rem" fontWeight="bold" color="green.700">
          E-Urbana
        </Text>
        <HStack spacing="2rem">
          <ChakraLink as={RouterLink} to="/inicio" fontWeight="medium">
            Inicio
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/dashboard" fontWeight="medium">
            Estadísticas
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/contacto" fontWeight="medium">
            Contacto
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
