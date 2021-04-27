# `Getting Started with Create React App`

This project is created with  npx create-react-app [Create React App](https://github.com/facebook/create-react-app).

<<<<<<< HEAD
### `As per task requirements I have used below Tech Stack:`

VS Code
Node.Js/NPM
ReactJs / javascript
State based Class Componet, Stateless Function Component, life-cycle hooks, Axios for data fetch, Spread operator, arrow functions ES6

###	`Styling : `
.CSS, styled component(like SCSS), material UI
React-Router
Github / Bitbucket / version control / commit


### `How to Run App:`
1.	Clone the repository
2.	Open project in VS Code
3.	Run NPM Install command weatherapp level directory
4.	Once node module update
5.	Run the NPM Start command to run the app.
6.	App will open in browser.

## `Available Scripts`

In the project directory, you can run:

### `NPM start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



### `How App works:`
	When the MyStore React App loads in the browser, user gets Product List in the Home page, product data is coming from the Aliexpress RapidAPI (live data).
	there is search-bar where user can put search string and search product list is shown below the searchbar.Pagination button is shown as the bottom of the productlist on home page.
	also routing between HOME/CONTACT/ABOUT pages.

##	`Note: API is fetched only once just to reduce the load on web application and improve the speed of web app.`

### `Requirement : 1`
1.	As per requirement the product list is shown in rows.
2.	Table header is shown as given color for background and font color.
3.	Even and odd rows shown as per required color and font.
4.  As a extra I have added the "add to basket" button on each product if future requires that facility, also shown the basket icon as well in left hand side corner.

### `Requirement : 2`
1.	Top of the product list, there is search-bar where user can put search string and search product list is shown below the searchbar.
2.	if user remove the search from searchbar the original product list is shown in home page.

### `Requirement : 3`
1.	Pagination button is shown as the bottom of the productlist on home page.
2.	Due to live productlist update, the pagination buttom would update dynamically.
3.	once user press the button the 5 products will be shown on page wihout refreshing the browser.
4.	There is All Products button as well so user has faciliti to see all products again aftter pagination.

### `ADD ON:-`
1.	React-Router library has been used, so it has three pages all together. It shows on browser with path and routing. HOME/Contct/About/
2.	web app is fully responsive, Laptop screen/Pad screen/ Mobile screen.
3.	Flavour of CSS/Styled Component/ Material UI.
4.	used env process variable to hide the API key for security reasons.


### `Making app:`

-	I have used ReactJs to develop app because it was original requirement and react is giving Single Page Application facility, so `performance` of site is quick responsive and fast.
-	For clear code and future requirements of reusable component, I have used component methodology so in future if requirements go bigger, developer can handle very easily and understands where to change.
-	Also used react-router to route the page. As per requirements app has three pages with routing facility. 
-	Also used process. env concepts so API key cannot be seen as page code source. So `Security` constraint is cover as developer should not show the API key when site will deploy.  




