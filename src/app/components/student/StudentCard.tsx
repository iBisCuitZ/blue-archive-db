"use client";
import Link from "next/link";
import { Student, StudentProps } from "../../../types";
import StudentDetail from "./StudentDetail";
import { useRouter } from "next/navigation";

const StudentCard = ({ student }: StudentProps) => {
    const router = useRouter();

    return (
        <div
            key={student.Id}
            className="flex flex-col justify-center items-center p-2 hover:scale-110 transition-all"
        >
            <Link href={`/student/${student.Id}`}>
                <StudentDetail student={student}></StudentDetail>
            </Link>
        </div>
    );
};

export default StudentCard;
