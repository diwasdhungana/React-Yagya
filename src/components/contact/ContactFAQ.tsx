import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    category: 'About Yagya.ai',
    items: [
      {
        question: 'What is Yagya.ai?',
        answer:
          'Yagya.ai is your AI-powered partner in creating positive change. We connect changemakers with the right people, resources, and opportunities, making it easier to collaborate, innovate, and amplify your impact. Spend less time searching and more time making a difference in the world.',
      },
      {
        question: "What is the meaning of 'yagya'?",
        answer: `"Yagya" is an ancient Sanskrit word with deep roots in Hindu philosophy. It has multiple layers of meaning:
          • Traditional Ritual: A ritual offering performed with devotion to the Supreme
          • Selfless Action: Any action performed with selfless intention to contribute to society
          • Collective Effort: The dynamic activity of exploring and utilizing nature's resources for the benefit of all
          
          Essentially, any coordinated and well-planned effort for the common good, driven by a spirit of sacrifice and selfless contribution, can be called a Yagya.`,
      },
      {
        question: 'What is the mission of Yagya.ai?',
        answer:
          "Our mission is to empower a global community of changemakers to act as one and grow as all. We believe that collaboration is essential for solving the world's most pressing challenges, bringing better changes, and shaping the future for better.",
      },
    ],
  },
  {
    category: 'Platform Benefits',
    items: [
      {
        question: 'How is Yagya.ai different from other platforms?',
        answer:
          'Yagya.ai is unique because we leverage advanced AI and Large Language Models (LLMs) to provide highly personalized recommendations, explainable AI, and access to a vast network of resources. Our focus is on making connections that are meaningful and lead to real-world impact.',
      },
      {
        question: 'What kind of people benefit most from Yagya.ai?',
        answer:
          'Anyone who wants to make a difference! This includes passionate individuals, social entrepreneurs, innovators, non-profit leaders, volunteers, and anyone seeking to connect, collaborate, and contribute to a better world.',
      },
      {
        question: 'Why should I use Yagya.ai?',
        answer:
          'Yagya.ai saves you time and effort by finding the right people and resources for your specific needs. It helps you expand your network, discover opportunities, and create a greater impact through collaboration.',
      },
    ],
  },
  {
    category: 'Features & Growth',
    items: [
      {
        question: 'How will Yagya.ai add value to me in the future?',
        answer:
          "Beyond connections and resources, Yagya.ai is developing features for seamless collaboration, project management, and impact tracking. We're building a comprehensive ecosystem for changemakers to thrive and create a lasting positive impact.",
      },
      {
        question: 'How does Yagya.ai help me refine my ideas?',
        answer:
          "Yagya.ai not only connects you with the right people but also guides you with insightful questions to help you 'scratch' your ideas more effectively. This process of guided brainstorming helps you uncover hidden potential, refine your concepts, and develop more innovative solutions.",
      },
      {
        question: "What if I'm simply looking for personal or professional growth?",
        answer:
          'Yagya.ai is for you too! Yagya.ai helps you find the right people and resources to level up your skills and expand your horizons.',
      },
    ],
  },
  {
    category: 'Pricing & Access',
    items: [
      {
        question: 'Is Yagya.ai free to use?',
        answer: `We believe everyone should have access to the power of Yagya.ai! Here's how our pricing works:
          • Early Bird Bonus: The first 1,000 users receive generous free credits
          • Limited Free Access: New members after initial 1,000 get limited free credits
          • Pay-As-You-Go: Flexible pricing model after using free credits
          
          Don't miss out on this opportunity to join Yagya.ai early and unlock its full potential for free!`,
      },
    ],
  },
];

export function ContactFAQ() {
  return (
    <section className="py-20 text-primary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>

          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {category.items.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="bg-white rounded-lg shadow-sm"
                  >
                    <AccordionTrigger className="px-6 text-primary hover:text-primary font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
