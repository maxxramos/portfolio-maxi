import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
    <div className="text-center" id="home">
        <h3 className="text-xl mb-3">Hello I´m</h3>
        <h1 className="text-4xl font-bold mb-3">Maxi Ramos 👨🏻‍💻</h1>
        <h2 className="text-2xl text-gray-400">Frontend Developer</h2>

      
        <div className="flex gap-6 justify-center mt-10">
            <Link className={buttonVariants()} href="#contact">
                <Mail className="mr-2" /> Contacta conmigo
            </Link>

            <Link className={buttonVariants({ variant: 'secondary' })}
                href="/cv-maxi.pdf"
                target="_blank">
                <Paperclip className="mr-2" /> Descargar CV
            </Link>
        </div>


        <Image 
            src="/profile.jpg" 
            alt="Profile pic" 
            width={300} 
            height={300} 
            className="rounded-full mx-auto mt-10"
        />
    </div>
</Container>

    );
}

export default Introduction;
