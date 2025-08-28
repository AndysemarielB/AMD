# 🚀 Guide de Déploiement - Chez Dydy

## Déploiement sur Vercel

### Étape 1 : Préparer le repository GitHub

1. **Créer un repository GitHub**
   ```bash
   # Si vous n'avez pas encore de repo distant
   git remote add origin https://github.com/votre-username/chez-dydy.git
   git branch -M main
   git push -u origin main
   ```

2. **Vérifier que tous les fichiers sont commités**
   ```bash
   git status
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

### Étape 2 : Déployer sur Vercel

1. **Aller sur [Vercel.com](https://vercel.com)**
   - Créer un compte ou se connecter
   - Cliquer sur "New Project"

2. **Importer le repository**
   - Sélectionner votre repository GitHub
   - Vercel détectera automatiquement Next.js

3. **Configuration automatique**
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build` (automatique)
   - **Output Directory** : `.next` (automatique)
   - **Install Command** : `npm install` (automatique)

4. **Variables d'environnement (optionnel)**
   - Pour l'instant, aucune variable nécessaire
   - Vous pouvez ajouter des variables plus tard si besoin

5. **Déployer**
   - Cliquer sur "Deploy"
   - Attendre 2-3 minutes pour le build

### Étape 3 : Configuration post-déploiement

1. **Domaine personnalisé (optionnel)**
   - Dans les paramètres du projet Vercel
   - Ajouter un domaine personnalisé si vous en avez un

2. **Vérifier le déploiement**
   - Tester tous les boutons WhatsApp
   - Vérifier le responsive design
   - Tester les animations

## 🔧 Commandes utiles

### Développement local
```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build

# Lancer en production locale
npm start
```

### Git
```bash
# Voir les changements
git status

# Ajouter les changements
git add .

# Commiter
git commit -m "Description des changements"

# Pousser vers GitHub
git push

# Vercel se mettra à jour automatiquement
```

## 📱 Test du site

### Fonctionnalités à tester
- [ ] Navigation entre les sections
- [ ] Boutons "Commander" WhatsApp
- [ ] Design responsive (mobile, tablette, desktop)
- [ ] Animations et transitions
- [ ] Performance de chargement

### Test WhatsApp
1. Cliquer sur un bouton "Commander"
2. Vérifier que WhatsApp s'ouvre
3. Vérifier que le message est pré-rempli
4. Tester sur mobile et desktop

## 🎨 Personnalisation

### Modifier les prix
Éditer `src/app/page.tsx` :
```typescript
const products = [
  {
    name: 'Lapin Adulte',
    price: '25,000 FCFA', // Modifier ici
    // ...
  }
];
```

### Modifier le numéro WhatsApp
Dans `src/app/page.tsx` :
```typescript
const orderWhatsApp = (productInfo: string) => {
  // Modifier le numéro ici
  const whatsappUrl = `https://wa.me/2250500405056?text=${encodedMessage}`;
};
```

### Modifier les couleurs
Éditer `tailwind.config.js` ou utiliser les classes Tailwind existantes.

## 🔄 Mises à jour

### Processus de mise à jour
1. Modifier le code localement
2. Tester avec `npm run dev`
3. Commiter et pousser vers GitHub
4. Vercel se met à jour automatiquement

### Rollback
Si quelque chose ne va pas :
1. Aller dans les paramètres Vercel
2. Section "Deployments"
3. Cliquer sur un ancien déploiement
4. Cliquer "Redeploy"

## 📊 Analytics (optionnel)

### Ajouter Google Analytics
1. Créer un compte Google Analytics
2. Ajouter le script dans `src/app/layout.tsx`
3. Ajouter l'ID comme variable d'environnement

### Vercel Analytics
1. Activer dans les paramètres Vercel
2. Ajouter le script automatiquement

## 🛡️ Sécurité

### Bonnes pratiques
- Ne jamais commiter de clés API
- Utiliser des variables d'environnement
- Garder les dépendances à jour
- Vérifier régulièrement les logs Vercel

## 📞 Support

### En cas de problème
1. Vérifier les logs Vercel
2. Tester en local avec `npm run build`
3. Vérifier la console du navigateur
4. Consulter la documentation Next.js

### Ressources utiles
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Votre site est maintenant prêt ! 🎉**

URL de votre site : `https://votre-projet.vercel.app`
