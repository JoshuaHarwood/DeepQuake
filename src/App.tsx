import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {ellipse, logIn, man, search, square, statsChart, triangle, warning} from 'ionicons/icons';
import MyAccount from './tabs/MyAccount';
import ViewRecentQuakes from './tabs/ViewRecentQuakes';
import Stats from './tabs/Stats';

import { Account} from "./components/authentication/Accounts";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Warnings from "./tabs/Warnings";
import Status from "./components/authentication/Status";

const App: React.FC = () => (
    <Account>
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/MyAccount" component={MyAccount} exact={true} />
          <Route path="/ViewRecentQuakes" component={ViewRecentQuakes} exact={true} />
          <Route path="/Stats" component={Stats} />
          <Route path="/Warnings" component={Warnings} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="tab1" href="/ViewRecentQuakes">
            <IonIcon icon={search} />
            <IonLabel>View Recent Quakes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Stats">
            <IonIcon icon={statsChart} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Warnings">
            <IonIcon icon={warning} />
            <IonLabel>Warnings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/MyAccount">
            <IonIcon icon={man} />
            <IonLabel>My Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    </Account>
);

export default App;
