'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Home as HomeIcon, Award, Rabbit, Cat, Phone, MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Lapin Adulte',
    description: 'Lapin adulte en excellente santé, parfait pour la compagnie',
    price: '25,000 FCFA',
    category: 'lapins',
    icon: Rabbit
  },
  {
    id: 2,
    name: 'Petit Lapin',
    description: 'Adorable petit lapin, idéal pour les enfants',
    price: '20,000 FCFA',
    category: 'lapins',
    icon: Rabbit
  },
  {
    id: 3,
    name: 'Chat Adulte',
    description: 'Chat adulte calme et affectueux, parfait compagnon',
    price: '35,000 FCFA',
    category: 'chats',
    icon: Cat
  },
  {
    id: 4,
    name: 'Petit Chat',
    description: 'Mignon petit chaton, plein d&apos;énergie et d&apos;amour',
    price: '30,000 FCFA',
    category: 'chats',
    icon: Cat
  }
];

const features = [
  {
    icon: Shield,
    title: 'Santé garantie',
    description: 'Tous nos animaux sont en parfaite santé'
  },
  {
    icon: HomeIcon,
    title: 'Élevage familial',
    description: 'Un environnement chaleureux et familial'
  },
  {
    icon: Award,
    title: 'Qualité premium',
    description: 'Des animaux de race et de qualité'
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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-pink-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Chez Dydy
          </motion.h1>
          <motion.ul 
            className="flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><a href="#accueil" className="text-gray-700 hover:text-pink-500 transition-colors">Accueil</a></li>
            <li><a href="#produits" className="text-gray-700 hover:text-pink-500 transition-colors">Nos Produits</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a></li>
          </motion.ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          <motion.div 
            className="flex-1 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
              Bienvenue chez Dydy
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Découvrez nos adorables lapins et chats, élevés avec amour et soin
            </p>
            <motion.a 
              href="#produits"
              className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir nos animaux
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center text-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <span className="text-lg">Élevage de qualité</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Qui sommes-nous ?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Chez Dydy, nous nous spécialisons dans l&apos;élevage de lapins et de chats de qualité. 
              Nos animaux sont élevés dans des conditions optimales, avec amour et attention. 
              Nous proposons des animaux adultes et des petits, tous en excellente santé.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nos Produits
          </motion.h2>
          
          <div className="space-y-16">
            {/* Lapins */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
                <Rabbit className="w-8 h-8 mr-3 text-pink-500" />
                Lapins
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {products.filter(p => p.category === 'lapins').map((product, index) => (
                  <motion.div 
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                      <product.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-2xl font-bold text-pink-500 mb-4">{product.price}</div>
                      <motion.button 
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                        onClick={() => orderWhatsApp(`${product.name} - ${product.price}`)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle className="w-5 h-5" />
                        Commander
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center">
                <Cat className="w-8 h-8 mr-3 text-pink-500" />
                Chats
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {products.filter(p => p.category === 'chats').map((product, index) => (
                  <motion.div 
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                      <product.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="text-2xl font-bold text-pink-500 mb-4">{product.price}</div>
                      <motion.button 
                        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                        onClick={() => orderWhatsApp(`${product.name} - ${product.price}`)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle className="w-5 h-5" />
                        Commander
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contactez-nous
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold">Pour toute commande ou information</h3>
            <p className="text-lg opacity-90">
              N&apos;hésitez pas à nous contacter directement sur WhatsApp pour passer votre commande 
              ou obtenir plus d&apos;informations sur nos animaux.
            </p>
            
            <div className="space-y-4">
              <motion.a 
                href="https://wa.me/2250500405056"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6" />
                Commander sur WhatsApp
              </motion.a>
              
              <div className="flex items-center justify-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>+225 0500405056</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2024 Chez Dydy. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
