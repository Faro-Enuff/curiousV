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
        badgeColor: 'rose',
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
        badgeColor: 'success',
        Avatar: Enso,
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

// const stories = [
//   {
//     // First story
//     inverted: true,
//     badgeColor: 'danger',
//     Avatar: Enso,
//     title: 'Hey',
//   },
//   {
//     // First story
//     inverted: true,
//     badgeColor: 'rose',
//     Avatar: Enso,
//   },
//   {
//     // First story
//     inverted: true,
//     badgeColor: 'danger',
//     Avatar: Enso,
//   },
//   {
//     // Second story
//     badgeColor: 'success',
//     Avatar: Enso,
//     title: 'Another One',
//     titleColor: 'success',
//     body: <p></p>,
//   },

// //   // {
// //   //   // Third story
// //   //   inverted: true,
// //   //   badgeColor: 'info',
// //   //   Avatar: Enso,
// //   //   title: 'Another Title',
// //   //   titleColor: 'info',
// //   //   body: (
// //   //     <div>
// //   //       <p>
// //   //         Called I Miss the Old Kanye That’s all it was Kanye And I love you
// //   //       </p>
// //   //       <p>
// //   //         What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
// //   //       </p>
// //   //     </div>
// //   //   ),
// //   //   // footer: (
// //   //   //   <CustomDropdown
// //   //   //     buttonIcon={Build}
// //   //   //     buttonProps={{
// //   //   //       round: true,
// //   //   //       style: { marginBottom: '0' },
// //   //   //       color: 'info',
// //   //   //     }}
// //   //   //     dropdownList={[
// //   //   //       'Action',
// //   //   //       'Another action',
// //   //   //       'Something else here',
// //   //   //       { divider: true },
// //   //   //       'Separated link',
// //   //   //     ]}
// //   //   //   />
// //   //   // ),
// //   // },
// //   // {
// //   //   // Fourth story
// //   //   badgeColor: 'warning',
// //   //   Avatar: Enso,
// //   //   title: 'Another One',
// //   //   titleColor: 'warning',
// //   //   body: <p></p>,
// //   // },
// // ];
