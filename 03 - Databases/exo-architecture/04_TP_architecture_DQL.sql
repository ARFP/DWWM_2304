USE db_architecte;

/* 1. Sélectionner l'identifiant, le nom de tous les clients dont le numéro de téléphone commence par '04' */
SELECT client_ref,client_nom,client_telephone
FROM clients
WHERE client_telephone LIKE '04%';

/* 2. Sélectionner l'identifiant, le nom et le type de tous les clients qui sont des particuliers */
SELECT client_ref,client_nom,clients.type_client_id,type_client_libelle
FROM clients JOIN type_clients 
ON clients.type_client_id = type_clients.type_client_id
WHERE type_client_libelle <> 'Particulier' AND type_client_libelle <> 'promoteur';
/*WHERE type_client_libelle NOT IN ('Particulier','promoteur');*/

/* 3. Sélectionner l'identifiant, le nom et le type de tous les clients qui ne sont pas des particuliers */


/* 4. Sélectionner les projets qui ont été livrés en retard */
SELECT p.projet_ref,p.projet_date_fin_prevue,p.projet_date_fin_effective
FROM projets p
WHERE p.projet_date_fin_effective > p.projet_date_fin_prevue
AND p.projet_date_fin_effective IS NOT NULL;

/* 5. Sélectionner la date de dépôt, la date de fin prévue, les superficies, le prix de tous les projets 
	avec le nom du client et le nom de l'architecte associés au projet */
	
	SELECT  projets.projet_date_depot, projets.projet_date_fin_prevue, projets.projet_superficie_totale, projets.projet_superficie_batie,
	projets.projet_prix, clients.client_nom, employes.emp_nom
	FROM projets, clients, employes
	WHERE projets.client_ref = clients.client_ref AND employes.emp_matricule = projets.emp_matricule ; /*  AND employes.fonction_id = fonctions.fonction_id
	AND fonctions.fonction_nom = "Architecte"; */
	
	SELECT projets.projet_date_depot, projets.projet_date_fin_prevue, projets.projet_superficie_totale, projets.projet_superficie_batie,
	projets.projet_prix, clients.client_nom, employes.emp_nom
	FROM projets
	JOIN clients ON clients.client_ref = projets.client_ref 
	JOIN employes ON employes.emp_matricule = projets.emp_matricule; 

	
/* 6. Sélectionner tous les projets (dates, superficies, prix) avec le nombre d'intervenants autres que le client et l'architecte */

SELECT ;

/* 7. Sélectionner les types de projets avec, pour chacun d'entre eux, le nombre de projets associés et le prix moyen pratiqué */


/* 8. Sélectionner les types de travaux avec, pour chacun d'entre eux, la superficie du projet la plus grande */


/* 9. Sélectionner l'ensemble des projets (dates, prix) avec les informations du client (nom, telephone, adresse),
le type de travaux et le type de projet. */

SELECT
	p.projet_date_depot,
	p.projet_date_fin_prevue,
	p.projet_date_fin_effective,
	p.projet_prix,
	
	c.client_nom,
	c.client_telephone,
	
	a.adresse_code_postal,
	
	tt.type_travaux_libelle,
	
	tp.type_projet_libelle
FROM projets AS p
	JOIN clients AS c ON p.client_ref = c.client_ref
	JOIN adresses AS a ON c.adresse_id = a.adresse_id
	JOIN type_projets AS tp ON p.type_projet_id = tp.type_projet_id
	JOIN type_travaux AS tt ON p.type_travaux_id = tt.type_travaux_id;

/* 10. Sélectionner les projets dont l'adresse est identique au client associé */