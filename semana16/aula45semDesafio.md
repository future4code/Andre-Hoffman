```
1)a)Primary Key para garantir unicidade e prioridade
Not Null para impedir que seja deixado em branco
Date para indicar data e Varchar para representar letras e números
b)SHOW DATABASES mostra onde ficam as tables
SHOW TABLES mostra as tables 
c)São mostradas as colunas Field,Type,Null,Key e Default.
Representam a estrutura da table, como os dados devem ser colocados,
sem mostrá-los.

2)a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
b)Erro 1062. Entrada duplicada para a primary key,
que não pode ser repetida

2)e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

3)e)
error code 1054: coluna nome desconhecida. Deveria 
ter sido passado name

4)b)
SELECT * FROM Actor
WHERE (name LIKE NOT "A%" ) AND salary > 350000

c)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" )

5)
a)
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
  "2006-01-06",
  7
),
(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
  "2012-12-27",
  10
),
(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce", 
  "2017-11-02",
  8
),
(
  "004", 
  "Bacurau",
  "Cidade no interior do Brasil com alguns acontecimentos únicos", 
  "2019-01-01",
  10
);

6)
a)
SELECT id,title,rating FROM Movie
WHERE id = 001

c)
SELECT id,title,rating,synopsis FROM Movie
WHERE rating>=7;

7)
c) SELECT * FROM Movie 
WHERE data < ”2020-05-04” 
```