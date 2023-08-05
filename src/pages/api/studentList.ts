import { NextApiRequest, NextApiResponse } from 'next';
import studentList from '../../../data/students.min.json';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.json(studentList);
}
