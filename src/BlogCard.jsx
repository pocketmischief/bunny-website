import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { postPresentation } from './data/blog-presentation';

export default function BlogCard({ post, featured = false, headingLevel = 'h2' }) {
  const presentation = postPresentation(post);
  const Heading = headingLevel;
  return (
    <Link to={`/blog/${post.slug}`} className={`story-card${featured ? ' story-card-featured' : ''}`}>
      <div className={`story-card-art story-tone-${presentation.tone}`}>
        <span className="story-art-label" aria-hidden="true">A little closer, together.</span>
        <img src={presentation.image} alt={presentation.alt} width="720" height="1564" loading={featured ? 'eager' : 'lazy'} />
      </div>
      <div className="story-card-copy">
        <div className="story-card-meta"><span>{presentation.category}</span><span>{post.readingTime}</span></div>
        <Heading>{post.title}</Heading>
        <p>{post.excerpt}</p>
        <span className="story-read-link">Read the story <ArrowUpRight size={18} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}
