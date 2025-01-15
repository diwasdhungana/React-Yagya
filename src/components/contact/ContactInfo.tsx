import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Visit Us',
    details: ['Kathmandu Metropolitan City', 'Ward No. 11, Thapathali', 'Kathmandu, Nepal'],
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: 'Call Us',
    details: ['+977 984615165', '+977 01-4251220'],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Us',
    details: ['info@yagya.ai', 'support@yagya.ai'],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Working Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
      <div className="grid gap-6">
        {contactDetails.map((item, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-[#FFF5E6] rounded-full text-primary">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary/80">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
