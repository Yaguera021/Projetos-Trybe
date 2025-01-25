DROP DATABASE IF EXISTS SpotifyClone;
CREATE SCHEMA IF NOT EXISTS SpotifyClone;

CREATE TABLE IF NOT EXISTS SpotifyClone.planos (
  id_plano INT NOT NULL AUTO_INCREMENT,
  nome_plano VARCHAR(45) NOT NULL,
  valor DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (id_plano)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.usuario (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  data_assinatura DATE NOT NULL,
  id_plano INT NOT NULL,
  PRIMARY KEY (id_usuario),
  FOREIGN KEY (id_plano) REFERENCES SpotifyClone.planos (id_plano)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.artistas (
  id_artista INT NOT NULL AUTO_INCREMENT,
  nome_artista VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_artista)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.album (
  id_album INT NOT NULL AUTO_INCREMENT,
  nome_album VARCHAR(100) NULL,
  id_artista INT NOT NULL,
  PRIMARY KEY (id_album),
  FOREIGN KEY (id_artista) REFERENCES SpotifyClone.artistas (id_artista)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.cancoes (
  id_cancoes INT PRIMARY KEY AUTO_INCREMENT,
  cancoes_nome VARCHAR(100) NOT NULL,
  cancoes_duracao INT NOT NULL,
  id_album INT NOT NULL,
  id_artista INT NOT NULL,
  FOREIGN KEY (id_album) REFERENCES SpotifyClone.album (id_album),
  FOREIGN KEY (id_artista) REFERENCES SpotifyClone.artistas (id_artista)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.historico (
  id_historico INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_cancao INT NOT NULL,
  data_reproducao DATETIME NOT NULL,
  PRIMARY KEY (id_historico),
  CONSTRAINT `uk_historico_usuario_cancao` UNIQUE (id_usuario, id_cancao),
  FOREIGN KEY (id_usuario) REFERENCES SpotifyClone.usuario (id_usuario),
  FOREIGN KEY (id_cancao) REFERENCES SpotifyClone.cancoes (id_cancoes)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS SpotifyClone.seguindo_artistas (
  id_usuario INT NOT NULL,
  id_artista INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES SpotifyClone.usuario (id_usuario),
  FOREIGN KEY (id_artista) REFERENCES SpotifyClone.artistas (id_artista),
  CONSTRAINT PRIMARY KEY (id_usuario, id_artista)
)ENGINE = InnoDB;


INSERT INTO SpotifyClone.planos (nome_plano, valor)
VALUES 
('gratuito', 0.00),
('familiar', 7.99),
('universitário', 5.99),
('pessoal', 6.99);


INSERT INTO SpotifyClone.usuario (nome, idade, data_assinatura, id_plano)
  VALUES 
('Barbara Liskov', 82, '2019-10-20', 1),
('Robert Cecil Martin', 58, '2017-01-06', 1),
('Ada Lovelace', 37, '2017-12-30', 2),
('Martin Fowler', 46, '2017-01-17', 2),
('Sandi Metz', 58, '2018-04-29', 2),
('Paulo Freire', 19, '2018-02-14', 3),
('Bell Hooks', 26, '2018-01-05', 3),
('Christopher Alexander', 85, '2019-06-05', 4),
('Judith Butler', 45, '2020-05-13',4),
('Jorge Amado', 58, '2017-02-17',4);

INSERT INTO SpotifyClone.artistas (nome_artista)
VALUES 
('Beyoncé'),
('Queen'),
('Elis Regina'),
('Baco Exu do Blues'),
('Blind Guardian'),
('Nina Simone');

INSERT INTO SpotifyClone.album (id_album, nome_album, id_artista)
VALUES 
  (1, 'Renaissance', 1),
  (2, 'Jazz', 2),
  (3, 'Hot Space', 2),
  (4, 'Falso Brilhante', 3),
  (5, 'Vento de Maio', 3),
  (6, 'QVVJFA?', 4),
  (7, 'Somewhere Far Beyond', 5),
  (8, 'I Put A Spell On You', 6);


INSERT INTO SpotifyClone.cancoes (cancoes_nome,cancoes_duracao,id_album,id_artista)
VALUES
  ('Break My Soul', 279, 1, 1),
  ('Virgos Groove', 369, 1, 1),
  ('Alien Superstar', 116, 1, 1),
  ('Dont Stop Me Now', 203, 2, 2),
  ('Under Pressure', 152, 3, 2),
  ('Como Nossos Pais', 105, 4, 3),
  ('O Medo de Amar é o Medo de Ser Livre', 207, 5, 3),
  ('Samba em Paris', 267, 6, 4),
  ('The Bards Song', 244, 7, 5),
  ('Feeling Good', 100, 8, 6);

INSERT INTO SpotifyClone.historico (id_usuario, id_cancao, data_reproducao)
VALUES
(1, 8, '2022-02-28 10:45:55'),
(1, 2, '2020-05-02 05:30:35'),
(1, 10, '2020-03-06 11:22:33'),
(2, 10, '2022-08-05 08:05:17'),
(2, 7, '2020-01-02 07:40:33'),
(3, 10, '2020-11-13 16:55:13'),
(3, 2, '2020-12-05 18:38:30'),
(4, 8, '2021-08-15 17:10:10'),
(5, 8, '2022-01-09 01:44:33'),
(5, 5, '2020-08-06 15:23:43'),
(6, 7, '2017-01-24 00:31:17'),
(6, 1, '2017-10-12 12:35:20'),
(7, 4, '2011-12-15 22:30:49'),
(8, 4, '2012-03-17 14:56:41'),
(9, 9, '2022-02-24 21:14:22'),
(10, 3, '2015-12-13 08:30:22');

INSERT INTO SpotifyClone.seguindo_artistas (id_usuario, id_artista)
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(4, 4),
(5, 5),
(5, 6),
(6, 6),
(6, 1),
(7, 6),
(9, 3),
(10, 2);
