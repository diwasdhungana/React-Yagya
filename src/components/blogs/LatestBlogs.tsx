import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Clock, Tag } from 'lucide-react';

const latestBlogs = [
  {
    title: 'Leveraging AI for Social Good',
    excerpt:
      'How artificial intelligence is helping organizations maximize their social impact and reach more people in need.',
    author: 'Dr. Sarah Chen',
    date: 'March 18, 2024',
    tags: ['AI', 'Social Impact', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
  },
  {
    title: 'Building Inclusive Communities',
    excerpt:
      'Practical strategies for creating and nurturing communities that welcome and empower everyone.',
    author: 'Miguel Rodriguez',
    date: 'March 16, 2024',
    tags: ['Community', 'Inclusion', 'Leadership'],
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80',
  },
  {
    title: 'The Future of Collaborative Innovation',
    excerpt:
      'Exploring new models of cooperation that are reshaping how we solve global challenges.',
    author: 'Emma Thompson',
    date: 'March 15, 2024',
    tags: ['Innovation', 'Collaboration', 'Future'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
  },
];

export function LatestBlogs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-8">Latest Articles</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{blog.title}</h3>
                    <p className="text-secondary/80 mb-4">{blog.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-primary bg-white px-2 py-1 rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm text-secondary mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {blog.date}
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="text-secondary border-secondary hover:bg-white">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
