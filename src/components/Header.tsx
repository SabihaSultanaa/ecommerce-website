import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-black h-40 text-white header" >
   
  <h1> <span>J</span>EWELRY  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; <span>E</span>MPIRE</h1>
  <Image src={"/Group 1.png"} alt="Next.js Logo" width={80} height={80} className="logo"/>
  <ul className="flex gap-12 ml-80 mt-10">


    <li>HOME</li>
    <li>GALLERY</li>
    <li>INFO</li>
    <li>EVENTS</li>
    <li>PRODUCTS</li>
    <li className="store">STORE LOCATION</li>
    <li>CONTACT US</li>
    <li>LOGIN</li>
  </ul>
    </div>
  );
}
