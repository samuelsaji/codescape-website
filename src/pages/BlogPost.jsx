import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, isSanityConfigured } from '../sanityClient';

/**
 * BlogPost Page
 * Shows the full content of a case study or article.
 * Accessed via the fullscreen button in the Glance overlay.
 */
function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [postType, setPostType] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const decodedSlug = decodeURIComponent(slug);

    const fetchPost = async () => {
      if (!isSanityConfigured) {
        setIsLoading(false);
        return;
      }

      try {
        // Try case study first
        let data = await client.fetch(
          `*[_type == "caseStudy" && title == $title][0] { title, category, description, body, "image": image.asset->url }`,
          { title: decodedSlug }
        );
        if (data) {
          setPost(data);
          setPostType('caseStudy');
        } else {
          // Try article
          data = await client.fetch(
            `*[_type == "article" && title == $title][0] { title, date, category, body, "img": img.asset->url }`,
            { title: decodedSlug }
          );
          if (data) {
            setPost(data);
            setPostType('article');
          }
        }
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen pt-32 px-6 md:px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
        <p className="text-gray-500 mb-8">The post you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/insights')} className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-colors">
          Back to Insights
        </button>
      </div>
    );
  }

  const image = post.image || post.img;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-32">
        {/* Back link */}
        <button
          onClick={() => navigate('/insights')}
          className="flex items-center gap-2 text-sm text-gray-400 font-medium hover:text-gray-900 transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </button>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {post.date && (
          <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-10">{post.date}</p>
        )}

        {/* Image in rounded box */}
        {image && (
          <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 mb-10 shadow-lg">
            <img src={image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Short description */}
        {post.description && (
          <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">{post.description}</p>
        )}

        {/* Body */}
        {post.body && (
          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
