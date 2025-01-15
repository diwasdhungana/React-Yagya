import React from 'react';

export function ContactMap() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Find Us Here</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5168546565746!2d85.32174731506244!3d27.694595982799246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b3cfa3ed%3A0x8b3c2ab5c2c5636!2sThapathali%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1647856732345!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
