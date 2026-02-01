# Configuration EmailJS

Ce projet utilise EmailJS pour envoyer les demandes d'audit par email sans backend.

## 📋 Prérequis

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Installer les dépendances : `npm install`

## 🔧 Configuration

### Étape 1 : Créer un service EmailJS

1. Connectez-vous à votre [Dashboard EmailJS](https://dashboard.emailjs.com/)
2. Allez dans **Email Services**
3. Cliquez sur **Add New Service**
4. Choisissez votre provider email (Gmail, Outlook, etc.)
5. Suivez les instructions de configuration
6. **Copiez le Service ID** (ex: `service_abc123`)

### Étape 2 : Créer un template d'email

1. Dans le dashboard, allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Nommez votre template (ex: "Audit Request")
4. Dans l'éditeur de template, collez le code HTML suivant dans la section **Content** :

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    Une demande d'audit gratuit a été reçue de la part de {{from_name}}.
    Veuillez répondre dès que possible.
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div
            style="color: #2c3e50; font-size: 22px; font-weight: bold; margin-top: 4px"
          >
            {{business_name}}
          </div>
          <div style="color: #95a5a6; font-size: 12px; margin-top: 4px">
            {{timestamp}}
          </div>

          <div
            style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px"
          >
            <div style="font-size: 14px; color: #34495e; margin-bottom: 8px">
              <strong>📞 Contact :</strong> {{contact_info}}
            </div>
            <div style="font-size: 14px; color: #34495e; margin-bottom: 8px">
              <strong>🌐 Site actuel :</strong> {{website_url}}
            </div>
            <div
              style="font-size: 14px; color: #34495e; margin-bottom: 8px; padding: 10px; background-color: white; border-radius: 4px; border-left: 3px solid #3498db"
            >
              <strong>💬 Message :</strong><br />
              <span style="white-space: pre-wrap;">{{message}}</span>
            </div>
            <div style="font-size: 12px; color: #95a5a6; margin-top: 10px">
              📍 Demande envoyée depuis :
              <a href="{{page_url}}" style="color: #3498db">{{page_url}}</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div
    style="margin-top: 20px; padding: 10px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 3px"
  >
    <p style="margin: 0; font-size: 13px; color: #856404">
      💡 <strong>Action requise :</strong> Contactez {{from_name}} à
      l'adresse/numéro fourni pour planifier l'audit gratuit.
    </p>
  </div>
</div>
```

5. Configurez le **destinataire** (votre email : gasparrivoire@gmail.com)
6. Configurez le **sujet** : `Nouvelle demande d'audit - {{business_name}}`
7. **Copiez le Template ID** (ex: `template_xyz789`)

### Étape 3 : Récupérer la clé publique

1. Dans le dashboard, allez dans **Account** > **General**
2. Trouvez la section **API Keys**
3. **Copiez votre Public Key** (ex: `abcdefghijklmnop`)

### Étape 4 : Configuration du projet

1. Copiez le fichier `.env.example` vers `.env` :

   ```bash
   cp .env.example .env
   ```

2. Remplissez les valeurs dans `.env` :

   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```

3. **Redémarrez le serveur de développement** pour que Vite charge les nouvelles variables :
   ```bash
   npm run dev
   ```

## 🧪 Test

1. Remplissez le formulaire d'audit sur votre site
2. Cliquez sur "Demander l'audit"
3. Vérifiez votre boîte email configurée dans EmailJS

## 🔒 Sécurité

- ✅ Le fichier `.env` est automatiquement ignoré par Git
- ✅ Ne committez **JAMAIS** vos vraies clés dans le code
- ✅ Le honeypot anti-spam est activé automatiquement
- ✅ Les clés sont préfixées `VITE_` pour être accessibles côté client (normal pour EmailJS)

## 📝 Variables du template EmailJS

Variables disponibles dans votre template :

- `{{from_name}}` - Nom de la personne
- `{{business_name}}` - Nom du commerce
- `{{contact_info}}` - Téléphone ou email
- `{{website_url}}` - Site web actuel (ou "Non renseigné")
- `{{page_url}}` - URL de la page d'où provient la demande
- `{{timestamp}}` - Date et heure de la demande

## 🐛 Dépannage

### Erreur "EmailJS configuration is incomplete"

→ Vérifiez que toutes les variables sont présentes dans `.env` et redémarrez le serveur

### L'email n'arrive pas

→ Vérifiez dans le dashboard EmailJS > **Email Services** que votre service est bien connecté

### Erreur CORS

→ C'est normal en développement local. EmailJS fonctionne correctement en production

## 📚 Liens utiles

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Dashboard EmailJS](https://dashboard.emailjs.com/)
- [Limites gratuites](https://www.emailjs.com/pricing/) : 200 emails/mois
