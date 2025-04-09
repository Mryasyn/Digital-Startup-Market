
# 🔐 Projet : Mise à jour du mot de passe client

Ce projet web simple permet à un client de mettre à jour son mot de passe de manière sécurisée à travers une interface intuitive et dynamique.

## 🛠️ Technologies utilisées
- **HTML** – pour la structure de la page
- **CSS / Bootstrap** (facultatif) – pour le style
- **JavaScript** – pour la validation côté client (code client, mot de passe, confirmation, complexité)
- **PHP** – pour la validation et la mise à jour des données dans la base de données
- **MySQL** – comme base de données

## ✅ Fonctionnalités
- Vérification du code client (doit commencer par deux lettres et finir par des chiffres)
- Vérification que le mot de passe actuel est correct
- Validation du nouveau mot de passe (doit être différent et avoir 8 caractères)
- Vérification que la confirmation du mot de passe est identique
- Affichage de la complexité du nouveau mot de passe (forte ou faible)
- Message d'alerte selon l'état de la mise à jour
- Annulation automatique des champs via un bouton "Annuler"

## 🧪 Exemple de structure de table client

```sql
CREATE TABLE client (
  CodeClt VARCHAR(20) PRIMARY KEY,
  Pswd VARCHAR(50)
);
```

## 📂 Fichiers principaux
- **index.html** : formulaire de saisie du code client et mots de passe
- **modifier.php** : script PHP pour vérifier et mettre à jour le mot de passe
- **script.js** : logique JavaScript de validation

## ⚙️ Comment utiliser
1. Assurez-vous d’avoir **PHP** et **MySQL** installés localement.
2. Créez une base de données nommée `bd25247361`.
3. Créez la table client et insérez quelques données test.
4. Lancez le projet via un serveur local (XAMPP, WAMP, etc.).
5. Accédez à la page HTML et testez la mise à jour.
