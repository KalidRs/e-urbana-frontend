import { Box, Flex, Text, Link, Icon, Stack, Divider } from '@chakra-ui/react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <Box bg="green.700" color="white" py={8} px={4}>
      <Flex 
        direction={{ base: "column", md: "row" }}
        maxW="1200px" 
        mx="auto"
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        gap={8}
      >
        {/* Información de contacto */}
        <Box>
          <Text fontWeight="bold" mb={4} fontSize="lg">Contacto</Text>
          <Stack spacing={3}>
            <Flex align="center">
              <Icon as={MdEmail} mr={3} />
              <Link href="mailto:contacto@ecoluzurbana.com" color="green.100">
                contacto@ecoluzurbana.com
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={MdPhone} mr={3} />
              <Text>+123 456 7890</Text>
            </Flex>
            <Flex align="center">
              <Icon as={MdLocationOn} mr={3} />
              <Text>Ciudad, País</Text>
            </Flex>
          </Stack>
        </Box>

        {/* Derechos de autor */}
        <Box textAlign={{ base: "center", md: "right" }}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Ecoluz Urbana</Text>
          <Text fontSize="sm" color="green.100">
            © {new Date().getFullYear()} Todos los derechos reservados
          </Text>
          <Text fontSize="xs" mt={4} color="green.200">
            Contribuyendo a los ODS 7, 11 y 13
          </Text>
        </Box>
      </Flex>

      <Divider my={6} borderColor="green.600" />

      <Text textAlign="center" fontSize="sm" color="green.200">
        Innovación en iluminación urbana sostenible
      </Text>
    </Box>
  );
}