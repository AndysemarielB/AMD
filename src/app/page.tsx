'use client';

import { MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Lapin Adulte',
    price: '25,000 FCFA',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop',
    description: 'Lapin adulte en excellente santé'
  },
  {
    id: 2,
    name: 'Chat Adulte',
    price: '35,000 FCFA',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop',
    description: 'Chat adulte calme et affectueux'
  }
];

const orderWhatsApp = (productInfo: string) => {
  const message = `Bonjour ! Je suis intéressé(e) par : ${productInfo}\n\nPouvez-vous me donner plus d'informations ?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2250500405056?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Chez AMD</h1>
        </nav>
      </header>

      {/* Products Section */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-4">{product.price}</div>
                <button 
                  className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  onClick={() => orderWhatsApp(`${product.name} - ${product.price}`)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-900">Chez AMD</p>
        </div>
      </footer>
    </div>
  );
}
