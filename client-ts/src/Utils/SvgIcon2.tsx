import * as React from 'react';
import { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  children?: SvgIconProps;
}

const EnsoIconFilled: FC<Props> = ({ children }): JSX.Element => {
  return (
    <SvgIcon
      {...children}
      fontSize="large"
      color="#e085c2"
      opacity="1"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M2158 4863 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
        <path d="M2093 4853 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
        <path d="M1988 4833 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
        <path
          d="M1925 4820 c-13 -5 -14 -9 -5 -9 8 0 24 4 35 9 13 5 14 9 5 9 -8 0
-24 -4 -35 -9z"
        />
        <path
          d="M1932 4800 c-18 -4 -36 -10 -39 -14 -11 -10 31 -5 67 9 38 15 24 17
-28 5z"
        />
        <path
          d="M1763 4770 c-35 -14 -27 -20 10 -8 17 6 34 13 36 14 8 7 -24 3 -46
-6z"
        />
        <path
          d="M1480 4745 c-14 -8 -20 -14 -14 -15 5 0 19 7 30 15 24 18 16 19 -16
0z"
        />
        <path
          d="M1553 4735 c0 -7 6 -11 14 -8 7 3 13 6 13 8 0 2 -6 5 -13 8 -8 3 -14
-1 -14 -8z"
        />
        <path d="M1768 4743 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
        <path
          d="M1905 4743 c-11 -3 -24 -10 -30 -15 -7 -7 -2 -8 15 -3 52 15 64 30
15 18z"
        />
        <path
          d="M1570 4715 c-14 -8 -20 -14 -15 -14 6 0 21 6 35 14 14 8 21 14 15 14
-5 0 -21 -6 -35 -14z"
        />
        <path
          d="M1560 4686 c-132 -59 -223 -109 -222 -121 0 -5 -9 -21 -21 -34 -20
-20 -16 -20 28 7 28 16 79 47 115 67 36 20 57 34 48 31 -46 -14 -9 9 75 49
118 56 101 57 -23 1z m-100 -71 c0 -2 -22 -16 -50 -30 -27 -14 -50 -22 -50
-18 0 5 21 18 48 30 52 25 52 25 52 18z"
        />
        <path
          d="M1430 4700 c-19 -11 -30 -19 -25 -19 6 0 26 8 45 19 19 11 31 19 25
19 -5 0 -26 -8 -45 -19z"
        />
        <path d="M1350 4670 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
        <path d="M1053 4604 l-28 -26 33 22 c29 20 39 30 28 30 -3 0 -18 -12 -33 -26z" />
        <path
          d="M1583 4618 c-13 -6 -23 -15 -23 -20 0 -5 14 -2 30 7 45 23 38 35 -7
13z"
        />
        <path
          d="M1297 4592 c-34 -35 -60 -57 -52 -43 5 10 4 12 -4 7 -6 -4 -9 -11 -6
-16 7 -11 -30 -32 -39 -22 -4 3 -4 -1 -1 -9 4 -10 -2 -19 -17 -26 -13 -6 -51
-34 -86 -62 -63 -52 -79 -61 -66 -38 4 6 -2 4 -14 -6 -17 -15 -20 -16 -18 -3
1 8 10 23 19 34 9 10 17 24 17 30 0 7 15 18 33 26 17 8 41 21 52 30 19 15 17
16 -20 1 -22 -9 -49 -24 -60 -34 -34 -31 -52 -37 -30 -10 l20 24 -21 -18 c-12
-10 -31 -20 -43 -22 -24 -5 -83 -49 -121 -91 l-25 -28 30 21 c17 12 43 35 59
52 33 34 60 43 30 10 -10 -12 -17 -24 -14 -27 3 -4 -13 -17 -35 -29 -22 -12
-53 -39 -69 -60 -30 -40 -109 -108 -126 -108 -5 0 -14 -5 -21 -12 -17 -17 14
-11 35 6 28 23 17 2 -21 -45 -21 -24 -43 -44 -50 -44 -19 0 -16 10 10 38 12
14 16 22 10 18 -7 -4 -34 -35 -60 -69 -26 -34 -57 -72 -70 -84 -13 -12 -23
-30 -23 -40 0 -15 4 -14 21 7 11 14 33 46 49 71 17 25 36 46 44 46 18 0 15 -5
-50 -87 -64 -81 -104 -139 -104 -154 0 -6 12 7 26 27 14 21 28 37 30 35 7 -7
-16 -77 -28 -84 -7 -5 -8 -2 -4 7 4 8 0 5 -8 -6 -9 -11 -15 -24 -12 -31 6 -16
-108 -219 -122 -217 -6 2 -16 -6 -22 -17 -6 -12 -7 -20 -1 -20 5 0 11 8 13 18
3 15 4 15 10 1 4 -10 -6 -43 -22 -76 -15 -33 -35 -86 -45 -119 -9 -32 -27 -79
-40 -104 -27 -52 -47 -111 -40 -118 2 -3 0 -13 -6 -23 -5 -10 -11 -48 -13 -85
-1 -36 -7 -69 -12 -72 -5 -4 -10 -14 -11 -22 -1 -8 -7 -43 -12 -77 -5 -35 -7
-78 -4 -98 4 -23 2 -35 -6 -35 -8 0 -11 -39 -10 -127 0 -81 4 -121 9 -108 7
16 9 14 9 -15 1 -19 6 -79 13 -133 10 -84 14 -95 24 -75 11 20 12 19 18 -18 3
-21 8 -66 11 -98 3 -33 8 -69 11 -80 4 -14 3 -18 -4 -11 -6 6 -15 30 -20 55
-8 37 -10 40 -11 15 -1 -17 4 -46 10 -65 6 -19 10 -55 9 -79 -2 -58 9 -103 22
-95 7 5 9 0 6 -14 -4 -12 -2 -20 2 -17 5 3 13 -7 19 -22 9 -26 10 -24 5 12 -3
30 4 17 29 -50 45 -121 128 -317 140 -333 23 -30 15 1 -18 69 -41 83 -69 158
-62 166 3 2 19 -33 37 -79 17 -46 46 -108 63 -138 19 -33 24 -50 14 -41 -24
19 -21 6 12 -53 16 -28 31 -62 34 -76 4 -14 27 -56 52 -94 26 -38 51 -79 56
-92 4 -13 15 -24 24 -24 14 0 20 -12 16 -33 -1 -5 3 -6 9 -2 5 3 11 1 11 -4 1
-6 2 -17 3 -23 0 -7 6 -13 13 -13 6 0 15 -3 19 -7 4 -5 11 -8 16 -8 12 0 -21
47 -88 127 -29 34 -58 72 -64 85 -9 18 -6 16 14 -7 14 -16 25 -26 26 -21 0 5
9 1 20 -9 12 -10 19 -24 16 -31 -9 -23 198 -259 217 -247 8 5 271 -254 272
-268 0 -4 20 -23 45 -44 89 -73 71 -67 -60 22 -63 42 -64 42 -25 7 58 -52 206
-149 298 -196 43 -21 80 -38 82 -36 2 2 -35 25 -81 53 -47 27 -81 51 -76 53 5
1 42 -16 83 -40 41 -23 106 -56 146 -73 40 -18 78 -37 85 -42 7 -6 23 -14 36
-17 12 -4 19 -12 16 -18 -4 -6 1 -8 16 -3 13 4 20 3 17 -2 -3 -5 2 -9 11 -10
43 -4 122 -23 177 -41 33 -11 101 -28 150 -37 50 -9 106 -23 125 -32 21 -10
69 -17 130 -19 52 -1 169 -5 260 -8 156 -6 175 -5 385 30 153 25 235 43 271
60 56 27 80 32 142 33 30 1 41 5 36 13 -4 7 -3 8 5 4 6 -4 17 -3 24 2 7 5 59
28 117 51 57 23 111 48 120 55 8 7 79 46 158 86 95 49 154 86 176 110 19 21
49 46 67 56 18 11 51 31 73 47 47 32 66 35 40 5 -10 -12 -13 -18 -5 -13 9 5 7
-2 -5 -17 -10 -14 -23 -24 -27 -21 -5 3 0 11 10 19 29 22 4 16 -28 -7 -16 -11
-29 -18 -29 -14 0 3 -20 -8 -45 -26 -24 -17 -42 -36 -39 -41 6 -9 33 5 90 48
22 16 31 18 31 9 0 -8 -3 -12 -7 -10 -3 2 -19 -6 -35 -19 -21 -17 -25 -25 -15
-31 9 -5 11 -4 6 3 -4 7 -1 12 8 12 16 0 149 104 181 141 l20 24 -24 -20 c-13
-11 -26 -20 -30 -20 -3 0 -5 -2 -4 -6 3 -10 -36 -29 -42 -20 -3 5 13 24 35 41
22 17 38 35 35 39 -2 4 12 23 32 42 30 28 33 30 22 9 -8 -13 -21 -30 -29 -37
-20 -17 -9 -16 26 2 35 17 89 70 61 59 -21 -8 -22 9 -2 26 8 7 13 15 10 19 -2
4 9 24 26 44 16 20 30 40 30 44 0 4 31 43 69 85 39 42 70 84 70 93 0 9 4 13
10 10 13 -8 52 14 44 26 -3 5 4 26 15 45 12 19 16 32 10 28 -13 -8 7 33 27 57
8 9 45 80 84 158 38 79 73 148 79 154 16 21 133 340 157 432 28 104 68 335 84
480 6 54 15 102 20 105 11 7 -3 199 -25 355 -19 127 -57 313 -62 298 -3 -7 0
-29 6 -49 19 -69 4 -46 -28 43 -17 49 -31 102 -32 118 0 24 -2 26 -8 11 -6
-17 -9 -15 -20 12 -7 17 -10 35 -7 41 14 22 -63 175 -80 159 -3 -3 7 -31 21
-63 14 -32 25 -60 25 -64 0 -3 -20 23 -44 59 -24 36 -54 74 -66 85 l-23 20 8
-25 c16 -52 16 -54 1 -30 -8 14 -15 35 -16 46 0 12 -22 55 -48 95 -27 41 -46
81 -44 88 3 8 0 11 -6 8 -15 -10 -38 21 -25 34 7 7 25 -13 56 -63 49 -78 95
-131 81 -92 -4 10 -12 25 -18 33 -9 12 -8 13 2 7 10 -6 8 2 -4 25 -29 58 -75
120 -84 114 -4 -3 -20 10 -35 27 -56 67 -138 152 -127 133 5 -11 22 -31 37
-45 45 -42 98 -121 88 -131 -9 -9 -128 143 -149 192 -11 25 -137 144 -172 163
-9 5 3 -13 28 -40 49 -52 42 -48 -71 37 -123 92 -169 123 -174 117 -3 -3 17
-23 45 -44 29 -22 64 -48 78 -59 15 -11 53 -46 84 -78 81 -82 41 -72 -46 12
-39 37 -82 74 -96 81 -31 15 -23 7 68 -70 34 -29 62 -57 62 -62 0 -5 -4 -7 -8
-4 -5 3 -18 -2 -30 -10 l-22 -15 20 -22 c25 -26 35 -60 25 -84 -6 -15 -14 -10
-51 31 -42 45 -54 75 -19 46 22 -18 19 4 -3 23 -20 19 -37 23 -27 7 3 -6 3
-14 0 -20 -4 -6 -23 4 -46 22 -21 17 -41 29 -44 26 -3 -3 28 -31 69 -62 41
-31 77 -64 80 -74 4 -10 -1 -8 -12 7 -11 13 -31 25 -45 26 -14 2 -32 6 -39 11
-7 4 5 -13 28 -37 52 -57 68 -93 48 -109 -11 -10 -18 -8 -34 11 -10 13 -19 27
-20 31 0 4 -9 12 -19 17 -29 16 -34 -11 -8 -40 12 -13 23 -33 25 -43 3 -18 2
-18 -13 -2 -9 9 -22 16 -28 16 -7 -1 4 -14 23 -31 27 -23 30 -29 15 -27 -11 2
-27 7 -35 12 -8 5 11 -16 42 -45 39 -38 54 -59 49 -68 -11 -16 -3 -47 21 -86
22 -36 23 -55 4 -55 -9 0 -17 15 -21 40 -4 22 -10 38 -15 35 -4 -3 -13 2 -20
10 -14 17 -35 20 -24 4 3 -6 1 -15 -6 -19 -18 -11 -4 -44 16 -36 12 4 14 1 9
-13 -3 -11 -1 -22 5 -26 5 -3 10 -14 10 -24 0 -10 7 -25 17 -32 15 -13 15 -12
4 10 -11 19 -11 25 0 32 8 5 15 4 17 -1 2 -6 8 -8 13 -5 5 4 20 -5 34 -19 28
-28 31 -23 10 14 -17 30 -19 44 -5 35 19 -11 41 -65 51 -123 5 -31 21 -91 35
-133 14 -42 24 -80 23 -85 -2 -5 5 -33 14 -63 9 -30 22 -107 28 -170 6 -64 15
-123 20 -131 6 -11 8 -11 9 -2 0 7 5 10 12 6 8 -5 9 0 4 17 -3 13 -9 45 -13
71 -4 37 -2 49 9 53 12 5 13 15 8 46 -4 22 -4 42 1 44 13 8 22 -80 15 -139 -6
-43 -4 -60 10 -81 15 -23 16 -49 11 -233 -6 -227 -22 -348 -67 -519 -80 -302
-226 -587 -434 -847 -97 -122 -287 -316 -310 -316 -9 0 -16 -4 -16 -9 0 -25
-301 -199 -435 -251 -44 -18 -85 -38 -91 -46 -6 -7 -13 -11 -16 -9 -3 3 -18
-1 -33 -9 -15 -8 -33 -12 -40 -9 -7 2 -33 -8 -56 -23 -24 -15 -64 -29 -89 -32
-25 -2 -50 -9 -56 -13 -6 -5 -31 -9 -55 -9 -24 1 -71 -4 -104 -10 -115 -20
-398 -10 -544 19 -66 13 -81 14 -61 1 12 -8 9 -10 -12 -10 -15 0 -33 7 -42 15
-9 10 -34 16 -63 17 -26 0 -65 9 -85 19 -21 11 -45 19 -54 19 -9 0 -46 14 -81
31 -36 17 -76 32 -88 33 -13 0 -21 4 -19 8 3 4 -8 10 -23 14 -51 12 -66 24
-52 40 10 12 9 13 -6 8 -14 -6 -16 -4 -10 6 6 10 4 12 -11 6 -10 -4 -15 -4
-11 0 9 10 -93 76 -120 78 -11 0 -19 5 -15 10 3 5 -2 6 -12 3 -9 -4 -15 -3
-12 2 3 5 -10 18 -30 30 -19 12 -32 16 -28 10 4 -8 0 -7 -15 1 -12 6 -19 15
-16 20 4 6 -1 7 -11 3 -11 -4 -15 -2 -11 4 4 6 -1 17 -10 24 -14 12 -16 12 -8
-1 8 -13 7 -13 -12 0 -138 98 -360 318 -458 454 -38 53 -71 96 -73 96 -2 0 0
-5 4 -11 4 -8 0 -7 -15 1 -12 6 -19 15 -16 21 4 5 11 6 17 3 6 -4 -17 46 -50
112 -34 65 -68 137 -77 158 -8 22 -18 36 -21 33 -3 -3 2 -26 11 -52 10 -25 16
-48 13 -51 -9 -8 -72 151 -123 311 -26 83 -52 154 -56 159 -5 6 -9 21 -9 35
l1 26 13 -24 c10 -17 15 -20 18 -10 3 8 9 -13 12 -46 8 -60 35 -160 42 -152 2
2 -7 51 -20 108 -13 58 -27 134 -32 169 -6 54 -9 60 -14 35 -4 -21 -8 -4 -14
60 -10 133 -18 179 -26 165 -12 -20 -20 46 -20 176 0 76 -4 124 -10 124 -5 0
-10 9 -10 21 0 11 4 18 8 15 4 -2 7 8 6 22 -1 15 -6 26 -11 25 -5 -1 -10 17
-11 40 0 28 2 36 7 23 5 -13 13 6 26 64 16 72 20 79 26 55 5 -15 3 -52 -2 -82
-6 -30 -8 -58 -5 -61 3 -3 6 3 6 13 0 12 3 15 9 10 6 -6 7 -44 2 -92 -5 -60
-4 -83 5 -83 7 0 14 27 18 68 4 37 8 78 10 92 1 14 4 33 4 43 1 10 6 16 11 13
5 -4 7 2 4 12 -6 23 27 150 73 283 34 101 147 343 177 384 25 33 28 12 4 -26
-28 -41 -50 -92 -38 -85 4 3 14 19 21 36 7 16 17 27 23 23 6 -3 7 -1 3 5 -4 7
-2 12 4 12 6 0 9 4 5 10 -3 5 2 17 12 27 28 28 95 125 97 140 1 7 12 20 24 29
12 8 27 24 33 35 10 20 10 20 -15 4 -35 -23 -78 -83 -70 -97 4 -6 3 -8 -4 -4
-6 3 -25 -14 -43 -39 -18 -25 -34 -45 -36 -45 -5 0 -2 6 59 99 48 74 59 99 36
85 -9 -5 -9 -2 1 9 7 9 19 17 27 17 7 0 12 9 11 20 -1 19 -1 19 -22 0 -12 -11
-24 -18 -27 -14 -4 3 -11 -4 -18 -15 -6 -12 -15 -19 -21 -16 -5 4 -9 2 -9 -2
0 -5 -18 -29 -40 -53 -58 -64 -60 -67 -52 -76 4 -4 1 -4 -6 1 -10 5 -11 10 -3
18 18 18 13 31 -6 16 -12 -10 -10 -4 5 18 26 37 28 51 5 32 -9 -8 -4 4 12 26
38 52 39 53 32 30 -5 -13 4 -8 23 15 19 22 40 35 58 36 15 1 28 3 30 4 1 1 6
3 11 4 5 0 13 5 18 10 5 5 2 6 -6 1 -9 -5 -12 -3 -9 6 3 8 10 13 15 12 6 -1
21 9 33 22 13 14 19 25 15 25 -5 0 15 25 45 55 48 48 70 85 52 85 -3 0 -27
-21 -53 -46 -40 -39 -50 -44 -67 -35 -10 6 -23 7 -28 3 -5 -4 2 5 15 20 13 15
27 25 31 23 4 -2 23 10 44 27 28 23 34 33 24 39 -10 7 -9 9 5 9 10 0 16 4 13
9 -9 14 227 201 255 201 8 0 30 14 49 30 29 25 32 30 15 30 -17 0 -16 3 8 19
16 10 25 21 20 24 -5 3 -17 -2 -26 -11z m-323 -174 c-3 -4 -1 -8 4 -8 5 0 9
-15 8 -32 -1 -26 -17 -48 -75 -106 -40 -41 -75 -71 -78 -68 -8 8 -34 -14 -28
-24 3 -4 -2 -13 -10 -20 -8 -7 -15 -18 -15 -25 0 -7 -6 -18 -14 -25 -8 -6 -12
-18 -9 -26 3 -9 -2 -14 -16 -14 -22 0 -28 14 -11 25 5 3 7 11 5 18 -3 7 23 44
57 82 64 73 88 94 88 75 0 -6 4 -8 10 -5 13 8 -11 35 -25 27 -5 -3 1 7 14 21
17 19 32 25 48 23 13 -3 21 -1 19 3 -3 4 1 17 9 27 17 23 20 43 3 26 -19 -19
-33 -14 -15 6 10 10 15 21 12 24 -3 2 2 5 10 5 8 0 12 -4 9 -9z m-104 -280 c0
-7 -9 -22 -21 -34 -24 -26 -4 -28 27 -4 18 14 18 13 0 -8 -11 -12 -21 -20 -24
-17 -3 3 -12 0 -19 -7 -8 -7 -23 -12 -34 -13 -18 -2 -18 -1 -2 17 18 20 5 25
-17 6 -8 -7 5 8 29 34 41 44 61 52 61 26z m-222 -143 c-6 -14 -13 -23 -15 -21
-5 5 15 46 22 46 3 0 -1 -11 -7 -25z m3672 -57 l23 -33 -26 24 c-15 14 -27 28
-27 33 0 14 5 9 30 -24z m-3797 -141 c-51 -98 -75 -139 -79 -135 -5 5 27 74
63 136 30 50 42 50 16 -1z m132 1 c-2 -13 -26 -67 -54 -120 -28 -54 -51 -101
-50 -105 4 -21 -2 -33 -13 -27 -7 5 -8 3 -4 -5 8 -13 -11 -71 -23 -71 -4 0 -7
-8 -8 -17 0 -10 -12 -45 -27 -78 -14 -33 -26 -71 -26 -85 0 -14 -7 -34 -15
-44 -20 -27 -19 -10 5 59 23 66 23 68 11 61 -5 -3 -12 -18 -16 -33 -3 -15 -13
-32 -21 -37 -8 -6 -26 -60 -41 -119 -15 -60 -29 -104 -31 -98 -6 17 56 235 97
345 42 112 63 157 84 178 28 27 48 68 41 79 -4 7 -3 9 4 5 6 -4 10 1 9 12 -1
22 62 134 72 127 5 -2 7 -15 6 -27z m-225 -601 c0 -7 -8 -21 -17 -32 l-16 -20
8 20 c4 11 7 28 7 38 0 9 3 15 9 12 5 -4 9 -12 9 -18z m4017 -39 c-3 -8 -6 -5
-6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-4116 -239 c-6 -16 -10 -18 -10 -7
-1 22 12 55 16 42 2 -6 -1 -22 -6 -35z m-166 -167 c-10 -70 -18 -40 -9 35 5
45 9 58 12 39 2 -17 1 -50 -3 -74z m172 1 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18
2 -7 2 -21 0 -30z m10 -75 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1
-19z m0 -70 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-187 -77
c0 -45 -6 -37 -14 19 -4 31 -3 40 4 30 5 -8 10 -30 10 -49z m-3 -133 c-2 -13
-4 -3 -4 22 0 25 2 35 4 23 2 -13 2 -33 0 -45z m270 -130 c-3 -8 -6 -5 -6 6
-1 11 2 17 5 13 3 -3 4 -12 1 -19z m-210 -110 c-3 -7 -5 -2 -5 12 0 14 2 19 5
13 2 -7 2 -19 0 -25z m232 -83 c-1 -15 -4 -13 -14 10 -19 40 -18 67 0 35 8
-14 14 -34 14 -45z m-200 -185 c0 -9 -4 -8 -9 5 -5 11 -9 27 -9 35 0 9 4 8 9
-5 5 -11 9 -27 9 -35z m73 -140 c18 -56 16 -64 -5 -22 -21 40 -30 72 -20 72 5
0 16 -22 25 -50z m318 -93 c0 -4 4 -6 9 -3 5 3 11 -2 14 -12 2 -9 8 -26 12
-37 12 -31 -29 23 -49 65 -14 28 -14 31 -1 16 8 -11 15 -24 15 -29z m150 -238
c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z
m-260 -90 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10
-16z m470 -167 c0 -8 -85 71 -89 82 -2 6 17 -9 43 -34 25 -24 46 -46 46 -48z
m647 -437 c0 -10 -6 -14 -14 -10 -8 3 -17 5 -19 5 -3 0 -2 5 1 10 10 16 32 12
32 -5z m1563 -25 c-8 -5 -22 -9 -30 -9 -10 0 -8 3 5 9 27 12 43 12 25 0z
m-2089 -17 c13 -16 12 -17 -3 -4 -10 7 -18 15 -18 17 0 8 8 3 21 -13z m633 1
c9 -8 20 -13 24 -10 5 3 9 -1 9 -8 0 -14 -33 -10 -43 5 -3 5 -14 9 -25 9 -11
0 -17 5 -14 10 9 15 31 12 49 -6z m-389 -171 c76 -44 102 -63 85 -63 -29 1
-63 23 -52 35 4 5 -1 5 -11 2 -12 -5 -16 -3 -11 5 5 8 2 9 -10 5 -11 -5 -15
-3 -10 5 5 8 2 9 -9 5 -10 -4 -20 0 -26 11 -6 9 -11 13 -11 7 0 -7 -3 -7 -8 0
-4 6 -23 18 -42 28 -20 10 -42 28 -49 39 l-14 22 29 -19 c16 -11 79 -48 139
-82z m910 -273 c22 -5 26 -9 14 -14 -8 -4 -31 0 -50 8 -36 16 -18 19 36 6z"
        />
        <path d="M909 4293 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
        <path
          d="M845 4240 c-27 -30 -12 -34 15 -5 13 14 19 25 13 25 -5 0 -18 -9 -28
-20z"
        />
        <path d="M769 4153 l-24 -28 28 24 c25 23 32 31 24 31 -2 0 -14 -12 -28 -27z" />
        <path d="M839 4133 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
        <path
          d="M615 3744 c-9 -15 -12 -23 -6 -20 11 7 35 46 28 46 -3 0 -12 -12 -22
-26z"
        />
        <path
          d="M520 3570 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3 0
-10 -9 -16 -20z"
        />
        <path
          d="M1151 4580 c-13 -11 -19 -20 -14 -20 6 0 18 9 28 20 23 25 17 25 -14
0z"
        />
        <path
          d="M1211 4581 c-18 -14 -21 -20 -11 -26 9 -5 11 -4 6 3 -6 10 4 16 25
14 3 -1 6 6 6 14 0 8 -1 14 -1 14 -1 0 -12 -9 -25 -19z"
        />
        <path d="M1090 4540 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
        <path d="M1056 4508 c3 -5 10 -6 15 -3 13 9 11 12 -6 12 -8 0 -12 -4 -9 -9z" />
        <path d="M1410 4500 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
        <path d="M1130 4480 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
        <path
          d="M1189 4459 c-22 -18 -22 -19 -3 -10 12 6 23 8 26 6 3 -3 5 2 5 10 0
19 0 19 -28 -6z"
        />
        <path
          d="M1305 4470 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0
-13 -4 -16 -10z"
        />
        <path d="M869 4453 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
        <path
          d="M1237 4444 c-21 -14 -36 -28 -34 -31 3 -2 24 9 48 26 51 37 39 42
-14 5z"
        />
        <path
          d="M1126 4395 c-10 -8 -22 -13 -25 -10 -4 2 -18 -5 -31 -16 l-25 -20 40
16 c22 9 47 22 55 30 18 19 11 19 -14 0z"
        />
        <path
          d="M1118 4362 c-15 -10 -32 -30 -38 -46 -13 -38 -13 -41 5 -26 8 7 13
16 10 20 -3 5 3 15 12 22 17 13 49 49 42 47 -2 0 -16 -8 -31 -17z"
        />
        <path
          d="M4263 4363 c9 -14 87 -77 87 -70 0 3 -21 22 -47 43 -26 21 -44 33
-40 27z"
        />
        <path d="M1004 4318 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z" />
        <path d="M1029 4273 l-24 -28 28 24 c25 23 32 31 24 31 -2 0 -14 -12 -28 -27z" />
        <path
          d="M1090 4280 c-8 -16 -8 -20 3 -20 18 0 39 24 30 33 -11 12 -22 8 -33
-13z"
        />
        <path d="M724 4229 c-19 -22 -19 -22 4 -8 12 8 22 17 22 21 0 12 -6 9 -26 -13z" />
        <path d="M915 4208 l-40 -43 43 40 c39 36 47 45 39 45 -2 0 -21 -19 -42 -42z" />
        <path d="M869 4193 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z" />
        <path
          d="M4210 4185 c7 -8 17 -15 22 -15 6 0 5 7 -2 15 -7 8 -17 15 -22 15 -6
0 -5 -7 2 -15z"
        />
        <path
          d="M4190 4161 c0 -5 7 -15 17 -22 15 -13 15 -12 4 9 -12 23 -21 28 -21
13z"
        />
        <path
          d="M555 4110 c-10 -11 -16 -22 -13 -25 3 -3 13 4 23 15 10 11 16 22 13
25 -3 3 -13 -4 -23 -15z"
        />
        <path
          d="M927 4100 c-3 -11 -3 -20 -1 -20 2 0 8 9 14 20 6 11 7 20 2 20 -6 0
-12 -9 -15 -20z"
        />
        <path
          d="M4540 4066 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21
13z"
        />
        <path d="M4040 4026 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z" />
        <path
          d="M780 4011 c-8 -6 -18 -7 -22 -5 -4 3 -8 0 -8 -5 0 -6 0 -14 0 -18 -1
-5 -13 -21 -28 -38 -36 -39 -56 -65 -49 -65 3 0 33 32 67 70 34 39 60 70 59
70 -2 0 -11 -4 -19 -9z"
        />
        <path
          d="M386 3861 c-20 -32 -36 -62 -36 -67 0 -10 17 15 54 79 39 67 24 58
-18 -12z"
        />
        <path
          d="M400 3759 c-12 -23 -19 -43 -17 -46 3 -2 8 5 12 16 3 12 11 18 17 15
7 -4 8 -2 4 4 -4 6 -2 21 4 32 6 11 8 20 6 20 -3 0 -15 -18 -26 -41z"
        />
        <path
          d="M4159 3773 c-3 -23 5 -50 22 -72 14 -17 19 -19 19 -8 0 9 -4 19 -10
22 -5 3 -10 11 -10 16 0 6 4 7 10 4 6 -4 7 2 1 16 -8 23 -30 38 -32 22z"
        />
        <path d="M307 3723 c-4 -3 -7 -13 -7 -22 1 -13 3 -13 11 2 11 19 8 33 -4 20z" />
        <path
          d="M345 3673 c3 -7 1 -21 -5 -30 -10 -16 -11 -16 -5 2 3 11 3 16 -2 12
-4 -5 -8 -22 -9 -39 l-2 -31 23 27 c13 15 27 27 31 26 5 -1 10 4 13 11 2 7 -1
9 -8 4 -7 -4 -19 1 -27 11 -9 11 -13 13 -9 7z"
        />
        <path
          d="M258 3479 c-20 -41 -48 -112 -64 -159 -16 -47 -32 -88 -37 -91 -5 -4
-7 -11 -4 -16 3 -5 -5 -63 -18 -129 -14 -65 -25 -132 -25 -147 0 -16 -3 -26
-8 -23 -4 2 -6 -14 -4 -35 3 -22 6 -39 7 -37 2 2 10 55 19 118 9 63 23 138 31
165 12 41 14 43 9 13 -3 -21 -2 -38 1 -38 12 0 26 58 26 108 0 61 58 252 90
295 11 15 19 33 17 39 -2 6 -20 -22 -40 -63z"
        />
        <path d="M4302 3500 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
        <path
          d="M187 3433 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3
-9 2 -12 -2z"
        />
        <path
          d="M4321 3380 c14 -31 19 -36 19 -24 0 6 -7 19 -16 30 -14 18 -14 18 -3
-6z"
        />
        <path d="M229 3335 c-4 -48 -3 -73 3 -69 7 4 9 84 2 84 -2 0 -5 -7 -5 -15z" />
        <path d="M5011 3334 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M381 3124 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M72 2945 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z" />
        <path d="M401 2824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path
          d="M90 2610 c0 -117 3 -210 7 -207 7 8 5 408 -2 416 -3 2 -5 -92 -5
-209z"
        />
        <path d="M4452 2750 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" />
        <path d="M71 2604 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path d="M5082 2350 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z" />
        <path d="M171 2174 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path
          d="M132 2145 c0 -11 4 -31 8 -45 6 -20 8 -21 8 -5 0 11 -4 31 -8 45 -6
20 -8 21 -8 5z"
        />
        <path d="M150 2046 c0 -14 4 -27 8 -30 5 -3 6 8 4 25 -5 35 -12 38 -12 5z" />
        <path
          d="M510 1976 c0 -12 29 -76 34 -76 3 0 -2 17 -11 38 -16 38 -23 50 -23
38z"
        />
        <path d="M201 1824 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
        <path
          d="M227 1804 c-6 -7 29 -103 43 -118 5 -5 0 20 -11 55 -22 69 -23 72
-32 63z"
        />
        <path
          d="M4890 1631 c-7 -15 -7 -21 0 -21 12 0 25 28 17 36 -3 3 -10 -4 -17
-15z"
        />
        <path d="M370 1509 c0 -9 7 -22 15 -29 19 -16 19 0 0 26 -12 16 -14 16 -15 3z" />
        <path
          d="M4828 1483 c-14 -21 -33 -53 -42 -71 -17 -32 -16 -32 3 -20 16 9 77
128 67 128 -2 0 -15 -17 -28 -37z"
        />
        <path
          d="M395 1432 c6 -30 58 -152 63 -147 3 3 11 -3 19 -13 8 -9 1 8 -16 39
-35 64 -41 98 -11 59 28 -36 24 -16 -6 29 -28 43 -55 61 -49 33z"
        />
        <path
          d="M4744 1322 c-12 -8 -29 -52 -20 -52 3 0 12 14 21 30 16 32 16 34 -1
22z"
        />
        <path
          d="M4682 1237 c-12 -18 -25 -46 -31 -62 l-11 -30 23 27 c36 44 58 86 48
92 -5 4 -18 -9 -29 -27z"
        />
        <path
          d="M610 1171 c0 -5 7 -15 17 -22 15 -13 15 -12 4 9 -12 23 -21 28 -21
13z"
        />
        <path
          d="M4571 1097 c-30 -29 -50 -45 -46 -37 10 19 0 9 -51 -50 -37 -44 -37
-44 -4 -15 l33 30 -21 -31 c-12 -17 -19 -33 -17 -36 3 -3 -5 -13 -17 -24 l-23
-19 20 25 c12 15 5 12 -18 -9 -41 -39 -42 -40 -24 -37 45 10 80 45 205 203 47
60 24 60 -37 0z m-31 -61 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21
21 21 13z"
        />
        <path
          d="M1209 1043 c18 -24 37 -43 42 -43 16 0 10 16 -13 36 -52 45 -61 47
-29 7z"
        />
        <path d="M815 901 c-9 -15 8 -35 24 -30 8 3 7 10 -2 23 -10 14 -16 16 -22 7z" />
        <path
          d="M830 853 c0 -6 19 -23 41 -38 23 -15 38 -22 35 -16 -4 6 -2 11 5 11
9 0 9 3 -1 14 -6 8 -18 12 -26 9 -8 -3 -24 3 -34 12 -11 10 -20 14 -20 8z"
        />
        <path d="M1600 780 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" />
        <path
          d="M945 760 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z"
        />
        <path
          d="M1710 735 c14 -8 30 -14 35 -14 6 0 -1 6 -15 14 -14 8 -29 14 -35 14
-5 0 1 -6 15 -14z"
        />
        <path
          d="M1016 728 c5 -8 1 -9 -12 -4 -14 5 -16 4 -8 -4 6 -6 21 -12 33 -15
23 -4 23 -4 6 15 -20 22 -30 26 -19 8z"
        />
        <path
          d="M1963 683 c9 -2 15 -9 12 -14 -4 -5 -2 -9 4 -9 5 0 12 4 15 9 6 9
-17 22 -37 20 -7 -1 -4 -3 6 -6z"
        />
        <path
          d="M3913 477 c-23 -12 -42 -25 -43 -29 0 -12 58 13 76 33 21 23 20 23
-33 -4z"
        />
        <path
          d="M2345 141 c3 -5 -5 -12 -17 -14 -13 -2 -6 -5 17 -5 26 -1 35 1 26 7
-11 7 -11 9 0 14 8 3 4 6 -9 6 -13 1 -21 -3 -17 -8z"
        />
        <path d="M2253 133 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
      </g>
    </SvgIcon>
  );
};

export default EnsoIconFilled;
