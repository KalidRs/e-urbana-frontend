import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue
} from '@chakra-ui/react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Datos mejorados para las gráficas
const monthlyData = [
  { name: 'Nov', consumo: 252, gasto: 180, horas: 280 },
  { name: 'Oct', consumo: 360, gasto: 250, horas: 320 },
  { name: 'Sep', consumo: 320, gasto: 220, horas: 300 },
  { name: 'Ago', consumo: 290, gasto: 200, horas: 290 }
];

const consumoPorColonia = [
  { name: 'Centro', value: 600 },
  { name: 'Norte', value: 450 },
  { name: 'Sur', value: 300 },
  { name: 'Oriente', value: 200 },
  { name: 'Poniente', value: 150 }
];

const COLORS = ['#2e7d32', '#43a047', '#66bb6a', '#81c784', '#a5d6a7'];

function Dashboard() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  // Calcular métricas resumen
  const currentMonth = monthlyData[0];
  const savings = ((monthlyData[1].gasto - currentMonth.gasto) / monthlyData[1].gasto * 100).toFixed(1);

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Navbar />
      
      <Box p={{ base: 4, md: 8 }} pt={20} maxW="1600px" mx="auto">
        {/* Encabezado y resumen */}
        <Flex direction={{ base: 'column', md: 'row' }} mb={8} gap={6}>
          <Box flex={1}>
            <Heading fontSize="2xl" color="green.700" mb={2}>
              Panel de Control Ecoluz Urbana
            </Heading>
            <Text color="gray.600">
              Monitoreo en tiempo real del sistema de iluminación inteligente
            </Text>
          </Box>
          
          {/* Estadísticas rápidas */}
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={4} flex={2}>
            <Stat bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
              <StatLabel>Consumo Actual</StatLabel>
              <StatNumber>{currentMonth.consumo} kWh</StatNumber>
              <StatHelpText>Noviembre 2023</StatHelpText>
            </Stat>
            
            <Stat bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
              <StatLabel>Ahorro Mensual</StatLabel>
              <StatNumber color={savings > 0 ? 'green.500' : 'red.500'}>
                {savings}%
              </StatNumber>
              <StatHelpText>vs mes anterior</StatHelpText>
            </Stat>
            
            <Stat bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
              <StatLabel>Horas Operación</StatLabel>
              <StatNumber>{currentMonth.horas}h</StatNumber>
              <StatHelpText>Este mes</StatHelpText>
            </Stat>
          </SimpleGrid>
        </Flex>

        {/* Gráficas principales */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8}>
          {/* Consumo Eléctrico */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Consumo Eléctrico (kWh)</Text>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="consumo" fill="#43a047" name="Consumo" />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Gasto Mensual */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Gasto Mensual ($)</Text>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="gasto" 
                  stroke="#388e3c" 
                  strokeWidth={2} 
                  name="Gasto"
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          {/* Consumo por Colonia */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Distribución por Colonia</Text>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie 
                  data={consumoPorColonia} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {consumoPorColonia.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box>

          {/* Horas de Alumbrado */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Horas de Operación</Text>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorHoras" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#66bb6a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#66bb6a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="horas" 
                  stroke="#1b5e20" 
                  fillOpacity={1} 
                  fill="url(#colorHoras)" 
                  name="Horas"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>

          {/* Eficiencia Energética */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Eficiencia Energética</Text>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="consumo" fill="#81c784" name="Consumo" />
                <Bar dataKey="horas" fill="#a5d6a7" name="Horas" />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          {/* Comparativo Mensual */}
          <Box bg={cardBg} p={4} borderRadius="lg" boxShadow={cardShadow}>
            <Text fontWeight="bold" mb={4}>Tendencia Anual</Text>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="consumo" 
                  stroke="#2e7d32" 
                  name="Consumo (kWh)"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="gasto" 
                  stroke="#66bb6a" 
                  name="Gasto ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </SimpleGrid>
      </Box>
      
      <Footer />
    </Box>
  );
}

export default Dashboard;