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

export const useStudents = function () {
  const useStudentState = useState(mockStudents);
  return useStudentState;
}
