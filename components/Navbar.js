import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image
                    src="/net-ninja.png" 
                    width={128} 
                    height={77}
                    alt="ninja list logo"
                />
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/ninjas'>Ninja Listing</Link>
        </nav>
    );
}

export default Navbar