import { useSyncExternalStore } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Seo from './seo/Seo';
import { breadcrumbSchema, itemListSchema } from './seo/schema';
import { POSTS } from './data/blog';
import { BLOG_CATEGORIES, postPresentation } from './data/blog-presentation';
import BlogCard from './BlogCard';

const subscribe = () => () => {};

export default function BlogIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Static HTML contains all stories. Apply URL filters after hydration so a
  // direct visit to a filtered URL starts with the same markup on both sides.
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const requested = hydrated ? searchParams.get('topic') : null;
  const category = BLOG_CATEGORIES.includes(requested) ? requested : 'All stories';
  const featured = POSTS[0];
  const filtered = category === 'All stories' ? POSTS.slice(1) : POSTS.filter((post) => postPresentation(post).category === category);

  return (
    <main className="journal-page">
      <Seo
        title="The Bunny Blog: Long-Distance Love, Games & Shared Moments"
        description="Ideas for feeling closer with Bunny. Explore long-distance relationship tips, shared pets, whiteboard inspiration, couples games and honest app comparisons."
        path="/blog"
        image="/og/og-blog.jpg"
        schema={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
          itemListSchema(POSTS.map((post) => ({ name: post.title, path: `/blog/${post.slug}` }))),
        ]}
      />
      <div className="container">
        <nav className="journal-nav" aria-label="Blog navigation">
          <Link to="/" className="journal-home"><ArrowLeft size={18} aria-hidden="true" /> Back to Bunny</Link>
          <Link to="/pricing">Explore the app <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </nav>
        <header className="journal-heading">
          <p className="journal-eyebrow">THE BUNNY BLOG</p>
          <h1>Little things.<br /><span>Closer together.</span></h1>
          <p>For the everyday moments that make you feel like us.<br className="journal-desktop-break" /> Stories, ideas and small ways to connect, wherever you are.</p>
        </header>

        {category === 'All stories' && <section aria-label="Featured story"><BlogCard post={featured} featured /></section>}

        <section className="journal-stories" aria-labelledby="stories-heading">
          <div className="journal-section-heading"><h2 id="stories-heading">Find your next little ritual</h2><span>{POSTS.length} stories to explore</span></div>
          <div className="journal-filters" role="group" aria-label="Filter articles by topic">
            {BLOG_CATEGORIES.map((topic) => (
              <button key={topic} type="button" aria-pressed={category === topic} onClick={() => setSearchParams(topic === 'All stories' ? {} : { topic }, { preventScrollReset: true })}>{topic}</button>
            ))}
          </div>
          <p className="sr-only" role="status">{category === 'All stories' ? POSTS.length : filtered.length} articles in {category.toLowerCase()}</p>
          <div className="stories-grid">
            {filtered.map((post) => <BlogCard post={post} key={post.slug} headingLevel="h3" />)}
          </div>
        </section>
        <aside className="journal-footer-note">
          <p>A shared pet. A little doodle. A note just for them.</p>
          <Link to="/">Make a little home together <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </aside>
      </div>
    </main>
  );
}
