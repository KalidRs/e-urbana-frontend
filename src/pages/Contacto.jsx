import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Avatar,
  Button,
  Input,
  Textarea,
  Divider,
  Link,
  useBreakpointValue,
  Icon
} from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function ContactPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const team = [
    { name: "Dev 1", role: "Frontend" },
    { name: "Dev 2", role: "Backend" },
    { name: "Dev 3", role: "Design" },
    { name: "Dev 4", role: "DevOps" }
  ];

  return (
    <Box>
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal con padding para el navbar */}
      <Box maxW="1200px" mx="auto" p={6} pt={20}>
        {/* Sección Intro */}
        <VStack spacing={6} mb={12} textAlign="center">
          <Heading color="green.700">Iluminamos el futuro</Heading>
          <Text color="gray.600">
            Innovación y sostenibilidad en sistemas de iluminación pública
          </Text>
        </VStack>

        {/* Misión/Visión */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" color="green.600" mb={3}>Misión</Heading>
            <Text color="gray.600">
              Transformar sistemas de iluminación para hacerlos más eficientes y ecológicos
            </Text>
          </Box>
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" color="green.600" mb={3}>Visión</Heading>
            <Text color="gray.600">
              Liderar en innovación con soluciones inteligentes de iluminación urbana
            </Text>
          </Box>
        </SimpleGrid>

        {/* Equipo */}
        <Box mb={12}>
          <Heading size="lg" color="green.700" mb={6} textAlign="center">
            Nuestro Equipo
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
            {team.map((member, i) => (
              <VStack key={i} bg="white" p={4} borderRadius="md" boxShadow="sm">
                <Avatar name={member.name} size="md" />
                <Text fontWeight="500">{member.name}</Text>
                <Text fontSize="sm" color="gray.500">{member.role}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Box>

        <Divider my={8} />
      </Box>
      {/* Footer */}
      <Footer />
    </Box>
  );
}