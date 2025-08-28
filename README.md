# Chez Dydy - Site Web Next.js

Un site web moderne et élégant pour présenter et vendre des lapins et des chats, développé avec Next.js.

## 🎯 Description

Chez Dydy est un site vitrine moderne pour présenter des animaux (lapins et chats) avec des prix et un système de commande directe via WhatsApp.

## ✨ Fonctionnalités

- **Next.js 14** avec App Router
- **TypeScript** pour un code robuste
- **Tailwind CSS** pour un design moderne
- **Framer Motion** pour des animations fluides
- **Design responsive** : S'adapte à tous les écrans
- **Performance optimisée** : SSR et optimisations Next.js
- **Intégration WhatsApp** : Boutons de commande directs
- **Animations élégantes** : Effets visuels modernes

## 🐰 Produits

### Lapins
- **Lapin Adulte** : 25,000 FCFA
- **Petit Lapin** : 20,000 FCFA

### Chats
- **Chat Adulte** : 35,000 FCFA
- **Petit Chat** : 30,000 FCFA

## 📱 Contact

- **WhatsApp** : +225 0500405056
- **Commande directe** : Cliquez sur "Commander" pour ouvrir WhatsApp

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **Lucide React** - Icônes modernes

## 🚀 Installation et développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

## 📁 Structure du projet

```
chez-dydy/
├── src/
│   └── app/
│       ├── page.tsx          # Page principale
│       ├── layout.tsx        # Layout global
│       └── globals.css       # Styles globaux
├── public/                   # Assets statiques
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json              # Configuration Vercel
└── README.md
```

## 🌐 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déploiement automatique à chaque push

### Autres plateformes
- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **VPS** : Build manuel avec `npm run build`

## 📞 Fonctionnement des commandes

Quand un visiteur clique sur "Commander" :
1. Un message pré-rempli s'ouvre dans WhatsApp
2. Le message contient le nom du produit et le prix
3. Le client peut directement discuter avec vous

## 🎨 Personnalisation

Vous pouvez facilement modifier :
- Les prix dans `src/app/page.tsx`
- Les couleurs dans `tailwind.config.js`
- Le numéro WhatsApp dans la fonction `orderWhatsApp`
- Les descriptions des produits

## 📱 Compatibilité

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablette (iPad, Android)
- ✅ SEO optimisé avec Next.js

## 🔧 Maintenance

Le site est conçu pour être simple à maintenir :
- Code TypeScript typé
- Structure modulaire Next.js
- Déploiement automatique
- Performance optimisée

## 🚀 Avantages Next.js

- **Performance** : SSR et optimisations automatiques
- **SEO** : Meilleur référencement
- **Développement** : Hot reload et DX améliorée
- **Déploiement** : Intégration parfaite avec Vercel
- **Évolutivité** : Facile d'ajouter de nouvelles pages

---

**Chez Dydy** - Élevage de qualité depuis 2024

Développé avec ❤️ et Next.js
