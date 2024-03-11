import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  earth,
  ellipse,
  home,
  newspaper,
  people,
  person,
  pulse,
  square,
  triangle,
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/customNavBar.css";
import Weather from "./pages/Weather";
import { Gender } from "./pages/Gender";
import AgeDetector from "./pages/AgeDectector";
import { Country } from "./pages/Country";
import WordpressNews from "./pages/WordpressNews";
import { Contact } from "./pages/Contact";
import Index from "./pages/Index";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/index">
            <Index />
          </Route>
          <Route exact path="/weather">
            <Weather />
          </Route>
          <Route exact path="/gender">
            <Gender />
          </Route>
          <Route exact path="/ageDectector">
            <AgeDetector />
          </Route>
          <Route exact path="/">
            <Redirect to="/index" />
          </Route>
          <Route exact path="/country">
            <Country />
          </Route>
          <Route exact path="/wordpress">
            <WordpressNews />
          </Route>
          <Route exact path="/info">
            <Contact />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="gender" href="/gender">
            <IonIcon aria-hidden="true" icon={people} />
          </IonTabButton>
          <IonTabButton tab="weather" href="/weather">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
          <IonTabButton tab="ageDectector" href="/ageDectector">
            <IonIcon aria-hidden="true" icon={pulse} />
          </IonTabButton>
          <IonTabButton tab="country" href="/country">
            <IonIcon aria-hidden="true" icon={earth} />
          </IonTabButton>
          <IonTabButton tab="wordpress" href="/wordpress">
            <IonIcon aria-hidden="true" icon={newspaper} />
          </IonTabButton>
          <IonTabButton tab="info" href="/info">
            <IonIcon aria-hidden="true" icon={person} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
