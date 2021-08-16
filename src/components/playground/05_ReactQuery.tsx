import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Center, Heading, ListItem, OrderedList, Spinner } from '@chakra-ui/react'

export default function ReactQuery() {
  const { data, dataUpdatedAt, error, isLoading, isError, isFetching } = useQuery<Array<Comment>, Error>(
    'GET_COMMENTS',
    fetchComments,
  )

  if (isLoading) return <Loader />

  if (isError && error) return <Heading>Error: {error.message}</Heading>

  return (
    <Center p={6}>
      <Heading>Data updated: {dataUpdatedAt}</Heading>
      {data &&
        data.slice(0, 3).map(comment => (
          <OrderedList key={comment.id}>
            <ListItem>{comment.email}</ListItem>
            <ListItem>{comment.name}</ListItem>
            <ListItem>{comment.body}</ListItem>
          </OrderedList>
        ))}

      {isFetching ? 'Updating...' : ''}

      <ReactQueryDevtools initialIsOpen />
    </Center>
  )
}

interface Comment {
  postId: number
  body: string
  email: string
  id: number
  name: string
}

const fetchComments = async () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.data)
    .catch(err => {
      throw new Error(`Oh no!: ${err.message}`)
    })
}

const Loader = () => {
  return (
    <Center p={6}>
      <Spinner />
    </Center>
  )
}
