# Pics project

### Project overview link: 
https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F05%2Fdiagrams.xml

#### Order of diagrams:
Diagram 1,2,3 : Overview
Diagram 5,6,7 

* Structuring by adding components directory within src

### Prop in input field
* onChange in input field in SearchBar is a prop
* This onInputChange is not called whenever render is called but when the input changes
* Diagram 8: More on different props
* Some html elements don't support every callback. For e.g, onChange and onSubmit cannot be used on a div, but you can use onClick on a div
* Convention for Name of the callback is: on + name of the element + event

### Alternate event handler syntax
* It is used when only a single line statement is present

* Diagram 12
### Uncontrolled to Controlled components
* Diagram 9

* Diagram 10: Uncontrolled since the data is coming from DOM OR THE html input tag's hard-coded value 
* Diagram 11: We want the React side to drive the data to our App and not store data in the DOM

* By doing this, certain operations become very easy like User entering text in Uppercase, even though they enter lowercase

### Default behavior of form input's ENTER is to submit to backend server
* Add eventHandler to form: onSubmit

### Common error message in React
* Seen in SearchBar's onFormSubmit's this.state.term
* Diagram 20, 16
* For determining 'this', you don't look at the function, but look at where it is called, i.e, see the lefthand side of dot of drive

### Solution for common cannot read property state of undefined:
* One way is bind the function to the object in the constructor like, this.drive = this.drive.bind(this);
* Convert onFormSubmit to arrow function. They automatically bind the value of 'this' for all the code inside the function
* Third way is within onSubmit use a callback as shown in SearchBar component's onFormSubmit
* In general we use the arrow function

### Take the search term and pass back to the App component
* Diagram 13, 14, 15
* For this, we need to refactor our App component into a class based component
* The prop onSubmit within App component's SearchBar can be anything
* In class based components, to use props we need 'this'

### Loading data to React Application
* Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/redux-code/master/diagrams/06/diagrams.xml
* Diagram 1
* Link to unsplash: https://unsplash.com/developers
* Diagram 04 - reqs
* Diagram 03 - libraries
* axios is preferred
* Unsplash documentation: Location to get the link, Authorization section for auth
* Diagram 04 - async

### Getting notification after request is complete
* One of the way is Promise, an object that is returned whenever axios call is done
* then is called some point in the future when response is obtained

* Another way which is much more easier is async and await
* async on the function
* await on whatever is taking time

### Create ImageList component for displaying images

### Understanding maps
* map returns a brand new Array
* E.g.,numbers.map((num) => num\*10) or numbers.map(num => num\*10)

### Warning message of unique keys when rendering lists
* Each child in a list should have a unique "key" prop
* Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/redux-code/master/diagrams/06/diagrams.xml
* Diagram 07, 08, 09
* Key prop should be added so that only New items are rendered on the DOM 
* Helps in better performance by adding keys
* In the root jsx tag that is being returned in the map statement, add key prop

### Shortening image.id,urls and description in ImageList
* This is done by adding every property within the argument parenthesis
* This is the end of V1 implementation

### Grid css system
* Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/redux-code/master/diagrams/06/diagrams.xml
* Diagram 11
* Add ImageList.css to style
* grid-template-columns creates a set number of columns
* auto-fill: automatically decide how many columns to insert
* minmax: Each columns has a minimum of 250px wide and atmost 1 fr(Max. allocation of space, in this context: every column equally sized)
* Adding grid-auto-rows: 150px in .image-list shrinks the height but if the image is bigger than that, it will exceed that boundary
* Another style is grid-row-end: span 3; this gives 3 cell's space. But even this is a problem
* This is where React comes into play

### React solving grid issue
* Link: https://www.draw.io/#Uhttps://raw.githubusercontent.com/StephenGrider/redux-code/master/diagrams/06/diagrams.xml
* Create a new Component called ImageCard
* The purpose is to show one image by itself
* Diagram 12
* We get the height in vanilla js like document.querySelector('img').clientHeight
* But in React, we do it by using 'ref'
* React Refs: Diagram 13
* We are not assigning to state because it's not going to change over time
* We need to assign Ref to instance variable
* The img tag within render is a jsx tag and it gets eventually converted to a DOM element
* We don't have handle to this jsx tag, so we create refs

### Why clientHeight is 0, when imageRef.current.clientHeight is console logged
* When the component first renders, the instant after it renders, we are logging the imageRef height. But the image itself is not actually loaded, i.e. it is still downloading and loading the image from unsplash
* It is essentially a order of operations thing
* The easy fix is to add event listener