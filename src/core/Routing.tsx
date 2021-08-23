import { Redirect, Route, Switch } from "react-router-dom";
import OfferCalendar from "../features/OfferCalendar/OfferCalendar";


const Routing = () => {
  return (
    <Switch>
      <Route path="/calendar">
        <OfferCalendar />
      </Route>
      <Redirect to={{ pathname: "/calendar" }} />
    </Switch>
  )
}

export default Routing;