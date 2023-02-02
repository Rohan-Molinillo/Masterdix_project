CREATE TABLE user
(
	id             INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	username       VARCHAR(100)        NOT NULL UNIQUE,
	email          VARCHAR(100)        NOT NULL UNIQUE,
	password VARCHAR(100)        NOT NULL,
	role        	VARCHAR(15) NOT NULL DEFAULT 'free'
) engine = InnoDB
  default charset = latin1;

INSERT INTO user (username, email, password, role) VALUES ('Masterdix', 'rohanmolinillo@gmail.com', 'coucoutoi', 'admin');
