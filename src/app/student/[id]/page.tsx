"use client";

import { Student, StudentProps } from "../../../types";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import studentList from "../../../../data/students.min.json";

function StudentPage({ params }: { params: { id: string } }) {
    let studentId = params.id;
    const [studentDetail, setStudentDetail] = useState<Student | null>(null);
    const [studentImage, setStudentImage] = useState<string | null>(null);
    const [studentBackground, setStudentBackground] = useState<any>(null);

    useEffect(() => {
        const fetchPageStudent = () => {
            const currentPageStudent = getStudent(studentId);
            if (currentPageStudent) {
                setStudentDetail(currentPageStudent);
                if (studentDetail) {
                    const imageName =
                        studentDetail.CollectionTexture?.split("_");
                    if (imageName) {
                        console.log(imageName);
                        setStudentImage(
                            require(`../../../images/student/portrait/Portrait_${imageName[2]}.webp`)
                        );
                    }
                    const backgroundName = studentDetail.CollectionBG;
                    setStudentBackground(`${backgroundName}.jpg`);
                    console.log(
                        `url('../images/background/${studentBackground}')`
                    );
                }
            } else {
                // <Link href='student/Error' />;
                // router.push('/student/Error');
            }
        };
        fetchPageStudent();
    }, [studentId, studentDetail, studentBackground]);

    return (
        <div
            className="bg-cover w-screen h-full flex text-white "
            style={{
                backgroundImage: `url('../images/background/${studentBackground}')`,
            }}
        >
            <div className="mt-20 flex items-center ">
                {studentDetail && studentDetail.Name}
                <div className="h-full flex">
                    {studentImage && (
                        <Image
                            src={studentImage}
                            alt="student image"
                            style={{ objectFit: "contain" }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

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

export default StudentPage;
