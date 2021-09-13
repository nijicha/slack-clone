import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Flex, Spinner, Text } from '@chakra-ui/react'
import * as React from 'react'

const Card = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      {/* TODO: create @media query for responsive here */}
      <Flex height={250} alignItems="center" justifyContent="center">
        {isLoading ? (
          <Spinner />
        ) : (
          <img style={{ display: 'block', maxWidth: '100%' }} src={property.imageUrl} alt={property.imageAlt} />
        )}
      </Flex>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          <Text>{property.title}</Text>
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < property.rating ? 'teal.500' : 'gray.300'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
