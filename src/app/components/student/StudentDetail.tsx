import Image from "next/image";
import { Student, StudentProps } from "../../../types";

const StudentDetail = ({ student }: StudentProps) => {
    return (
        <>
            <Image
                src={`/images/student/icon/${student.CollectionTexture}.png`}
                width={90}
                height={90}
                alt={student.Name}
                // className='gap-5'
            />
        </>
    );
};

export default StudentDetail;
