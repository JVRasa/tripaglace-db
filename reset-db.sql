DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
 `id` int NOT NULL AUTO_INCREMENT,
 `username` VARCHAR(50) NOT NULL,
 `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (username, email, password)
VALUES ('admin', 'admin@tripaglace.fr', 'verystrongpassword'), ('toto', 'toto@alaplage.com', 'superpassword'), ('baba', 'baba@orhum.com', 'strongpassword');

DROP TABLE IF EXISTS `parlours`;

CREATE TABLE `parlours` (
 `id` int NOT NULL AUTO_INCREMENT,
 `shopname` VARCHAR(50) NOT NULL,
 `address` VARCHAR(100) NOT NULL,
 `zip` VARCHAR(6) NOT NULL,
 `city` VARCHAR(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `parlours` (shopname, address, zip, city)
VALUES ('Mon petit Glacier', '2 rue Delandine', '69004', 'Lyon'), ('Mon grand Glacier', '17 rue Laroute', '69005', 'Lyon'), ('Mon géant Glacier', '59 rue Artichaud', '69001', 'Lyon');

DROP TABLE IF EXISTS `favourites`;

CREATE TABLE `favourites` (
 `id` int NOT NULL AUTO_INCREMENT,
 `user_id` INT NOT NULL,
 `parlour_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`parlour_id`) REFERENCES `parlours` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `favourites` (user_id, parlour_id)
VALUES (1, 1);

DROP TABLE IF EXISTS `flavours`;

CREATE TABLE `flavours` (
 `id` int NOT NULL AUTO_INCREMENT,
 `flavourname` VARCHAR(100) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `flavours` (flavourname)
VALUES ('Banane'), ('Chocolat'), ('Fraise'), ('Vanille'), ('Citron'), ('Pistache'), ('Noisette');

DROP TABLE IF EXISTS `menu`;

CREATE TABLE `menu` (
 `id` int NOT NULL AUTO_INCREMENT,
 `parlour_id` INT NULL,
 `flavour_id` INT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`parlour_id`) REFERENCES `parlours` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`flavour_id`) REFERENCES `flavours` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `menu` (parlour_id, flavour_id)
VALUES (1, 1), (1, 2), (1, 3), (2, 1), (2, 4), (3, 5), (3, 6);

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
 `id` int NOT NULL AUTO_INCREMENT,
 `message` VARCHAR(200) NOT NULL,
 `user_id` INT NOT NULL,
 `parlour_id` INT NOT NULL,
 PRIMARY KEY (`id`),
 FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
 FOREIGN KEY (`parlour_id`) REFERENCES `parlours` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reviews` (message, user_id, parlour_id)
VALUES ("C'était trop bon!!", 2, 1), ("J'ai adoré", 2, 2), ("Miam", 3, 3);
