import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonActionSheet, IonButtons, IonButton, IonAlert, IonToast } from '@ionic/react';
import { eyeOffOutline, personOutline, eye, ellipsisHorizontalOutline, chevronForwardOutline, trash } from 'ionicons/icons';
import React, { useState } from 'react';
import { Student } from '../core/student';
import { Presence } from '../core/presence';
import { useStudents } from '../core/student-hook';

const Roster: React.FC = () => {
  const emptyStudent: Student = {
    id: '',
    firstName: '',
    lastName: ''
  };
  const [students, setStudents] = useStudents();
  const [selectedStudent, setSelectedStudent] = useState(emptyStudent);

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

function deleteStudent(student: Student) {
  setStudents(students.filter(x => x.id !== student.id));
  setShowDeleteToast(true);
}

  function clickStudent(student: Student) {
    setSelectedStudent(student);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Class Roster</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {students.map((student) => {
            return (
              <IonItemSliding key={student.id}>
                <IonItem>
                  <IonIcon slot="start" icon={personOutline}></IonIcon>
                  <IonLabel>{student.lastName}, {student.firstName}</IonLabel>
                  {student.status === Presence.Present && <IonIcon slot="end" icon={eye}></IonIcon>}
                  {student.status === Presence.Absent && <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>}
                  <IonButtons slot="end">
                    <IonButton onClick={() => clickStudent(student)}>
                      <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline}></IonIcon>
                    </IonButton>
                    <IonButton routerLink={`/student/${student.id}`} routerDirection="forward">
                      <IonIcon slot="icon-only" icon={chevronForwardOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => deleteStudent(student)}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            );
          })}
        </IonList>
        <IonActionSheet
          isOpen={!!selectedStudent.id}
          header={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
          onDidDismiss={() => setSelectedStudent(emptyStudent)}
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => { setShowDeleteAlert(true); }
            }, {
              text: 'Mark Present',
              icon: eye,
              handler: () => { selectedStudent.status = Presence.Present; }
            }, {
              text: 'Mark Absent',
              icon: eyeOffOutline,
              handler: () => { selectedStudent.status = Presence.Absent; }
            }, {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel'
            }]}
        />

<IonAlert
  isOpen={showDeleteAlert}
  onDidDismiss={() => setShowDeleteAlert(false)}
  header="Delete this student?"
  message="This operation cannot be undone."
  subHeader={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
  buttons={[
    {
      text: 'Delete',
      handler: () => { deleteStudent(selectedStudent); }
    }, {
      text: 'Never mind',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ]} />

<IonToast
  isOpen={showDeleteToast}
  onDidDismiss={() => setShowDeleteToast(false)}
  message="Student has been deleted."
  duration={3000}
  position="top"
/>
      </IonContent>
    </IonPage>
  );
};

export default Roster;
