CREATE  DATABASE pruebadb;
GO
USE pruebadb;
GO
DROP TABLE IF EXISTS dbo.History;
CREATE TABLE History (
	  hist_id int identity (1,1) NOT NULL,	
      hist_city varchar(255) NOT NULL,
	  PRIMARY KEY (hist_id)
);