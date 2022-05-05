import {InstagramIcon, SlackIcon, TwitterIcon, YoutubeIcon} from '~/assets';

const SocialMedia = [
  {
    id: 0,
    Icon: TwitterIcon,
    name: 'Twitter',
    type: 'Hidden',
  },
  {
    id: 1,
    Icon: YoutubeIcon,
    name: 'Youtube',
    type: 'Allowed',
  },
  {
    id: 3,
    Icon: SlackIcon,
    name: 'Slack',
    type: 'Reported',
  },
  {
    id: 4,
    Icon: InstagramIcon,
    name: 'Instagram',
    type: 'Coming soon!',
  },
] as const;

export default SocialMedia;
