USE db_architecte;

SELECT * FROM projets;
SELECT * FROM clients;
SELECT * FROM adresses;
SELECT * FROM employes;
SELECT * FROM fonctions;
SELECT * FROM participer;
SELECT * FROM type_clients;
SELECT * FROM type_projets;
SELECT * FROM type_travaux;

EXPLAIN SELECT * FROM employes NATURAL JOIN projets

DESCRIBE adresses;
SELECT * FROM employes INNER JOIN projets ON projets.emp_matricule = employes.emp_matricule;
SELECT * FROM employes INNER JOIN projets ON projets.emp_matricule = employes.emp_matricule 
ORDER BY projet_date_depot LIMIT 2 OFFSET 3;

SELECT * FROM employes LEFT JOIN projets ON projets.emp_matricule = employes.emp_matricule;

SELECT * FROM projets RIGHT JOIN employes ON projets.emp_matricule = employes.emp_matricule;