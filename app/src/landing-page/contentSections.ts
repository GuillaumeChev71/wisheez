import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Features', to: '#features' },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Documentation', to: DocsUrl },
  { name: 'Blog', to: BlogUrl },
];
export const features = [
  {
    name: "Créer une liste",
    description: "Ajoutez facilement des idées de cadeaux pour toutes les occasions.",
    icon: "🎁",
    href: "/create-list",
  },
  {
    name: "Partager avec vos proches",
    description: "Envoyez vos listes à votre famille et vos amis en quelques clics.",
    icon: "🔗",
    href: "/share-list",
  },
  {
    name: "Organiser vos idées",
    description: "Classez vos idées de cadeaux par catégories pour plus de clarté.",
    icon: "📂",
    href: "/organize",
  },
  {
    name: "Recevoir des suggestions",
    description: "Laissez vos proches contribuer à vos listes en ajoutant leurs idées.",
    icon: "💡",
    href: "/suggestions",
  },
];
export const testimonials = [
  {
    name: "Vieux barbu",
    role: "Livraison de Noël",
    emoji: "🎅",
    socialUrl: "https://northpole.com",
    quote: "Trop bien, pas de doublons cette année pendant ma tournée ! Merci Wisheez, je peux enfin livrer mes cadeaux tranquille. 🎁✨",
  },
  {
    name: "Un papa",
    role: "Anniversaire de ma fille",
    emoji: "🎂",
    socialUrl: "https://birthdayplanner.com",
    quote: "Avec Wisheez, pas de stress pour trouver les cadeaux parfaits pour ma fille. Les invités m'ont remercié... et elle aussi ! 🎉🎈",
  },
  {
    name: "Rookies du babyphone",
    role: "Naissance de mon fils",
    emoji: "🍼",
    socialUrl: "https://newparentclub.com",
    quote: "Grâce à Wisheez, on a reçu pile ce dont on avait besoin pour notre bébé. Fini les 3 chauffe-biberons inutiles. Merci ! 👶🛏️",
  },
];



export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
