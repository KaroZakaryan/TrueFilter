const detectionItems = [
  {
    id: 0,
    type: 'Obscene',
    probablity: 'Extremely',
    background: '/images/Green.png',
    borderColor: 'rgba(0, 255, 209, 0.3)',
  },
  {
    id: 1,
    type: 'Identity Hate',
    probablity: 'Highly',
    background: '/images/Blue.png',
    borderColor: 'rgb(0, 194, 255, 0.3)',
  },
  {
    id: 3,
    type: 'Insult',
    probablity: 'Highly',
    background: '/images/Blue.png',
    borderColor: 'rgb(0, 194, 255, 0.3)',
  },
  {
    id: 4,
    type: 'Threat',
    probablity: 'Moderately',
    background: '/images/Violet.png',
    borderColor: 'rgba(192, 79, 244, 0.3) ',
  },
] as const;

export default detectionItems;
