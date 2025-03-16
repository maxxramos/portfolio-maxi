import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8"> Soy desarrollador web con enfoque en front-end, siempre buscando mejorar mis habilidades y aprender nuevas tecnologías. Actualmente estoy profundizando en React y explorando el backend  para ampliar mis conocimientos. Me interesa crear interfaces intuitivas y funcionales, aportando soluciones eficientes a cada proyecto.

Además del desarrollo, el deporte es parte de mi rutina y la música es una gran pasión, con una colección de vinilos en constante crecimiento. Siempre en busca de nuevos retos, mi objetivo es seguir creciendo en el mundo del desarrollo y encontrar oportunidades que me permitan aportar valor.</p>

                    <Button>
                        <Phone size={20} className="mr-2" />Hablamos?
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;