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
import {
  bonfireSharp,
  ellipse,
  logIn,
  man, manSharp,
  mapOutline, mapSharp, newspaperOutline, newspaperSharp,
  pieChartOutline, pieChartSharp,
  search,
  square,
  statsChart,
  triangle,
  warning
} from 'ionicons/icons';
import MyAccount from './tabs/MyAccount';
import ViewRecentQuakes from './tabs/RecentQuakes';
import Stats from './tabs/Stats';
import Prediction from './tabs/Prediction';

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

const App: React.FC = () => (
    <Account>
      <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/MyAccount" component={MyAccount} exact={true} />
          <Route path="/RecentQuakes" component={ViewRecentQuakes} exact={true} />
          <Route path="/Stats" component={Stats} />
          <Route path="/Warnings" component={Warnings} />
          <Route path="/Prediction" component={Prediction} />
          <Route path="/" render={() => <Redirect to="/MyAccount" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="tab1" href="/RecentQuakes">
            <IonIcon icon={mapSharp} />
            <IonLabel>Recent Quakes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Stats">
            <IonIcon icon={pieChartSharp} />
            <IonLabel>Stats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Warnings">
            <IonIcon icon={newspaperSharp} />
            <IonLabel>Warnings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/Prediction">
            <IonIcon icon={bonfireSharp} />
            <IonLabel>Predictions</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/MyAccount">
            <IonIcon icon={manSharp} />
            <IonLabel>My Account</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
    </Account>
);

export default App;
