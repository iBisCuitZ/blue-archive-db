"use client";

import { Student, StudentProps } from "../../../types";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import studentList from "../../../../data/students.min.json";
import Lottie from "react-lottie-player";
import loading from "../../../images/loadingAnimation.json";

function StudentPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const studentId: string = params.id;
    // StudentPage student object
    const [studentDetail, setStudentDetail] = useState<Student | null>(null);
    // StudentPage portrait image file name
    const [studentImage, setStudentImage] = useState<string | null>(null);
    // StudentPage background image file name
    const [studentBackground, setStudentBackground] = useState<any>(null);

    useEffect(() => {
        const fetchPageStudent = async () => {
            const currentPageStudent = getStudent(studentId);
            if (currentPageStudent) {
                setStudentDetail(currentPageStudent);
                if (studentDetail) {
                    const backgroundName = studentDetail.CollectionBG;
                    setStudentBackground(`${backgroundName}.jpg`);
                    const imageName =
                        studentDetail.CollectionTexture?.split("_");
                    if (imageName) {
                        imageName.forEach((name, index) => {
                            if (
                                name === "Student" ||
                                name === "Collection" ||
                                name === "Portrait"
                            ) {
                                imageName[index] = "";
                            }
                        });
                        const filterdList = imageName.filter((item) => {
                            return item !== "";
                        });
                        const newImageName = filterdList.join("_");
                        await sleep(1000);
                        setStudentImage(
                            require(`../../../images/student/portrait/Portrait_${newImageName}.webp`)
                        );
                    }
                }
            } else {
                // <Link href='student/Error' />;
                router.push("/student/Error");
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
            <div className="mt-32 flex items-center w-1/2">
                <div className="h-full flex justify-center items-center w-full flex-row-reverse">
                    {studentImage ? (
                        <Image
                            src={studentImage}
                            alt="student image"
                            objectFit="contain"
                            style={{
                                width: "auto",
                                height: "90%",
                            }}
                        />
                    ) : (
                        <Lottie
                            loop
                            animationData={loading}
                            play
                            style={{ width: 300, height: 300 }}
                        ></Lottie>
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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default StudentPage;
