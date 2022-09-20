import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
  ['HB616GLCZoj7vkHTdG8qjp2jPSYgoMd6RHUxnivXAwXm', { name: 'dRafflenet #1' }],
  [
    'Ab9brJkBSVu7BwKA364MEiMR6WMdqsvrvTcP2KdqfKnC',
    {
      name: 'dRaffle for the win',
      alternatePurchaseMints: [
        new PublicKey('72UgZ7avdJZBbv3wR7hbWcFy6dyHHNAoJw7CimGA55Zh'),
      ],
    },
  ],
  [
    '36t14CtqKxQvtEuAg42D9WPZtVNHDWFkNAPd8h3U2txT',
    { name: 'dRaffle with a loooooooooooooooong name' },
  ],
  [
    '6scsG1BuD1GhAYgHCbzKLqvgMJjijzWTAgGmj9mhBwFz',
    {
      name: 'Oh my dRaffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
      alternatePurchaseMints: [
        new PublicKey('So11111111111111111111111111111111111111112'),
      ],
    },
  ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'FnHwnXGBz7NRZEsT8u12pE2cxURt8mYHQZykzmRtjb27',
    {
      name: 'dRaffle launch raffle',
      overviewImageUri: '/resources/001-mainnet-launch.gif',
    },
  ],
  [
    '2QjkshNu3mrcCnriekTpppa3PFwnAR9Yf7v5vc54m2Yh',
    {
      name: 'First SOL raffle',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    '8aEm1MoDqkYT5vCB21jC6aMMcMbdQJgmHpyBbtHDfUjU',
    {
      name: 'Anti Artist Club',
      overviewImageUri: '/resources/aartist-raffle-overview.gif',
    },
  ],
  [
    '2ziwAj4awgvNyn8ywwjkBRkBsmv259u9vVyEdrGYTb54',
    {
      name: 'More SOL',
      overviewImageUri: '/resources/solana-logo.gif',
    },
  ],
  [
    'EgHys3WPcM5WRpKqVHs1REfK6Npzq9sJ7dZPFPzQy2xG',
    {
      name: 'Triple SOL',
      overviewImageUri: '/resources/solana-logo-x3.gif',
    },
  ],
  [
    'CjzFZfrMW4D1jZVm5upCobRi96UYnQTk5cescSt12rhV',
    {
      name: 'SAMO raffle',
      overviewImageUri: '/resources/samo-x3.gif',
    },
  ],
  [
    'EZtBKgWq66KT4jRKtd4VT3LWh3mVC4pwcCsqLzKas63G',
    {
      name: 'BitBoat raffle',
      overviewImageUri: '/resources/bitboat-raffle.gif',
    },
  ],
  // [
  //   '75SVM64EEQtW9KaseDduniMgmqG7auWEVbPA7VBeSWQm',
  //   {
  //     name: 'first raffle',
  //     overviewImageUri: '/resources/bitboat-raffle.gif',
  //   },
  // ],
  // [
  //   'DDEVNUeuvR4p2BTo2rVmR5VGZSUx9KKzyeJkgoEPxWfg',
  //   {
  //     name: 'whitelist pass',
  //     overviewImageUri: '/resources/ticket.png',
  //   },
  // ],
  // [
  //   'BTo3otoe1wFjqahD8nLmKhMHUt433xPE78iTyF1tr4za',
  //   {
  //     name: 'half finished',
  //     overviewImageUri: '/resources/ticket.png',
  //   },
  // ],
  // [
  //   'Dw7BUbft4JohwwVPVG6KWYnadggUgu73LwArffVJrWQ8',
  //   {
  //     name: 'ticket for my cock',
  //     overviewImageUri: '/resources/ticket.png',
  //   },
  // ],
  [
    'F4Wyzgj8HXF6moSe72wkvmLGfTrRL7VtZHzdDvCjvnY1',
    {
      name: '#1 mutilated',
      overviewImageUri: '/resources/mutilated.png',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
