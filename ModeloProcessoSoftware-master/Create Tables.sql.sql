CREATE TABLE 'talentodigital'.'modelo' ( 'id' INT NOT NULL AUTO_INCREMENT , 
'nome' VARCHAR NOT NULL , 'sigla' VARCHAR NOT NULL , 'descricao' TEXT NULL , PRIMARY KEY ('id') )

CREATE TABLE 'talentodigital'.'nivel_maturidade' ( 'id' INT NOT NULL AUTO_INCREMENT , 'sigla' VARCHAR NOT NULL , 
'nome' VARCHAR NOT NULL , 'descricao' TEXT NOT NULL , 'id_modelo' INT NOT NULL , PRIMARY KEY ('id') )

CREATE TABLE 'talentodigital'.'categoria' 
( 'id' INT NOT NULL AUTO_INCREMENT , 'nome' VARCHAR(80) NOT NULL , 'id_modelo' INT NOT NULL , PRIMARY KEY ('id') )

CREATE TABLE 'talentodigital'.'nivel_capacidade' ( 'id' INT NOT NULL AUTO_INCREMENT , 
'sigla' VARCHAR(80) NOT NULL , 'nome' VARCHAR(80) NOT NULL , 'descricao' TEXT NOT NULL , 'id_modelo' INT NOT NULL )

CREATE TABLE 'talentodigital'.'meta_generica' ( 'id' INT NOT NULL AUTO_INCREMENT , 
'sigla' VARCHAR(80) NOT NULL , 'nome' VARCHAR(80) NOT NULL , 
'descricao' INT NOT NULL , 'id_modelo' INT NOT NULL , 'id_nivelcapacidade' INT NOT NULL , PRIMARY KEY ('id') )

CREATE TABLE 'modelos'.'produtotrabalho' ( 
'id' INT(10) NOT NULL AUTO_INCREMENT , 
'nome' VARCHAR(30) NOT NULL ) 
ENGINE = MyISAM

CREATE TABLE 'talentodigital'.'produto_trabalho' ( 'id' INT NOT NULL AUTO_INCREMENT , 'nome' VARCHAR(50) NOT NULL , 'id_modelo' INT NOT NULL )

CREATE TABLE 'talentodigital'.'pratica_especifica' ( 
'id' INT NOT NULL AUTO_INCREMENT , 
'sigla' VARCHAR(50) NOT NULL , 'nome' VARCHAR(80) NOT NULL , 'descricao' TEXT NOT NULL , 
'id_modelo' INT NOT NULL , 'id_produtotrabalho' INT NOT NULL , PRIMARY KEY ('id') ) 

CREATE TABLE 'talentodigital'.'meta_especifica' ( 'id' INT NOT NULL AUTO_INCREMENT , 'nome' VARCHAR(80) NOT NULL , 
'sigla' VARCHAR(50) NOT NULL , 
'descricao' TEXT NOT NULL , 'id_modelo' INT NOT NULL , 'id_praticaespecifica' INT NOT NULL , PRIMARY KEY ('id') )

CREATE TABLE 'talentodigital'.'area_processo' ( 'id' INT NOT NULL , 'sigla' VARCHAR(50) NOT NULL , 'nome' VARCHAR(80) NOT NULL , 
'descricao' DATE NOT NULL , 'id_modelo' INT NOT NULL , 
'id_categoria' INT NOT NULL , 'id_nivelmaturidade' INT NOT NULL , 'id_metaespecifica' INT NOT NULL , PRIMARY KEY ('id') )