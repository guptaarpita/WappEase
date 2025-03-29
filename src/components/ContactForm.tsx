import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send } from 'lucide-react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2401/1080p.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <button
            type="submit"
            className="button-gradient w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold space-x-2 transform transition hover:scale-105"
            disabled={status === 'sending'}
          >
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Error sending message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}