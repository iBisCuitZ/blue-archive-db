import Image from 'next/image';
import { Student } from '../types';

const StudentDetail = ({ student }: Student) => {
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
