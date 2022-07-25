
<style> 
	center {
		display: flex;
		justify-content: center;
	}
	
	footer {
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: white;
		color: black;
		text-align: center;
	}

</style>


# Public Tax Decisions
#### Project for the Belgian Agency of Domestic Affairs.
<center><img src="resources/Crest_ABB.svg" width="350"></center>

## A brief summary of Lynx

<center><img src="resources/mockup.png" style="size:60%;"></center>

<br/>
LYNX is a linked open data web-based application developed for Agentschap Binnenlands Bestuur (ABB) in collaboration with Open Summer of Code. The web app simplifies the information hierarchy between citizens and their local governments in Flanders and Brussels with the final goal to improve communication transparency in tax information. As the amount of tax data becomes more abundant without a clear and organized structure, citizens find it too difficult to stay up to date with the tax decisions from their local municipality and many are discouraged to do their own research. With LYNX, citizens will be able to consult the latest tax decisions in their local municipalities, as well as compare tax-related information between other municipalities. Thanks to linked open data, this government service will increase citizen engagement in the decision-making process and further improve data-sharing culture between residents and their municipalities.  
<br/>  
  
## Setting up
For setting up a local development environment, you first need to install a pair of dependencies. 
  
### Dependencies
  
  For the backend you will need:
  - Docker

  And for the frontend:
  - NodeJS
  
  
  
### Running and Deploying
  
  For running the backend you can do:
  ```
  cd backend
  docker compose-up
  ```
  
  For running the frontend you can do:
  ```
  cd frontend
  npm install
  npm start
  ```
<br/>

<footer>
	<img src="resources/vo_naakt.jpg" alt="snoep"/><br/>
	This project was medemogelijk gemaakt door de Vlaamse Overheid...  
	<img src="resources/1532593594328.jpeg"/><br/>
	En Open Summer of Code!  
</footer>