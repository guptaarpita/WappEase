import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquareCode, Bot, Zap, Users, BarChart, Shield, Check } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  const [featureRef, featureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [packagesRef, packagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <MessageSquareCode className="w-6 h-6" />,
      title: "Automated Responses",
      description: "Set up intelligent auto-replies based on keywords and context"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Chat",
      description: "Advanced chatbot capabilities with natural language processing"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Integration",
      description: "Quick setup with your existing WhatsApp Business account"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Bulk Messaging",
      description: "Send personalized messages to multiple contacts efficiently"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into message performance and engagement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "End-to-end encryption and GDPR-compliant data handling"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "9,999",
      renewalPrice: "6,999",
      features: [
        "Business Verification",
        "Meta App Setup",
        "WhatsApp API Setup",
        "Static Templates (Up to 5 Templates)",
        "Free 5000 Messages",
        "Access to Web App for Viewing & Replying",
        "Support via Call & WhatsApp"
      ]
    },
    {
      name: "Professional",
      price: "14,999",
      renewalPrice: "9,999",
      features: [
        "Business Verification",
        "Meta App Setup",
        "WhatsApp API Setup",
        "Static Templates (Up to 5 Templates)",
        "Dynamic Templates (Up to 5 Templates)",
        "Bulk Messaging",
        "Free 10000 Messages",
        "Access to Web App for Viewing & Replying",
        "Support via Call & WhatsApp"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "19,999",
      renewalPrice: "14,999",
      features: [
        "Business Verification",
        "Meta App Setup",
        "WhatsApp API Setup",
        "Static Templates (Up to 10 Templates)",
        "Dynamic Templates (Up to 7 Templates)",
        "Bulk Messaging",
        "Free 30000 Messages",
        "Access to Web App for Viewing & Replying",
        "Support via Call & WhatsApp"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BackgroundAnimation />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.coverr.co/videos/coverr-close-up-of-coding-on-computer-1584/1080p.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">WappEase</span> 
            <br />WhatsApp Integration
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Streamline your customer communication with AI-powered automation
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="button-gradient px-8 py-4 rounded-lg text-white font-semibold transform transition hover:scale-105"
          >
            Get Started 
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" ref={featureRef} className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featureInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl border border-white/10"
              >
                <div className="stats-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" ref={packagesRef} className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Our Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-gradient p-8 rounded-xl border ${pkg.popular ? 'border-primary' : 'border-white/10'} relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex flex-col mb-4">
                  <div className="flex items-baseline">
                    <span className="text-lg">₹</span>
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-white/70 ml-2">/month</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">
                    Renew your plan for just ₹{pkg.renewalPrice} after setup!
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 ${pkg.popular ? 'button-gradient' : 'bg-white/10 hover:bg-white/20'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-2">₹0.7846 per message after exceeding the limit.</p>
            <p className="text-sm text-white/50">Terms And Conditions Applied</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <div id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;