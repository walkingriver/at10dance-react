import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButtons, IonMenuButton } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>@10Dance Home</IonTitle>
        </IonToolbar>
      </IonHeader>      <IonContent>
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
