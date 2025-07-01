import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  useBreakpointValue
} from '@chakra-ui/react'

function Login() {
  const direction = useBreakpointValue({ base: 'column', md: 'row' })

  return (
    <Flex
      minH="100vh"
      w="100vw"
      justify="center"
      align="center"
      bgGradient="linear(to-br, #e8f5e9, #fffde7)"
      px="5vw"
      py="5vh"
    >
      <Flex
        direction={direction}
        gap={{ base: '4vh', md: '6vw' }}
        w="100%"
        maxW="60rem"
        align="center"
        justify="center"
      >
        {/* Imagen + nombre */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          flex="1"
        >
          <Image
            src="/public/logo.webp"
            alt="Logo E-Urbana"
            maxH="14rem"
            objectFit="contain"
            mb="1.5rem"
          />
          <Text
            fontSize={{ base: '1.8rem', md: '2.5rem' }}
            fontWeight="bold"
            color="#388e3c"
            fontFamily="'Segoe UI', 'Roboto', sans-serif"
            letterSpacing="-0.05em"
          >
            E-Urbana
          </Text>
        </Flex>

        {/* Tarjeta de login */}
        <Box
          bg="white"
          borderRadius="2rem"
          boxShadow="0 0.7rem 2.2rem 0 #43a04722"
          py="5vh"
          px="6vw"
          maxW="32rem"
          w="100%"
        >
          <VStack spacing="2vh" align="stretch">
            <Heading
              as="h2"
              fontSize="1.8rem"
              color="#43a047"
              textAlign="center"
              letterSpacing="0.02em"
            >
              Inicia sesión
            </Heading>

            <Input
              type="email"
              placeholder="Correo electrónico"
              bg="#f9fff9"
              color="#256029"
              fontSize="1rem"
              py="1.2rem"
              borderRadius="0.7rem"
            />

            <Input
              type="password"
              placeholder="Contraseña"
              bg="#f9fff9"
              color="#256029"
              fontSize="1rem"
              py="1.2rem"
              borderRadius="0.7rem"
            />

            <Button
              bg="#43a047"
              color="white"
              fontWeight="bold"
              fontSize="1.08rem"
              letterSpacing="0.09em"
              py="1.2rem"
              borderRadius="0.7rem"
              opacity={0.85}
              cursor="not-allowed"
              _hover={{ bg: '#388e3c' }}
              _active={{ bg: '#2e7d32' }}
            >
              Ingresar
            </Button>

            <Text
              fontSize="0.96rem"
              color="#bdbdbd"
              textAlign="center"
              mt="1vh"
            >
              © {new Date().getFullYear()} EcoLuz Urbana
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Login
