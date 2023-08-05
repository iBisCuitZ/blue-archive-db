import { Student, StudentProps } from '../../types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import studentList from '../../../data/students.min.json';

function StudentPage() {
    const router = useRouter();
    const studentId = router.query.id;
    const [studentDetail, setStudentDetail] = useState<Student | null>(null);

    useEffect(() => {
        const somethingSomething = async () => {
            if (router.isReady) {
                const currentPageStudent = getStudent(studentId);
                if (currentPageStudent) {
                    setStudentDetail(currentPageStudent);
                } else {
                    router.push('/student/Error');
                }
            }
        };
        somethingSomething();
    }, [router, router.isReady, studentId]);

    return <div>{studentDetail && studentDetail.Name}</div>;
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
