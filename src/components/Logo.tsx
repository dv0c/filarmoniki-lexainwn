import Image from "next/image";
import LogoImage from "../../public/logo.png";
const Logo= () => {
  return <Image alt="logo" src={LogoImage} placeholder="blur" width={100} height={100} className="object-cover rounded-full"/>
}

export default Logo