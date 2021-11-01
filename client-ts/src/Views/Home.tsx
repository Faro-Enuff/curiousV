import React, { FC } from 'react';

// MUI Core Imports
import { Container } from '@mui/material';
import { Box } from '@mui/system';

interface Props {}

const Home: FC = (props: Props) => {
  return (
    <Container component="main" maxWidth="xs">
      <div className="home">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            mt: '5%',
            mb: '10%',
          }}
        ></Box>
      </div>
    </Container>
  );
};

export default Home;
