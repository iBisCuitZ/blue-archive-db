import list from "../../data/students.min.json";
import StudentCard from "../components/student/StudentCard";

export default async function Home() {
    const studentList = list;

    return (
        <div className="flex gap-1 flex-wrap justify-center backdrop-blur-sm w-full h-full">
            <div className="bg-black/50 flex flex-wrap rounded-lg w-4/5 h-[85%] my-5 p-5 items-center overflow-y-scroll justify-center">
                <div className="flex w-full h-full flex-wrap mb-3 pl-1">
                    {studentList &&
                        studentList.map((student) => {
                            return (
                                <StudentCard
                                    key={student.Id}
                                    student={student}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
