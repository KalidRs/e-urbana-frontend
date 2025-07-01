import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  Fade,
  ScaleFade,
  SlideFade
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function HomePage() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box overflowX="hidden"> {/* Contenedor principal sin scroll horizontal */}
      <Navbar />
      
      {/* Contenido principal */}
      <Flex
        minH="100vh"
        width="100%"
        bg="gray.50"
        direction="column"
        align="center"
        justify="center"
        px={{ base: 4, md: 8 }}
        py={12}
        pt={{ base: 24, md: 32 }}
      >
        {/* Logo y título */}
        <ScaleFade in={true} initialScale={0.9}>
          <VStack spacing={6} mb={{ base: 8, md: 16 }} maxW="100%">
            <Image
              src="/logo.webp"
              alt="Ecoluz Urbana"
              w={{ base: "120px", md: "160px" }}
              h="auto"
              maxW="100%"
            />
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="semibold"
              color="green.700"
              textAlign="center"
              px={2}
            >
              Iluminación Inteligente para Ciudades Inteligentes
            </Heading>
          </VStack>
        </ScaleFade>

        {/* Contenido principal */}
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW="1200px"
          width="100%"
          justify="space-between"
          align="center"
          gap={{ base: 8, md: 12 }}
          px={{ base: 2, md: 4 }}
          wrap="wrap"
        >
          {/* Texto descriptivo */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            minW={{ base: "100%", md: "300px" }}
            maxW="100%"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.700"
              lineHeight="tall"
              mb={6}
            >
              Ecoluz Urbana transforma la gestión energética de luminarias públicas con soluciones que combinan eficiencia, sostenibilidad y reducción de costos.
            </Text>
            
            <SlideFade in={true} offsetY={20} delay={0.4}>
              <Button
                colorScheme="green"
                size="lg"
                w={{ base: "full", md: "auto" }}
              >
                Conoce más
              </Button>
            </SlideFade>
          </MotionBox>

          {/* Objetivos */}
          <MotionFlex
            direction="column"
            flex={1}
            gap={6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            minW={{ base: "100%", md: "300px" }}
            maxW="100%"
          >
            {[
              {
                title: "Eficiencia Energética",
                description: "Sistemas inteligentes que adaptan el consumo a las condiciones ambientales."
              },
              {
                title: "Gestión Remota",
                description: "Monitoreo y control de luminarias para mantenimiento predictivo."
              },
              {
                title: "Sostenibilidad",
                description: "Reducción de emisiones de CO₂ y mejora de la calidad de vida urbana."
              }
            ].map((item, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="md"
                borderLeft="4px solid"
                borderColor="green.400"
                width="100%"
              >
                <Heading as="h3" fontSize="lg" color="green.600" mb={2}>
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  {item.description}
                </Text>
              </Box>
            ))}
          </MotionFlex>
        </Flex>

        {/* Footer */}
        <Fade in={true} delay={0.8}>
          <Text
            mt={{ base: 12, md: 16 }}
            fontSize="sm"
            color="gray.500"
            textAlign="center"
            width="100%"
            px={4}
          >
            © {new Date().getFullYear()} Ecoluz Urbana - Contribuyendo a los ODS 7, 11 y 13
          </Text>
        </Fade>
      </Flex>
      
      <Footer />
    </Box>
  );
}

export default HomePage;