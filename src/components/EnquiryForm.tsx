import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Send, Loader2 } from 'lucide-react';
import * as XLSX from 'xlsx';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

interface EnquiryFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  package: string;
  message: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: '',
    package: 'Professional', // Default package
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const exportToExcel = (data: EnquiryFormData) => {
    const worksheet = XLSX.utils.json_to_sheet([{
      'Company Name': data.companyName,
      'Contact Person': data.contactPerson,
      'Email': data.email,
      'Phone': data.phone,
      'Business Type': data.businessType,
      'Package': data.package,
      'Message': data.message,
      'Date': new Date().toLocaleString()
    }]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Enquiries');

    // Generate Excel file
    XLSX.writeFile(workbook, `enquiry_${new Date().getTime()}.xlsx`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([formData]);

      if (error) throw error;

      // Export to Excel
      exportToExcel(formData);

      setStatus('success');
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        businessType: '',
        package: 'Professional',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setStatus('error');
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/30 to-transparent"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2401/1080p.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Start Your Journey with WappEase</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-white/80 mb-2">Company Name</label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-white/80 mb-2">Contact Person</label>
              <input
                type="text"
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-white/80 mb-2">Business Type</label>
            <input
              type="text"
              id="businessType"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
              required
            />
          </div>

          <div>
            <label htmlFor="package" className="block text-sm font-medium text-white/80 mb-2">Package</label>
            <select
              id="package"
              value={formData.package}
              onChange={(e) => setFormData({ ...formData, package: e.target.value })}
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white"
              required
            >
              <option value="Starter">Starter - ₹9,999</option>
              <option value="Professional">Professional - ₹14,999</option>
              <option value="Enterprise">Enterprise - ₹19,999</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Additional Requirements</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="button-gradient w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-semibold space-x-2 transform transition hover:scale-105 disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="text-green-400 text-center p-4 bg-green-400/10 rounded-lg">
              Thank you for your enquiry! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-red-400 text-center p-4 bg-red-400/10 rounded-lg">
              There was an error submitting your enquiry. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}