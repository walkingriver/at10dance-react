import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Classroom Attendance Manager</IonCardSubtitle>
            <IonCardTitle>@10Dance</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              @10Dance is an attendance application originally designed to help Sunday School teachers
              keep track of the students in their classes.
      </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
