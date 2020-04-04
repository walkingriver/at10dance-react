import { Student } from "./student"
import { Presence } from "./presence"
import { useState } from "react"

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

const [students, setStudents] = useState(mockStudents);

const addStudent = function (student: Student): void {
  // Temporary - this will fail if student.id clashes with an existing element
  setStudents([...students, student]);
}

const removeStudent = function (student: Student): void {
  setStudents(students.filter(x => x.id !== student.id));
}

export const useStudents = function () {
  return [students, addStudent, removeStudent];
}