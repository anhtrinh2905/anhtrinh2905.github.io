import { MenuItem } from "@/types/menu";

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    href: '/home',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'Education',
    href: '/education',
    ariaLabel: 'Education',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'Projects',
    href: '/projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'Experiment',
    href: '/experiment',
    ariaLabel: 'Experiment',
    rotation: 8,
    hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
  },
  {
    label: 'Contact',
    href: '/contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];