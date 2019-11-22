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
* Convention for Name of the callback is: on<name of the element><event>