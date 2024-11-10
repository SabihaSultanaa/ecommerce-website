import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className=" header" >
   
  <h1> <span>J</span>EWELRY  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; <span>E</span>MPIRE</h1>
  <Image src={"/Group 1.png"} alt="Next.js Logo" width={80} height={80} className="logo"/>
  <ul className="flex gap-12 ml-80 mt-10">


    <li> <Link href="/">HOME</Link>     </li>
    <li> <Link href="#gallery">GALLERY</Link></li>
    <li><Link href="#info">Info</Link></li>
    <li><Link href="#event">Events</Link></li>
    <li><Link href="#product">Products</Link></li>
    <li className="store"><Link href="#store">Store Location</Link></li>
    <li><Link href="#contact">CONTACT US</Link></li>
    <li><Link href="#log">LOGIN</Link></li>
  </ul>
    </div>
  );
}
