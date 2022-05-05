import {InstagramIcon, SlackIcon, TwitterIcon, YoutubeIcon} from '~/assets';

const SocialLinks = [
  {
    id: 0,
    Icon: TwitterIcon,
  },
  {
    id: 1,
    Icon: InstagramIcon,
  },
  {
    id: 3,
    Icon: YoutubeIcon,
  },
  {
    id: 4,
    Icon: SlackIcon,
  },
] as const;

export default SocialLinks;
