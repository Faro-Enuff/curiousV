import React from 'react';
import { Box } from '@mui/material';
import Enso from '../../Images/Enso.png';
import EnsoTransp from '../../Images/EnsoTransparent.png';
import { TimelineCreation } from '../../Interfaces/interfaces';

export const fillArray = (creations: any): TimelineCreation[] => {
  const newArray = creations.map((creation: any, index: number) => {
    if (index % 2 === 0) {
      return {
        inverted: true,
        badgeColor: 'info',
        Avatar: EnsoTransp,
        title: creation?.summon.assignmentTitle,
        titleColor: 'rose',
        body: (
          <div>
            <Box sx={{ ml: 2 }}>
              Duration:{' '}
              {creation?.approxTimeInvestment + ' ' + creation?.timeUnit}
            </Box>
            <Box sx={{ ml: 2, mb: 1 }}>Curiosity: {creation?.funFactor}</Box>
          </div>
        ),
      };
    } else {
      return {
        inverted: false,
        badgeColor: 'info',
        Avatar: EnsoTransp,
        title: creation.summon.assignmentTitle,
        titleColor: 'success',
        body: (
          <div>
            <Box sx={{ ml: 2 }}>
              Duration:{' '}
              {creation?.approxTimeInvestment + ' ' + creation?.timeUnit}
            </Box>
            <Box sx={{ ml: 2, mb: 1 }}>Curiosity: {creation?.funFactor}</Box>
          </div>
        ),
      };
    }
  });
  return newArray;
};
