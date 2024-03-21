import { Category } from '@prisma/client'

export const INFINITE_SCROLL_LIMIT = 8

export const ORDER_INFINITE_SCROLL_LIMIT = 3

export const categories: Category[] = [
  {
    name: 'Students',
    slug: 'student',
  },
  {
    name: 'Business Professionals',
    slug: 'business',
  },
  {
    name: 'Gamers',
    slug: 'gamer',
  },
  {
    name: 'Content Creators',
    slug: 'creator',
  },
  {
    name: 'Casual Users',
    slug: 'casual',
  },
  {
    name: 'Travelers',
    slug: 'traveler',
  },
]
