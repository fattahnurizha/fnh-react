import { Box, Heading, Text, Divider, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Study = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter">
        <Box display="grid" direction="row" maxW="md" align="center" mt={8}>
          <Heading as="u" size="md">
            Study
          </Heading>
          <Box display="flex" direction="column" mt={4} align="left">
            <Text>Now</Text>
            <Center h="25px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>University Bina Sarana Informatics</Text>
          </Box>
          <Box display="flex" direction="column" mt={4} align="left">
            <Text>2019</Text>
            <Center h="50px">
              <Divider orientation="vertical" mx={6} />
            </Center>
            <Text>
            State Vocational School 2 Yogyakarta
            </Text>
          </Box>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Study
