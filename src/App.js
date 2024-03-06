import {Switch, Route} from 'react-router-dom' // Import BrowserRouter as Router
import ProgramCard from './Components/ProgramCard' // Import ProgramCard component
import EachProgramValue from './Components/EachProgramValue'
import NotFound from './Components/NotFound'
import './App.css'

// Define the App component
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={ProgramCard} />
      <Route exact path="/courses/:id" component={EachProgramValue} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
