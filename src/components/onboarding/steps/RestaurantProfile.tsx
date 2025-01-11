import React, { useState } from 'react';
import { Building2, MapPin, Phone, Clock } from 'lucide-react';

interface RestaurantProfileProps {
  onNext: (data: any) => void;
  data: any;
}

export function RestaurantProfile({ onNext, data }: RestaurantProfileProps) {
  const [profile, setProfile] = useState({
    name: data.restaurantProfile?.name || '',
    address: data.restaurantProfile?.address || '',
    phone: data.restaurantProfile?.phone || '',
    hours: data.restaurantProfile?.hours || {
      mon: { open: '11:00', close: '22:00' },
      tue: { open: '11:00', close: '22:00' },
      wed: { open: '11:00', close: '22:00' },
      thu: { open: '11:00', close: '22:00' },
      fri: { open: '11:00', close: '23:00' },
      sat: { open: '12:00', close: '23:00' },
      sun: { open: '12:00', close: '22:00' }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ restaurantProfile: profile });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Restaurant Name
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={profile.name}
            onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Adresse
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={profile.address}
            onChange={e => setProfile(prev => ({ ...prev, address: e.target.value }))}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Telefonnummer
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={profile.phone}
            onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Öffnungszeiten
        </label>
        <div className="grid gap-3">
          {Object.entries(profile.hours).map(([day, hours]) => (
            <div key={day} className="flex items-center gap-4">
              <div className="w-20 font-medium">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <input
                  type="time"
                  value={hours.open}
                  onChange={e => setProfile(prev => ({
                    ...prev,
                    hours: {
                      ...prev.hours,
                      [day]: { ...hours, open: e.target.value }
                    }
                  }))}
                  className="px-2 py-1 border border-gray-300 rounded-md"
                />
                <span>-</span>
                <input
                  type="time"
                  value={hours.close}
                  onChange={e => setProfile(prev => ({
                    ...prev,
                    hours: {
                      ...prev.hours,
                      [day]: { ...hours, close: e.target.value }
                    }
                  }))}
                  className="px-2 py-1 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}