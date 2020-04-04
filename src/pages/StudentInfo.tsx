import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonItem, IonLabel, IonInput, IonDatetime } from '@ionic/react';
import React from 'react';
import { Student } from '../core/student';

interface StudentInfoProps {
  student: Student;
}

const StudentInfo: React.FC<Student> = (student) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="StudentInfo"></IonBackButton>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">First Name</IonLabel>
          <IonInput value="student.firstName"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">First Name</IonLabel>
          <IonInput value="student.lastName"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Birth Date</IonLabel>
          <IonInput type="date" value="student.birthDate"></IonInput>
          <IonDatetime displayFormat="MM/DD/YYYY" min="1900-01-01" max="2012-12-31" value="student.birthDate"></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Name</IonLabel>
          <IonInput value="student.parentName"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Email</IonLabel>
          <IonInput type="email" value="student.parentEmail"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Phone</IonLabel>
          <IonInput type="tel" value="student.parentPhone"></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StudentInfo;
