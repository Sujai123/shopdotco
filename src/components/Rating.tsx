import { Star } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'


const MAX_RATING = 5;

const Rating = ({
  value
}) => {
  return (
    <Box>
      <Stack direction={'row'}>
        {new Array(value).fill(null).map(() => (
          <Star color='warning' />
        ))}
        {new Array(MAX_RATING - value).fill(null).map(() => (
          <Star color='disabled' />
        ))}
        <Box>
          <Typography>{value}/{MAX_RATING}</Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default Rating