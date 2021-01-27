CREATE  DATABASE pruebadb;
GO
USE pruebadb;
GO

DROP TABLE IF EXISTS dbo.news;
DROP TABLE IF EXISTS dbo.weather_description;
DROP TABLE IF EXISTS dbo.current_weather;
DROP TABLE IF EXISTS dbo.History;
CREATE TABLE History (
	  hist_id int identity (1,1) NOT NULL,	
      hist_city varchar(255) NOT NULL,
	  PRIMARY KEY (hist_id)
);
CREATE TABLE current_weather (
	  cuwe_id int identity (1,1) NOT NULL,
	  hist_id int ,
      cuwe_observation_time varchar(50),
	  cuwe_temperature float(53),
	  cuwe_wind_speed float(53),
	  cuwe_wind_degree int,
	  cuwe_pressure int,
	  cuwe_humadity int,
	  cuwe_cloud_cover int,
	  cuwe_fells_like float(53),
	  cuwe_visibility int,	  
	  PRIMARY KEY (cuwe_id),
	  FOREIGN KEY (hist_id) REFERENCES History (hist_id)
);

CREATE TABLE weather_description (
	  wede_id int identity (1,1) NOT NULL,
	  cuwe_id int NOT NULL,	  
      wede_value varchar(50),	  
	  PRIMARY KEY (wede_id),
	  FOREIGN KEY (cuwe_id) REFERENCES current_weather (cuwe_id)
);

CREATE TABLE news (
	  news_id int identity (1,1) NOT NULL,
	  hist_id int NOT NULL,
	  news_author varchar(100),	  
      news_title varchar(250),	  
      news_description varchar(500),	  
      news_url varchar(200),	  
      news_url_image varchar(250),	  
      news_published_at varchar(100),	  
      news_content varchar(1000),	  
	  PRIMARY KEY (news_id),
	  FOREIGN KEY (hist_id) REFERENCES History (hist_id)
);