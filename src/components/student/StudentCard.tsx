'use client';
import { Student, StudentProps } from '../../types';
import StudentDetail from './StudentDetail';
import { useRouter } from 'next/navigation';

const StudentCard = ({ student }: StudentProps) => {
    const router = useRouter();
    const clickEventHandler = (Id: number, Name: string, student: Student) => {
        router.push('/student/' + Id);
    };

    return (
        <div
            onClick={() => clickEventHandler(student.Id, student.Name, student)}
            key={student.Id}
            className='flex flex-col justify-center items-center'>
            <StudentDetail student={student}></StudentDetail>
        </div>
    );
};

export default StudentCard;
