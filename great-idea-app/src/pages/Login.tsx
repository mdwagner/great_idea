import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={() => history.push('/welcome')}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
