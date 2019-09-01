Hi Ayenda, i want to share with you how I solved the test, is based on the screenshots included with the test specification. 
I tried to include every aspect that were expected to be included. 
I create the project using create-react-app script, the folder structure is the one i use for almost every big proyect with react and react native, this folder structure allows me to share different components and funcitonalities from React and React native, avoiding re-write from scratch a lot of code. 

Any comments or aspects to improve are totally welcome
# Thanks!


### Access
Heroku published app: [https://frozen-hamlet-97699.herokuapp.com/](https://frozen-hamlet-97699.herokuapp.com/)

### Installation
```
# Clone
git clone https://github.com/jako-hub/rubity.git
cd rubity
yarn install
yarn start-dev
```
> Now open the browser: 
http://localhost:3000/


### Run the tests
```
# Move to the project root.
yarn test
# Then press a
```
### Folder structure and files explanation
```
|_ src
    |_ config               # Application configuration files
    |      |_ endpoints     # I put all the paths from an api in a single file. 
    |      |_ routes        # I put all the application routes in a single file
    | 
    |_ core
    |      |_ Navigation    # I only write here components that execute important and shared logic.
    | 
    |_ main                 # Inside this directory is where all my application lies. 
    |      |_ components
    |      |        |_ ...  # Inside this directory lies all the app small pieces that execute specific  tasks
    |      |_ screens 
    |      |        |_ ...  # A screen is a component which only responsibility is connect other components with a route. 
    |      |_ layouts
    |               |_ ...  # The layouts create common wrappers for the screens.
    |
    |_ providers            # the providers are HOC (https://es.reactjs.org/docs/higher-order-components.html), that allows to connect with redux states and actions.
    | 
    |_ repositories         # The repositories are functions to share with another components.
    |_ services             # The services are objects that allows to execute important functionality (Api requests, sessions and so on )
    |
    |_ store                # Here lies the redux states and actions
    |_ styles               # Here you can place common styles for the application. 
    |_ utils                # Hre you can place common and simple library functions ( string replacers, validations, what you want)
```
