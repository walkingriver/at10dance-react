import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonCard, IonButtons, IonMenuButton, IonRouterLink } from '@ionic/react';
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
      </IonHeader>
      <IonContent>
        <IonCard>
          <img src="assets/images/classroom.jpg" alt="Classroom"></img>
          <IonCardHeader>
            <IonCardSubtitle>Classroom Attendance Manager</IonCardSubtitle>
            <IonCardTitle>@10Dance</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              @10Dance is an attendance application originally designed to help Sunday School teachers
              keep track of the students in their classes.
      </p>
            <IonRouterLink href="/roster" routerDirection="forward">Go to Roster</IonRouterLink>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;



