import { create } from "zustand";

export const useGlobalState = create((set) => ({
    technology: [
        {
            name: "React",
            description: "A JavaScript library for building user interfaces.",
            imgSrc: "/Technology/react.png",
            category: ["Front-End"],
        },
        {
            name: "Vue",
            description:
                "A progressive JavaScript framework for building user interfaces.",
            imgSrc: "/Technology/vue.png",
            category: ["Front-End"],
        },
        {
            name: "JavaScript",
            description:
                "A high-level, interpreted scripting language for the web.",
            imgSrc: "/Technology/javascript.png",
            category: ["Front-End", "Programming Language"],
        },
        {
            name: "TypeScript",
            description:
                "A strongly typed programming language that builds on JavaScript.",
            imgSrc: "/Technology/typescript.png",
            category: ["Front-End", "Programming Language"],
        },
        {
            name: "CSS",
            description:
                "A stylesheet language used for describing the presentation of a web document.",
            imgSrc: "/Technology/css.png",
            category: ["Front-End"],
        },
        {
            name: "HTML",
            description:
                "A markup language used for creating the structure of web pages.",
            imgSrc: "/Technology/html.png",
            category: ["Front-End"],
        },
        {
            name: "Node.js",
            description:
                "A JavaScript runtime environment for server-side development.",
            imgSrc: "/Technology/node.png",
            category: ["Back-End"],
        },
        {
            name: "Express.js",
            description: "A web application framework for Node.js.",
            imgSrc: "/Technology/express.png",
            category: ["Back-End"],
        },
        {
            name: "MongoDB",
            description: "A NoSQL database for storing and managing data.",
            imgSrc: "/Technology/mongo.png",
            category: ["Back-End"],
        },
        {
            name: "MySQL",
            description: "A relational database management system.",
            imgSrc: "/Technology/mysql.png",
            category: ["Back-End"],
        },
        {
            name: "Postman",
            description: "A popular API development and testing tool.",
            imgSrc: "/Technology/postman.png",
            category: ["Front-End", "Back-End"],
        },
        {
            name: "PHP",
            description:
                "A server-side scripting language for web development.",
            imgSrc: "/Technology/php.png",
            category: ["Back-End", "Programming Language"],
        },
        {
            name: "CodeIgniter",
            description: "A PHP framework for building web applications.",
            imgSrc: "/Technology/codeigniter.png",
            category: ["Back-End", "Programming Language"],
        },
        {
            name: "Next.js",
            description:
                "A popular React framework for building server-rendered React applications.",
            imgSrc: "/Technology/next.png",
            category: ["Front-End", "Back-End"],
        },
        {
            name: "Tailwind CSS",
            description:
                "A utility-first CSS framework for building modern web applications.",
            imgSrc: "/Technology/tailwind.png",
            category: ["Front-End", "Tool"],
        },
        {
            name: "Python",
            description: "A high-level, general-purpose programming language.",
            imgSrc: "/Technology/python.png",
            category: ["Programming Language"],
        },
        {
            name: "Zustand",
            description: "A React State Management Library",
            imgSrc: "/Technology/zustand.png",
            category: ["Front-End", "Tool"],
        },
        {
            name: "Java",
            description:
                "A widely used object-oriented programming language and software platform that runs on billions of devices",
            imgSrc: "/Technology/java.png",
            category: ["Programming Language"],
        },
    ],
    sortOptionTechnology: [
        "Back-End",
        "Front-End",
        "Database",
        "Programming Language",
        "Tool",
    ],
    project: [
        {
            name: "Human Resource Management System",
            description:
                "Or HRMS That i built for my Capstone project in College",
            seeMoreStatus: "true",
            imgSrc: "/asiatech.png",
        },
        {
            name: "Ad Traffic Analytical Website",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Analytic Dashboard For Motorcycle Company and Content Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "QR Attendance System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Contract Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Promo Management System",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Map Profit Analytical Website",
            description: "Confidential. Property of Retailgate",
            seeMoreStatus: "false",
            imgSrc: "/retailgate.png",
        },
    ],
    experiences: [
        {
            name: "Software Engineer",
            description:
                "Jun 2022 - Current: In my current role, I develop Flask-based Web API AI to optimize machine learning algorithms, leading frontend development with Next.js and Tailwind CSS, and backend development with Node.js and TypeScript for our company's flagship product website. Additionally, I design database schema and system architecture for scalability, collaborate cross-functionally to align development with business objectives, conduct code reviews, testing, and security implementations to uphold quality standards, mentor junior developers for team growth, and manage version control in collaboration with an On-the-Job Trainee for seamless collaboration and efficient change tracking.",
            seeMoreStatus: "true",
            imgSrc: "/linoflap.png",
        },
        {
            name: "Website Developer",
            description:
                "Jan 2023 - May 2023: At Retailgate Technology this is where my skills in web development skyrocketed since i was able to work on multiple projects and also appply my already gains skills in web development to real world projects.",
            seeMoreStatus: "true",
            imgSrc: "/retailgate.png",
        },
        {
            name: "Freelance Programmer Tutor",
            description:
                "2019 - 2022: While i was studying i was working as a tutor for the lower and my fellow classmates how to code for their projects.",
            seeMoreStatus: "true",
            imgSrc: "/tutor.png",
        },
        {
            name: "Freelance IT Technician",
            description:
                "2017 - 2022: I also worked as an IT Technician for our neighborhood and my fellow classmates to help them with their hardware needs.",
            seeMoreStatus: "true",
            imgSrc: "/tech.png",
        },
    ],
}));
