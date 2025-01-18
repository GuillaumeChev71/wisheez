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
    name: "Un papa forcé",
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
    question: "Comment créer une liste de cadeaux pour une occasion spéciale ?",
    answer:
      "Pour créer une liste, connectez-vous à votre compte, cliquez sur 'Créer une liste', choisissez l'occasion (Noël, anniversaire, etc.) et ajoutez vos idées de cadeaux.",
    href: "#",
  },
  {
    id: 2,
    question: "Puis-je partager ma liste de cadeaux avec mes amis et ma famille ?",
    answer:
      "Oui, chaque liste a un lien unique que vous pouvez envoyer par email, sur les réseaux sociaux ou via une messagerie instantanée.",
    href: "#",
  },
  {
    id: 3,
    question: "Que se passe-t-il si quelqu'un réserve un cadeau de ma liste ?",
    answer:
      "Lorsqu'un cadeau est réservé, il est automatiquement marqué comme 'Réservé', afin d'éviter les doublons. Cependant, vous ne saurez pas qui l'a réservé, pour garder la surprise.",
    href: "#",
  },
  {
    id: 4,
    question: "L'application est-elle gratuite ?",
    answer:
      "Oui, Wisheez est entièrement gratuit à utiliser pour créer et partager vos listes de cadeaux. Certaines options premium pourraient être disponibles ultérieurement.",
    href: "#",
  },
  {
    id: 5,
    question: "Puis-je ajouter des liens vers des boutiques en ligne pour mes cadeaux ?",
    answer:
      "Absolument ! Vous pouvez inclure des liens directs vers des produits en ligne afin que vos proches sachent où les acheter.",
    href: "#",
  },
  {
    id: 6,
    question: "Comment fonctionnent les liens d'affiliation sur Wisheez ?",
    answer:
      "Lorsque vous ajoutez un lien vers une boutique en ligne et que celle-ci fait partie de notre réseau d'affiliation, nous transformons automatiquement ce lien en un lien d'affiliation Wisheez. Cela nous permet de financer l'application sans coût supplémentaire pour vous. Vous continuez d'utiliser la plateforme gratuitement tout en soutenant son développement.",
    href: "#affiliation",
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
