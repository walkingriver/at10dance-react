import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonList, IonItemSliding, IonItem, IonIcon, IonLabel, IonItemOptions, IonItemOption, IonActionSheet } from '@ionic/react';
import { eyeOffOutline, eyeOutline, personOutline } from 'ionicons/icons';
import React, { useState } from 'react';

enum Presence {
  Unknown,
  Absent,
  Present
}
interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: Date;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: Presence;
}


const mockStudents: Student[] = [
  { id: '1', firstName: 'Monique', lastName: 'Barrett', status: Presence.Absent },
  { id: '2', firstName: 'Pauline', lastName: 'Davis', status: Presence.Present },
  { id: '3', firstName: 'Heidi', lastName: 'Burke' },
  { id: '4', firstName: 'Jennifer', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner' }
]

const Students: React.FC = () => {
  const emptyStudent: Student = { id: '', firstName: '', lastName: '' };
  const [students, setStudents] = useState(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState(emptyStudent);
  const [showActionSheet, setShowActionSheet] = useState(false);

  function deleteStudent(student: Student) {
    setStudents(students.filter(x => x.id !== student.id));
  }

  async function markAbsent(student: Student) {
    student.status = Presence.Absent;
  }

  async function markPresent(student: Student) {
    student.status = Presence.Present;
  }

  async function studentDetails(student: Student) {
    // this.router.navigateByUrl(`/student-info/${student.id}`, {
    //   state: { student }
    // })
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
