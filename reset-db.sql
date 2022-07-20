DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
 `id` int NOT NULL AUTO_INCREMENT,
 `username` VARCHAR(50) NOT NULL,
 `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `users` (username, email, password)
VALUES ('admin', 'admin@tripaglace.fr', 'verystrongpassword'), ('toto', 'toto@alaplage.com', 'superpassword'), ('baba', 'baba@orhum.com', 'strongpassword');

DROP TABLE IF EXISTS `parlour`;

CREATE TABLE `parlour` (
 `id` int NOT NULL AUTO_INCREMENT,
 `shopname` VARCHAR(50) NOT NULL,
 `address` VARCHAR(100) NOT NULL,
 `zip` VARCHAR(6) NOT NULL,
 `city` VARCHAR(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `parlour` (shopname, address, zip, city)
VALUES ('Mon petit Glacier', '2 rue Delandine', '69004', 'Lyon'), ('Mon grand Glacier', '17 rue Laroute', '69005', 'Lyon'), ('Mon géant Glacier', '59 rue Artichaud', '69001', 'Lyon');

DROP TABLE IF EXISTS `favourites`;

CREATE TABLE `favourites` (
 `user_id` INT NULL,
 `parlour_id` INT NULL,
 CONSTRAINT `fk_Favourites_user` FOREIGN KEY (`parlour_id`) REFERENCES `parlour` (`id`),
 CONSTRAINT `fk_Favourites_parlour` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `favourites` (user_id, parlour_id)
VALUES ('2' ,'1');



