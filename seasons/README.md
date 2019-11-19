# Seasons 
https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F04%2Fdiagrams.xml

Git commits: Check GitLens is vscode for easy access of git logs

Diagram 6 timeline
* The functional component doesn’t wait, i.e. if we return <div>Latitude: something obtained from position</div> it won’t wait for the geolocation API but returns immediately 
* The solution for this is class based components

Diagram 7,9: Class components
* JS inheritance is prototype inheritance and the classes are different from Java or Ruby
* Render method is a requirement(i.e., it has to be defined)

Diagram 10: Rules of State
* setState is used instead of direct assignment

What is State?
* It is a JS object which contains data relevant to a component

Diagram 11: Flow diagram of state

* setState is additive as seen in updating the errorMessage

Diagram 12: Different situations

Diagram 13: Component Lifecycle
* Before componentDidUpdate, render method will be called. It's not shown in 13d.

Diagram 15: Purpose of using different Lifecycle methods
* Best practice to do data loading is componentDidMount rather than constructor

Diagram 14: Rarely used Lifecycle methods

* this.state inside constructor can be refactored to only state outside the constructor. Try babeljs.io
* When state changes, even child component within the render method will be re-rendered

Diagram 17: Month data for winter and summer

* Template string by placing backtick as shown in SeasonDisplay component

### Refactoring and styling:
* Configuration object as shown in SeasonDisplay file's seasonConfig
* Styling for SeasonDisplay appropriately named 
* Spinner component for loading, and default props a more elegant way to specify default values