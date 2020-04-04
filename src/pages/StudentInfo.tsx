import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonItem, IonLabel, IonInput, IonDatetime } from '@ionic/react';
import React from 'react';
import { Student } from '../core/student';
import { useStudents } from '../core/student-hook';
import { RouteComponentProps } from 'react-router';

const emptyStudent: Student = { id: '0', firstName: '', lastName: '', parentEmail: '', parentName: '', parentPhone: '' };

interface StudentInfoPageProps extends RouteComponentProps<{
  id: string;
}> {}

const StudentInfo: React.FC<StudentInfoPageProps> = ({ match }) => {
  console.log('StudentID: ', match.params);
  const studentId = match.params.id;
  const [students] = useStudents();
  const student = students.find(x => x.id === studentId) || emptyStudent;
  const pageTitle = `${student.firstName} ${student.lastName} (${studentId})`

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="StudentInfo"></IonBackButton>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="stacked">First Name</IonLabel>
          <IonInput value={student.firstName}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">First Name</IonLabel>
          <IonInput value={student.lastName}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Birth Date</IonLabel>
          <IonInput type="date" value={student.birthDate}></IonInput>
          <IonDatetime displayFormat="MM/DD/YYYY" min="1900-01-01" max="2012-12-31" value={student.birthDate}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Name</IonLabel>
          <IonInput value={student.parentName}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Email</IonLabel>
          <IonInput type="email" value={student.parentEmail}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Parent's Phone</IonLabel>
          <IonInput type="tel" value={student.parentPhone}></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default StudentInfo;
