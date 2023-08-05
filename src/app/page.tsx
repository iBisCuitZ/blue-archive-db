import list from '../../data/students.min.json';
import StudentCard from '../components/student/StudentCard';

export default async function Home() {
    const studentList = list;

    return (
        <div className='flex gap-1 flex-wrap'>
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
    );
}
