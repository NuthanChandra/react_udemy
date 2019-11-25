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