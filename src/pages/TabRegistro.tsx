import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import './TabLogin.css';

const TabRegistro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registrar Agricultor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonTitle size="small">Seja muito bem vindo, Placeholder !</IonTitle>
      
        <IonHeader collapse="condense">
          <IonTitle size="small">Seja muito bem vindo, Placeholder !</IonTitle>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default TabRegistro;
