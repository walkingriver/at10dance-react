import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';

const Students: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton></IonMenuButton>
          <IonTitle>Students</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonIcon slot="start" icon="person-outline"></IonIcon>
              <IonLabel>Last Name, First Name</IonLabel>
              <IonIcon slot="end" icon="eye-outline"></IonIcon>
              <IonIcon slot="end" icon="eye-off-outline"></IonIcon>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Students;
