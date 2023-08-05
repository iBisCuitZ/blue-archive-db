import Image from 'next/image';
import { Student, StudentProps } from '../../types';

const StudentDetail = ({ student }: StudentProps) => {
    return (
        <>
            <Image
                src={`/images/student/icon/${student.CollectionTexture}.png`}
                width={50}
                height={50}
                alt={student.Name}
            />
            {student.Name}
        </>
    );
};

export default StudentDetail;
