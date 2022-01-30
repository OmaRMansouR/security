import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    icon: 'book',
    subItems: [
      {
        label: 'Timeline',
        link: '/general/profile',
      }
    ]
  },
];
