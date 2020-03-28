CREATE TABLE  usuarios(
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50) not null,
email VARCHAR(100) not null,
idade INT not null
);

INSERT INTO usuarios(nome, email, idade) VALUES (
    "Luiza Bartels de Oliveira", 
    "boliveira.luiza@gmail.com", 
    27);

    INSERT INTO usuarios(nome, email, idade) VALUES (
    "Hanna Guimarães", 
    "hanna@gmail.com", 
    27),
    (
    "Maria das Dores", 
    "maria@gmail.com", 
    27);

    DELETE FROM usuarios WHERE id = 2;