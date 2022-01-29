import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Components',
    isTitle: true
  },
  {
    label: 'UI Kit',
    icon: 'feather',
    subItems: [
      {
        label: 'Carousel',
        link: '/ui-components/carousel',
      }
    ]
  },
  {
    label: 'Advanced UI',
    icon: 'anchor',
    subItems: [
      {
        label: 'Owl carousel',
        link: '/advanced-ui/owl-carousel',
      }
    ]
  },
  {
    label: 'Pages',
    isTitle: true
  },
  {
    label: 'Special pages',
    icon: 'book',
    subItems: [
      {
        label: 'Profile',
        link: '/general/profile',
      }
    ]
  },
  {
    label: 'Authentication',
    icon: 'unlock',
    subItems: [
      {
        label: 'Login',
        link: '/auth/login',
      },
      {
        label: 'Register',
        link: '/auth/register',
      },
    ]
  },
  {
    label: 'Error',
    icon: 'cloud-off',
    subItems: [
      {
        label: '404',
        link: '/error/404',
      },
      {
        label: '500',
        link: '/error/500',
      },
    ]
  },
];
