import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_BLOG_POSTS } from '../constants';
import { Calendar, Tag, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const BlogPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const categories = [...new Set(DEMO_BLOG_POSTS.map(p => p.category))];

  return (
    <div>
      <PageHero
        title="Insights & Research"
        subtitle="The latest cybersecurity intelligence, research, and news from the Roblocksec team."
      />
      <div className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="relative flex-grow">
                <input type="text" placeholder="Search articles..." className="w-full bg-brand-navy/70 border border-gray-600 rounded-md pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all" />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-white mr-2">Filter:</span>
                {categories.map(cat => (
                    <button key={cat} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-brand-cyan hover:text-brand-dark transition-colors">{cat}</button>
                ))}
            </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {DEMO_BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-brand-navy rounded-lg overflow-hidden glowing-border group flex flex-col"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-4 gap-4">
                    <div className="flex items-center gap-2">
                        <Tag size={16} className="text-brand-cyan" />
                        <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-brand-cyan" />
                        <span>{post.date}</span>
                    </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3 flex-grow">{post.title}</h3>
                <p className="text-gray-300 mb-6">{post.excerpt}</p>
                <Button href="#" variant="outline">Read Full Article</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
