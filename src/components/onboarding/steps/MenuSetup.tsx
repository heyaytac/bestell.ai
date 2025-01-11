import React, { useState } from 'react';
import { Plus, Trash2, DollarSign } from 'lucide-react';
import { Button } from '../../Button';

interface MenuSetupProps {
  onNext: (data: any) => void;
  data: any;
}

interface MenuItem {
  name: string;
  price: string;
  category: string;
  description: string;
}

export function MenuSetup({ onNext, data }: MenuSetupProps) {
  const [menu, setMenu] = useState<MenuItem[]>(data.menu || []);
  const [newItem, setNewItem] = useState<MenuItem>({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      setMenu(prev => [...prev, newItem]);
      setNewItem({
        name: '',
        price: '',
        category: '',
        description: ''
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    setMenu(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ menu });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Neues Gericht hinzufügen</h3>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name des Gerichts"
              value={newItem.name}
              onChange={e => setNewItem(prev => ({ ...prev, name: e.target.value }))}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                step="0.01"
                placeholder="Preis"
                value={newItem.price}
                onChange={e => setNewItem(prev => ({ ...prev, price: e.target.value }))}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Kategorie (z.B. Vorspeisen, Hauptgerichte)"
            value={newItem.category}
            onChange={e => setNewItem(prev => ({ ...prev, category: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Beschreibung"
            value={newItem.description}
            onChange={e => setNewItem(prev => ({ ...prev, description: e.target.value }))}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            rows={2}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={handleAddItem}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Gericht hinzufügen
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Ihre Speisekarte</h3>
        {menu.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Noch keine Gerichte hinzugefügt
          </p>
        ) : (
          <div className="space-y-2">
            {menu.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
              >
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.category}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="font-medium">€{item.price}</div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}