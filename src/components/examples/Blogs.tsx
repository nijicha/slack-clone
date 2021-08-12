import * as React from 'react'
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

const BlogTags: React.FC<IBlogTags> = props => {
  return (
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    <HStack spacing={2} marginTop={props.marginTop}>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      {props.tags.map(tag => {
        return (
          <Tag size="md" variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  const [profileImg, setProfileImg] = React.useState('')

  // TODO: find the way to random img
  React.useEffect(() => {
    setProfileImg('https://100k-faces.glitch.me/random-image')
  }, [])

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src={profileImg}
        alt={
          /* eslint-disable-next-line react/destructuring-assignment,react/prop-types */
          `Avatar of ${props.name}`
        }
      />
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const TryFontFacesWithChakraConfig = () => {
  return (
    <Container maxW="7xl" p={12}>
      <Heading as="h1">Stories by Chakra Templates</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: '100%', sm: '85%' }} zIndex="2" marginLeft={{ base: '0', sm: '5%' }} marginTop="5%">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                alt="some good alt text"
                objectFit="fill"
                overflow="hidden"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['House', 'Lifestyle']} />
          <Heading marginTop="1">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Blog article title
            </Link>
          </Heading>
          <Text as="p" marginTop="2" color={useColorModeValue('gray.700', 'gray.200')} fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>

      <Divider my={6} />

      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: '100%', sm: '85%' }} zIndex="2" marginLeft={{ base: '0', sm: '5%' }} marginTop="5%">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                alt="some good alt text"
                objectFit="fill"
                overflow="hidden"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(green.600 1px, transparent 1px)',
                'radial(green.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              ไทย: สปายดิกชันนารีแอลมอนด์
            </Link>
          </Heading>
          <Text as="p" marginTop="2" color={useColorModeValue('gray.700', 'gray.200')} fontSize="lg">
            เพลซเรซิ่นพาร์ตเนอร์มาร์จิน ซีนีเพล็กซ์ซิมโฟนี่ซาบะคอนแท็ค เทรนด์โซลาร์เซ็กซี่กรอบรูปวิน
            เยลลี่ปัจฉิมนิเทศแต๋ว กัมมันตะชัตเตอร์ยากูซ่า พรีเมียมวอลนัทบอดี้ มือถือซากุระเวสต์ วืด อีแต๋นแคร์คาร์โก้
            นาฏยศาลา เสือโคร่งปิกอัพริคเตอร์ แอคทีฟ ซี้บร็อกโคลีปูอัดเปียโนแกสโซฮอล์ เวิร์กช็อปจูนเรซิ่นเกรด
            สหัสวรรษไรเฟิลยูวีฮัลโลวีน ยาวีโซนทรูแพนด้า ปิโตรเคมี ฮิปฮอปออทิสติกสัมนาละติน อพาร์ตเมนท์ วาทกรรมเพรียวบาง
            แคนูซิลเวอร์ คาราโอเกะแทคติคเอเซีย กษัตริยาธิราชซัพพลายธุหร่ำเบนโลคีตกวี สะเด่าบาร์บีคิวคอร์ส โค้กรีทัช แฟรี
            โรแมนติกเสกสรรค์ตุ๋ยคันยิ ระโงก มาร์เก็ตแตงกวาไพลิน เวิร์กลาตินเจลไฟลต์ ไลท์ลาตินพะเรอโปรเจคท์หมั่นโถว
          </Text>
          <BlogAuthor name="Aoki Maito" date={new Date()} />
        </Box>
      </Box>
    </Container>
  )
}

const Blogs = () => {
  return <TryFontFacesWithChakraConfig />
}

export default Blogs
