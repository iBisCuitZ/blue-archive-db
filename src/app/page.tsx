import { MouseEventHandler } from 'react';
import list from '../../data/students.min.json';
// import list from '../../data/students copy.json';
import Image from 'next/image';
import StudentCard from './student/StudentCard';
import { Student } from './types';

export default async function Home() {
    const studentList = list;

    return (
        <div className='flex gap-1 flex-wrap'>
            {studentList &&
                studentList.map((student) => {
                    return (
                        <StudentCard
                            key={student.Id}
                            student={student}></StudentCard>
                    );
                })}
        </div>
    );
}
