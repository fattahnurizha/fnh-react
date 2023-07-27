import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer } from '@chakra-ui/layout'
import { Text, Skeleton, Icon, Container } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'

const Identity = () => {
  return (
    <Box boxSize={200} w="sm" align="start">
      <Heading
        fontFamily="Inter"
        color={useColorModeValue('gray.600', 'whiteAplha.900')}
      >
        Hi, I am
      </Heading>
      <Text
        fontSize={42}
        fontFamily="Inter"
        fontWeight="bold"
        color={useColorModeValue('gray.600', 'whiteAplha.900')}
      >
        Fattah Nurizha Herlambang
      </Text>
      <Skeleton w={300} mb={2}>
        skeleton
      </Skeleton>
      <Text mb={2} fontFamily="Inter" color="blue" fontWeight="bold">
      Frontend Engineer (Digital Artisan)
    </Text>
      
    </Box>
  )
}

const ProfileAvatar = () => {
  return (
    <Box>
      <Image
        src="/profile-picture.png"
        boxSize={[240, 200]}
        mt={[8, 0]}
        borderRadius="full"
      />
    </Box>
  )
}

const SocialMedia = () => {
  return (
    <Box
      h={[5, '150px']}
      w={['100%', 5]}
      display="flex"
      flexDirection={['row', 'column']}
      justifyContent="space-between"
      mr={[0, 6]}
      mt={[10, 0]}
      px={[4, 0]}
    >
      <Link
        href="https://www.linkedin.com/in/fattah-nurizha-herlambang/"
        target="_blank"
      >
        <Icon mt={2} as={BsLinkedin}></Icon>
      </Link>
      <Link href="https://www.instagram.com/fattah_nurizha/" target="_blank">
        <Icon mt={2} as={BsInstagram}></Icon>
      </Link>
      <Link href="https://www.facebook.com/nurizha29" target="_blank">
        <Icon mt={2} as={BsFacebook}></Icon>
      </Link>
      <Link href="https://github.com/fattahnurizha" target="_blank">
        <Icon mt={2} as={BsGithub}></Icon>
      </Link>
    </Box>
  )
}

const Profile = () => {
  return (
    <Container maxW="container.md">
      <Box display={{ sm: 'flex' }} align="center">
        <Identity />
        <Spacer />
        <SocialMedia />
        <ProfileAvatar />
      </Box>
    </Container>
  )
}

export default Profile
