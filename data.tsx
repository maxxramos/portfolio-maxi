import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+1 año de experiencia",
    },
    
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "Completados y en proceso",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Tienda de Vinilos",
        image: "/image-1.png",
        urlGithub: "https://maxxramos.github.io/PrimerProyectoHtml/",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Contador de Vocales",
        image: "/image-2.jpg",
        urlGithub: "https://maxxramos.github.io/PreEntrega1-Ramos/",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Controlador de Stock",
        image: "/image-3.jpg",
        urlGithub: "https://maxxramos.github.io/PreEntrega2-Ramos/",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Gestion de Reservas",
        image: "/image-4.png",
        urlGithub: "https://maxxramos.github.io/JsProyectoFinal-Ramos/",
        urlDemo: "#!",
    },

];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  🏡",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "CSS",
                subtitle: "Intermedio",
                value: 75,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 50,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Principiante",
                value: 35,
            },
            {
                name: "React",
                subtitle: "Principiante",
                value: 45,
            },
            {
                name: "Bootstrap",
                subtitle: "Experimentado",
                value: 75,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🔙",
        experience: [
            {
                name: "Node JS",
                subtitle: "Principiante",
                value: 30,
            },
            
           
            {
                name: "MySQL",
                subtitle: "Principiante",
                value: 10,
            },
            
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+598 99 853 433",
        link: "tel:+59899853433",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "https://github.com/maxxramos",
        link: "https://github.com/maxxramos",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "maxramos497@gmail.com",
        link: "mailto:maxramos497@gmail.com",
        icon: <Inbox />,
    },
];

