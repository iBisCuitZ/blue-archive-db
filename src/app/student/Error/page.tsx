import Image from "next/image";
import AronaMail from "../../../images/AronaMail.png";

function ErrorPage({ params }: { params: { id: string } }) {
    console.log(params);
    return (
        <div className="text-white mt-32 flex flex-col items-center justify-center">
            <Image src={AronaMail} alt="Arona Mail" width={500} height={500} />
            <p className="text-bold text-5xl mt-10">Student Not Found</p>
        </div>
    );
}

export default ErrorPage;
