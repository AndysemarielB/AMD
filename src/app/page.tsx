'use client';

import { MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Lapin 1.5 à 1.8 kg',
    price: '10,000 FCFA',
    image: 'https://media.istockphoto.com/id/1434983638/fr/photo/jeune-lapin-europ%C3%A9en-face-%C3%A0-la-cam%C3%A9ra-oryctolagus-cuniculus.jpg?s=612x612&w=0&k=20&c=_gCe5U-ViPkZe8eM5bKbO9hkgqS0655mReUPhsUvraQ=',
    description: 'Lapin vivant pesant entre 1.5 kg et 1.8 kg'
  },
  {
    id: 2,
    name: 'Lapin +1.8 kg',
    price: '13,000 FCFA',
    image: 'https://www.zooplus.be/magazine/wp-content/uploads/2022/01/zwei-junge-zwergkaninchen-1024x681-2.webp',
    description: 'Lapin vivant pesant plus de 1.8 kg'
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
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Chez AMB</h1>
          <p className="text-sm text-gray-600 mt-1">Vente de lapins vivants</p>
        </nav>
      </header>

      {/* Product cards */}
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
                  Commander sur WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-gray-700 text-sm leading-6">
          <p>
            Tarifs basés sur le poids du lapin vivant :
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Entre 1.5 kg et 1.8 kg: <span className="font-semibold">10,000 FCFA</span></li>
            <li>Plus de 1.8 kg: <span className="font-semibold">13,000 FCFA</span></li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl font-bold text-gray-900">Chez AMB</p>
        </div>
      </footer>
    </div>
  );
}
