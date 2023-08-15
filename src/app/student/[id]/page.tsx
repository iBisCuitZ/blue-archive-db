'use client';

import { Student, StudentProps } from '../../../types';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import studentList from '../../../../data/students.min.json';

function StudentPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    let studentId = params.id;
    const [studentDetail, setStudentDetail] = useState<Student | null>(null);

    console.log(params.id);

    useEffect(() => {
        const fetchPageStudent = async () => {
            const currentPageStudent = getStudent(studentId);
            if (currentPageStudent) {
                setStudentDetail(currentPageStudent);
            } else {
                // <Link href='student/Error' />;
                // router.push('/student/Error');
            }
        };
        fetchPageStudent();
    }, [studentId]);

    return (
        <div className='bg-black za w-screen h-screen flex text-white'>
            {/* <Header></Header> */}
            {studentDetail && studentDetail.Name}
            <div></div>
        </div>
    );
}

export default StudentPage;

function getStudent(studentId: any) {
    var result: Student = { Id: 0 };
    studentList.forEach((student) => {
        if (student.Id.toString() === studentId) {
            result = student;
        }
    });
    if (result.Id === 0) return;
    return result;
}
