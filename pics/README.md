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