"use client";

import { Student, StudentProps } from "../../../types";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import studentList from "../../../../data/students.min.json";
import dynamic from "next/dynamic";

//import image base on the params.id

function StudentPage({ params }: { params: { id: string } }) {
    let studentImageSrc = null;
    let studentId = params.id;
    const [studentDetail, setStudentDetail] = useState<Student | null>(null);
    const [studentImage, setStudentImage] = useState<any>(null);

    useEffect(() => {
        const fetchPageStudent = async () => {
            const currentPageStudent = await getStudent(studentId);
            if (currentPageStudent) {
                setStudentDetail(currentPageStudent);
                if (studentDetail) {
                    const imageName =
                        studentDetail.CollectionTexture?.split("_");
                    console.log(imageName);
                    setStudentImage(
                        require(`../../../images/student/portrait/Portrait_${imageName[2]}.webp`)
                    );
                }
            } else {
                // <Link href='student/Error' />;
                // router.push('/student/Error');
            }
        };
        fetchPageStudent();
    }, [studentId, studentDetail]);

    return (
        <div className="bg-black za w-screen h-screen flex text-white">
            {studentDetail && studentDetail.Name}
            <div>
                {studentImage && (
                    <Image src={studentImage} alt="student Image" />
                )}
            </div>
        </div>
    );
}

//Promise that find the matching student in the studentList from studentId

async function getStudent(studentId: any) {
    var result: Student = { Id: 0 };
    studentList.forEach((student) => {
        if (student.Id.toString() === studentId) {
            result = student;
        }
    });
    if (result.Id === 0) return;
    return result;
}

export default StudentPage;
