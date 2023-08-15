// Za
import Link from "next/link";
function Header() {
    return (
        <div className="flex sticky bg-black h-20 items-center p-10 top-0 text-3xl bg-opacity-70 font-montserrat z-50">
            <Link href="/">Blue Archive DB</Link>
        </div>
    );
}

export default Header;
