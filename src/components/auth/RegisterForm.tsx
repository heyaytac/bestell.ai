import React, { useState } from 'react';
import { Button } from '../Button';
import { supabase } from '../../lib/supabase';
import { CheckCircle } from 'lucide-react';

export function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    restaurantName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Track signup attempt
      try {
        window.gtag?.('event', 'sign_up_attempt', {
          'event_category': 'Authentication',
          'event_label': 'Register Form'
        });
      } catch (e) {
        console.error('Analytics error:', e);
      }

      // Sign up the user with Supabase
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            restaurant_name: formData.restaurantName,
          }
        }
      });

      if (signUpError) throw signUpError;

      if (authData.user) {
        // Track successful signup
        try {
          window.gtag?.('event', 'sign_up_success', {
            'event_category': 'Authentication',
            'event_label': 'Register Form'
          });
        } catch (e) {
          console.error('Analytics error:', e);
        }

        // Wait a moment for the session to be established
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Create restaurant entry
        const { error: restaurantError } = await supabase
          .from('restaurants')
          .insert([
            {
              name: formData.restaurantName,
              owner_id: authData.user.id,
            }
          ])
          .select();

        if (restaurantError) {
          console.error('Restaurant creation error:', restaurantError);
        }

        setSuccess(true);
        setFormData({
          email: '',
          password: '',
          name: '',
          restaurantName: '',
        });
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
      
      // Track failed signup
      try {
        window.gtag?.('event', 'sign_up_error', {
          'event_category': 'Authentication',
          'event_label': 'Register Form',
          'error_message': err instanceof Error ? err.message : 'Unknown error'
        });
      } catch (e) {
        console.error('Analytics error:', e);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          <div>
            <p className="font-medium">Registrierung erfolgreich!</p>
            <p className="text-sm">Ihr 30-tägiger Testzeitraum beginnt jetzt.</p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ihr Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700 mb-1">
          Restaurant Name
        </label>
        <input
          id="restaurantName"
          type="text"
          value={formData.restaurantName}
          onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Passwort
        </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          required
          minLength={6}
        />
        <p className="text-xs text-gray-500 mt-1">Mindestens 6 Zeichen</p>
      </div>

      <Button
        type="submit"
        variant="primary"
        className="w-full px-6 py-3"
        disabled={loading}
      >
        {loading ? 'Wird registriert...' : 'Kostenlos testen'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Mit der Registrierung stimmen Sie unseren Nutzungsbedingungen und Datenschutzrichtlinien zu.
      </p>
    </form>
  );
}