'use client';
import Image from 'next/image';
import { Student, test } from '../types';
import StudentDetail from './StudentDetail';

const StudentCard = ({ student }: Student) => {
    console.log(student);
    const clickEventHandler = (Id: number, Name: string) => {
        console.log(Id, ' ', Name);
    };
    return (
        <div
            onClick={() => clickEventHandler(student.Id, student.Name)}
            key={student.Id}
            className='flex flex-col justify-center items-center'>
            <StudentDetail student={student}></StudentDetail>
        </div>
    );
};

export default StudentCard;
