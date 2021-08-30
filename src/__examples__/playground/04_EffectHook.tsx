import React from 'react'
import axios from 'axios'

import { Center, ListItem, OrderedList } from '@chakra-ui/react'

interface Comment {
  postId: number
  body: string
  email: string
  id: number
  name: string
}

const EffectHook = () => {
  const [comments, setComments] = React.useState<Array<Comment>>([])

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => {
        setComments(response.data)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }, [])

  return (
    <Center p={6}>
      {comments.slice(0, 3).map(comment => (
        <OrderedList key={comment.id}>
          <ListItem>{comment.email}</ListItem>
          <ListItem>{comment.name}</ListItem>
          <ListItem>{comment.body}</ListItem>
        </OrderedList>
      ))}
    </Center>
  )
}

export default EffectHook
