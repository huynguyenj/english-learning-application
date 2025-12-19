import Image from "next/image";
import Navbar from "./components/ui/navbar/navbar";
import BookImage from "@/public/images/books-pile-isolated.png"
export default function Home() {
  return (
   <main>
    <Navbar/>
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <Image src={BookImage} alt="book" width={500} height={450} className=""/>
        <h1 className="text-5xl font-family-style-script">Supported learning english vocabulary by card.</h1>
      </div>
    </div>
   </main>
  );
}
