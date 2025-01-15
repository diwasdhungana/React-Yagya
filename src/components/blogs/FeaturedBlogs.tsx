import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';

const featuredBlogs = [
  {
    title: 'The Power of AI-Driven Collaboration',
    excerpt:
      'Discover how artificial intelligence is revolutionizing the way changemakers connect and create impact together.',
    author: 'Rohit Budhathoki',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
  },
  {
    title: 'Building Sustainable Communities',
    excerpt:
      'Learn about the innovative approaches communities are taking to create lasting positive change.',
    author: 'Sarah Chen',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80',
  },
  {
    title: 'From Vision to Reality: Success Stories',
    excerpt:
      'Inspiring stories of changemakers who turned their innovative ideas into impactful solutions.',
    author: 'Miguel Rodriguez',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
  },
];

export function FeaturedBlogs() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredBlogs.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-8">Featured Articles</h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {featuredBlogs.map((blog, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div
                        className="h-64 md:h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${blog.image})` }}
                      />
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-secondary mb-4">{blog.title}</h3>
                          <p className="text-secondary/80 mb-6">{blog.excerpt}</p>
                        </div>

                        <div>
                          <div className="flex items-center space-x-4 mb-4 text-sm text-secondary">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2" />
                              {blog.author}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2" />
                              {blog.date}
                            </div>
                          </div>

                          <Button className="bg-primary hover:bg-primary/90 text-white">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center mt-4 space-x-2">
            {featuredBlogs.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-secondary/20'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
