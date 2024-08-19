SELECT * FROM membres;
SELECT * FROM messages;
SELECT * FROM roles;
SELECT * FROM sujets;
SELECT * FROM themes;

/*  1. Sélectionner le pseudo, email et date d'inscription des membres dont l'adresse email se termine par ".com" */
/*  2. Sélectionner le pseudo, email et date de naissance des membres dont l'adresse email se termine par ".fr" */
/*  3. Sélectionner le pseudo, email et identifiant du rôle des membres dont l'adresse email contient "@arfp" */
/*  4. Sélectionner le pseudo, email et mot de passe des membres dont l'adresse email ne contient pas "@" */
/*  5 .Sélectionner l'identifiant, le pseudo et l'email des membres nés en 1981 */

/*  6. Sélectionner le pseudo, l'email ainsi que le nom du rôle de tous les membres */
/*  7. Sélectionner le pseudo, l'email ainsi que le nom du rôle de tous les membres qui possèdent le rôle "Utilisateur" */

/*  8. Séléctionner l'identifiant, le libelle et le nom du thème de tous les sujets liés au thème "Javascript"  */
/*  9. Séléctionner le libelle, l'identifiant du thème et le nom du thème de tous les sujets dont le libellé commence par "P"  */
/* 10. Sélectionner l'identifiant, le libelle et le nombre de sujets de chaque thème */

/* 11. Sélectionner le nom de tous les rôles avec le nombre d'utilisateurs par rôle */
/* 12. Sélectionner le nom de tous les rôles associés à au moins 2 utilisateurs */

/* 13. Sélectionner la date de publication et le contenu de tous les messages écrits par l'utilisateur "tutu" triés par date de dépôt du plus récent au plus ancien */ 
/* 14. Sélectionner la date de publication et le contenu de tous les messages écrits par l'utilisateur "toto" dont la date de publication n'est pas "NULL" */ 
/* 15. Sélectionner la date de dépôt, le contenu, le libellé du sujet, le libellé du thème des messages écrits par l'utilisateur "tutu" triés par libellé du sujet puis par pseudo */


/* 16. Afficher TOUS les messages. 
	Pour chaque message : 
	Sélectionner le pseudo, le contenu du messsage, la date de dépôt, le libellé du sujet, le libellé du thème ainsi que nom du rôle de l'utilisateur. 
	Trier le résultat par theme puis par sujet. */ 