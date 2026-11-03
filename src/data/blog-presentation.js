import petImage from '../assets/screenshot-pet.webp';
import drawingImage from '../assets/screenshot-whiteboard.webp';
import gamesImage from '../assets/screenshot-games.webp';
import homeImage from '../assets/screenshot-home.webp';

export const BLOG_CATEGORIES = ['All stories', 'Long distance', 'Shared pets', 'Drawing together', 'Games & questions', 'App comparisons', 'Guides'];

export function postPresentation(post) {
  if (post.coverImage) return { category: post.category, image: post.coverImage, alt: post.coverAlt, tone: post.coverTone };
  if (/pet|tamagotchi/.test(post.slug)) return { category: 'Shared pets', image: petImage, alt: 'Shared virtual pet care in Bunny', tone: 'sage' };
  if (/drawing/.test(post.slug)) return { category: 'Drawing together', image: drawingImage, alt: 'Bunny’s shared drawing canvas', tone: 'lilac' };
  if (/games|questions/.test(post.slug)) return { category: 'Games & questions', image: gamesImage, alt: 'Couples question packs in Bunny', tone: 'butter' };
  return { category: post.tags.includes('Long distance') ? 'Long distance' : 'Guides', image: homeImage, alt: 'The Bunny couples app shared home', tone: 'peach' };
}
