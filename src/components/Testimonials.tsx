import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "WappEase has transformed our customer service operations. The AI automation is incredibly intelligent and has helped us maintain 24/7 customer support effortlessly."
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    company: "StyleHub",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The integration was seamless, and our response times have improved dramatically. Our customers love the instant responses, and our team can focus on more complex queries."
  },
  {
    name: "Emma Davis",
    role: "Customer Success",
    company: "CloudSoft",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The analytics dashboard provides invaluable insights into our customer interactions. We've been able to optimize our responses and improve satisfaction rates significantly."
  },
  {
    name: "David Rodriguez",
    role: "Operations Manager",
    company: "GlobalTrade",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "WappEase's bulk messaging feature has revolutionized our outreach campaigns. The dynamic templates save us hours of work while maintaining a personal touch."
  },
  {
    name: "Lisa Zhang",
    role: "Digital Strategist",
    company: "InnovateNow",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
    content: "The level of customization and automation WappEase offers is unmatched. It's become an indispensable tool for our marketing and customer engagement strategies."
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="testimonials" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          What Our Clients Say
        </h2>
        
        <div ref={ref} className="relative">
          <div className="flex space-x-8 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-white/10 w-[400px] flex-shrink-0"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-white/70">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4">{testimonial.content}</p>
                
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}