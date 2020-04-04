import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonActionSheet } from '@ionic/react';
import { eyeOffOutline, eyeOutline, personOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { Student } from '../core/student';
import { Presence } from '../core/presence';
import { useStudents } from '../core/student-hook';


const Students: React.FC = () => {
  const emptyStudent: Student = { id: '', firstName: '', lastName: '' };
  const [students, addStudent, removeStudent] = useStudents();
  const [selectedStudent, setSelectedStudent] = useState(emptyStudent);
  const [showActionSheet, setShowActionSheet] = useState(false);

  function deleteStudent(student: Student) {
    removeStudent();
  }

  async function markAbsent(student: Student) {
    student.status = Presence.Absent;
  }

  async function markPresent(student: Student) {
    student.status = Presence.Present;
  }

  async function studentDetails(student: Student) {
    // this.router.navigateByUrl(`/student-info/${student.id}`);
  }

  function clickStudent(student: Student) {
    setSelectedStudent(student);
    setShowActionSheet(true);
  }


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
          {students.map((student) => {
            return (
              <IonItemSliding key={student.id}>
                <IonItem onClick={() => clickStudent(student)}>
                  <IonIcon slot="start" icon={personOutline}></IonIcon>
                  <IonLabel>{student.lastName}, {student.firstName}</IonLabel>
                  {student.status === Presence.Present && <IonIcon slot="end" icon={eyeOutline}></IonIcon>}
                  {student.status === Presence.Absent && <IonIcon slot="end" icon={eyeOffOutline}></IonIcon>}
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption color="danger" onClick={() => deleteStudent(student)}>Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            );
          })}
        </IonList>
        <IonActionSheet isOpen={showActionSheet}
          header={`${selectedStudent.firstName} ${selectedStudent.lastName}`}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[{
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => { deleteStudent(selectedStudent); }
          }, {
            text: 'Mark Present',
            icon: 'eye-outline',
            handler: async () => { await markPresent(selectedStudent); }
          }, {
            text: 'Mark Absent',
            icon: 'eye-off-outline',
            handler: async () => { await markAbsent(selectedStudent); }
          }, {
            text: 'Details',
            icon: 'document-text-outline',
            handler: () => { studentDetails(selectedStudent); }
          }, {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]}
        >

        </IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Students;
