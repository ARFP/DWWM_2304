USE db_forums;

INSERT INTO roles 
(role_id, role_nom)
VALUES
(1,'Administrateur'),
(2,'Moderateur'),
(3,'Utilisateur');

INSERT INTO themes 
(theme_id, theme_libelle) 
VALUES 
(1, 'Web'),
(2, 'Javascript'),
(3, 'PHP');



INSERT INTO sujets
(sujet_id, sujet_libelle, theme_id)
VALUES 
(1, 'PHP et les bases de données', 1),
(2, 'Les tableaux - Manual', 1),
(3, 'Protocole SOAP et JMS', 2),
(4, 'REST et SOAP: Quand les utiliser ?', 2),
(5, "Sujets avec l'étiquette API-REST", 3);


INSERT INTO membres 
(membre_id, membre_pseudo, membre_motdepasse, membre_email, membre_date_inscription, membre_banni, membre_date_de_naissance, role_id)
VALUES
(1,'toto','toto1','toto@arfp.fr','2023-01-31 22:00:31',0,'1980-01-31',1),
(2,'titi','titi2','titi@arfp.fr','2023-02-15 14:00:18',0,'1983-05-22',2),
(3,'tutu','tutu3','tutu@arfp.fr','2023-03-31 11:00:31',0,'1985-01-31',3);

INSERT INTO membres
(membre_id,membre_pseudo,membre_motdepasse,membre_email,membre_date_inscription,membre_banni,membre_date_de_naissance,role_id) 
VALUES
(4,'tinkiwisky','123T','wisky@.com','2023-01-15 10:12:05',0,'1981-12-05',3),
(5,'lalahop','123T','lala.com','2023-03-15 10:14:05',0,'1981-08-02',3),
(6,'dipsiaïe','123T','dipsisi.com','2023-01-11 08:12:05',0,'1981-10-16',3);


INSERT INTO messages 
(message_id, message_contenu, message_date_depot, message_date_publication, sujet_id, membre_id)
VALUES 
(2, "Bonjour ça va ? C'est bien les bases de données ?", "2022-01-01 13:20:50", "2022-01-01 13:21:00", 1, 1), 
(3, "Bonjour oui et toi ? Oui :)", "2022-01-02 09:00:00", "2022:01:02 09:01:00", 1, 2), 
(5, "Oui, bien. Top alors :)", "2022-01-03 09:00:00", "2022-01-04 09:01:00", 1, 3);

INSERT INTO messages
(message_id, message_contenu, message_date_depot, message_date_publication, sujet_id, membre_id)
VALUES
(1, 'Bonjoure !', '1955-01-01 00:00:00', '1955-01-01 00:00:01', 3, 3),
(4, 'Sava ?', '1956-01-02 02:45:12', '1956-01-02 02:45:13', 3, 3),
(6, 'Orevouare !' , '2023-07-31 15:09:00', '2023-07-31 15:12:00', 3, 3);

INSERT INTO messages
(message_id, message_contenu, message_date_depot, sujet_id, membre_id)
VALUES
(7, 'msg_contenu_1', NOW(), 1, 1),
(8, 'msg_contenu_2', NOW(), 2, 4),
(9, 'msg_contenu_3', NOW(), 1, 1);


INSERT INTO mots_cles (mot_cle)
VALUES
("Serveur"),
("métadonnées"),
("Microsoft"),
("IBM"),
("Langage"),
("Serveur web"),
("URL "),
("Backend"),
("HTML"),
("Fonction");

/*
INSERT INTO référer
(mot_id, sujet_id)
VALUES 
();
*/
