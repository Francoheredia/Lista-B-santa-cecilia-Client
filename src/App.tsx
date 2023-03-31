import { Box, Center, Heading,VStack } from '@chakra-ui/react';
import { Players } from './components'
import { DarkModeSwitch } from './components/DarkModeSwitch/index';
function App() {

  return (
    <>
      <Box h='100vh'>
        <DarkModeSwitch/>
          <Center h='100%'>
            <VStack spacing={10}>
              <Heading>🏡 Lista B Santa cecilia ⚽</Heading>
              <Box shadow='md'>
              <Players/>
              </Box>
            </VStack>
          </Center>
      </Box>
    </>
  )
}

export default App
