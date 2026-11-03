import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './seo/Seo';
import { breadcrumbSchema, articleSchema, faqSchema } from './seo/schema';
import { getPost } from './data/blog';
import { postPresentation } from './data/blog-presentation';
import { appStoreLink } from './seo/siteConfig';
import BlogCard from './BlogCard';

export default function BlogPost({ slug }) {
  const post = getPost(slug);
  if (!post) return null;

  const { Content } = post;
  const presentation = postPresentation(post);
  const related = (post.related || []).map(getPost).filter(Boolean);

  return (
    <main className="legal-page journal-article-page">
      <Seo
        title={`${post.title} | Bunny`}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.ogImage || '/og/og-blog.jpg'}
        type="article"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            author: post.author,
            image: post.ogImage || '/og/og-blog.jpg',
          }),
          ...(post.faq ? [faqSchema(post.faq)] : []),
        ]}
      />
      <div className="container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={20} />
          All articles
        </Link>
        <motion.article
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="legal-content glass-panel blog-post"
        >
          <div className="blog-card-meta article-meta">
            {post.tags.join(' · ')} · {post.readingTime} · Updated{' '}
            {new Date(post.dateModified).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </div>
          <h1>{post.title}</h1>
          <p className="article-byline">By {post.author}</p>
          {post.coverImage && (
            <figure className={`article-cover story-tone-${presentation.tone}`}>
              <div><span className="journal-eyebrow">A LITTLE LOOK INSIDE BUNNY</span><p>{post.category}</p></div>
              <img src={post.coverImage} alt={post.coverAlt} width="720" height="1564" />
            </figure>
          )}

          {post.tldr && (
            <div className="tldr-box">
              <h2>TL;DR</h2>
              <ul>
                {post.tldr.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <Content />

          {post.faq && (
            <>
              <h2>Frequently asked questions</h2>
              {post.faq.map((item) => (
                <div key={item.q} className="faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </>
          )}

          {post.category && (
            <aside className="article-download">
              <h2>Make a little room for the two of you.</h2>
              <p>Start with a shared bunny, text love letters and three free question packs. Available on iPhone and iPad.</p>
              <a href={appStoreLink('blog', post.slug)} className="app-store-badge" aria-label="Download Bunny on the App Store" />
              <Link to="/pricing">Explore free and Pro features</Link>
            </aside>
          )}

          <p className="muted-links">
            Try together in Bunny: <Link to="/shared-pet-for-couples">Raise a shared pet</Link> ·{' '}
            <Link to="/drawing-widgets-for-couples">Draw together</Link> ·{' '}
            <Link to="/love-notes-for-couples">Send love notes</Link>
          </p>
          <p className="muted-links">
            By {post.author} · <Link to="/about">About Bunny</Link> ·{' '}
            <Link to="/pricing">Free and Pro features</Link>
          </p>
        </motion.article>
        {related.length > 0 && (
          <section className="article-related" aria-labelledby="related-heading">
            <h2 id="related-heading">A little more to explore</h2>
            <div className="stories-grid">{related.map((item) => <BlogCard key={item.slug} post={item} headingLevel="h3" />)}</div>
          </section>
        )}
      </div>
    </main>
  );
}
