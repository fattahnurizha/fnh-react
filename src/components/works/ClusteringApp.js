import {
  Box,
  Container,
  Divider,
  Image,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import data from '../../data'

const ClusteringApp = () => {
  const dataProjects = data

  return (
    <motion.div
      initial={{ opacity: 0, marginTop: -60 }}
      animate={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxW="container.md">
        <Box align="center" flexDirection="column">
          <Box align="start" flexDirection="column" maxW={560}>
            <Text fontSize="lg" my={8}>
            web coffee shop portfolio with ordering feature
            </Text>
            <List mb={12}>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  LINK :
                </Text>
                <Link href="https://fattahnurizha.github.io/kedai-kopi-fnh2/" color="red.200">
                  {' '}
                  https://fattahnurizha.github.io/kedai-kopi-fnh2/
                </Link>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  TITLE :
                </Text>
                <span> Cofee Shop </span>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  PLATFORM :
                </Text>
                <span> Web</span>
              </ListItem>
              <ListItem>
                <Text as="mark" bg="blue.500" color="white">
                  STACK :
                </Text>
                <span> Html, CSS, Tailwind, Javascript</span>
              </ListItem>
            </List>
          </Box>
          <Box maxW={480}>
            <Image borderRadius={10} src={dataProjects[0].image[0]}></Image>
            <Divider my={8} />
            <Image borderRadius={10} src={dataProjects[0].image[1]}></Image>
            <Divider my={8} />
            <Image borderRadius={10} src={dataProjects[0].image[2]}></Image>
          </Box>
        </Box>
      </Container>
    </motion.div>
  )
}

export default ClusteringApp
