import { FaReact, FaPhp, FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
    BiLogoMongodb,
    BiSolidFileCss,
    BiLogoVuejs,
    BiLogoPython,
} from "react-icons/bi";
import {
    SiMysql,
    SiNodedotjs,
    SiExpress,
    SiPostman,
    SiCodeigniter,
    SiNextdotjs,
    SiTailwindcss,
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi";
import { AiFillHtml5 } from "react-icons/ai";

/* function MobileTechnologies() {
    return (
        <div className="mx-4 flex flex-col rounded-lg bg-spot-profile-pannel px-4 py-5 shadow-spot-def lg:hidden">
            <h1 className="pb-3 text-center text-xl font-semibold">
                Technologies
            </h1>
            <div className="mobileTechnologies">
                <ul>
                    <li>
                        <h1>Languages</h1>
                        <div>
                            <p>
                                <RiJavascriptFill />
                                <span>JavaScript</span>
                            </p>
                            <p>
                                <BiSolidFileCss />
                                <span>CSS</span>
                            </p>
                            <p>
                                <AiFillHtml5 />
                                <span>HTML5</span>
                            </p>
                            <p>
                                <FaPhp />
                                <span>PHP</span>
                            </p>
                            <p>
                                <BiLogoPython />
                                <span>Python</span>
                            </p>
                            <p>
                                <FaJava />
                                <span>Java</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1>Frameworks/Libraries</h1>
                        <div>
                            <p>
                                <FaReact />
                                <span>React.js</span>
                            </p>
                            <p>
                                <BiLogoVuejs />
                                <span>Vue.js</span>
                            </p>
                            <p>
                                <SiExpress />
                                <span>Express.js</span>
                            </p>
                            <p>
                                <SiCodeigniter />
                                <span>CodeIgniter</span>
                            </p>
                            <p>
                                <SiNextdotjs />
                                <span>Next.js</span>
                            </p>
                            <p>
                                <SiTailwindcss />
                                <span>Tailwind</span>
                            </p>
                            <p>
                                <GiBearFace />
                                <span>Zustand</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1>Database</h1>
                        <div>
                            <p>
                                <BiLogoMongodb />
                                <span>MongoDB</span>
                            </p>
                            <p>
                                <SiMysql />
                                <span>MySQL</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <h1>Others</h1>
                        <div>
                            <p>
                                <SiNodedotjs />
                                <span>Node.js</span>
                            </p>
                            <p>
                                <SiPostman />
                                <span>Postman</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
} */
function MobileTechnologies() {
    const technologies = [
        {
            category: "Languages",
            items: [
                { icon: <RiJavascriptFill />, name: "JavaScript" },
                { icon: <BiSolidFileCss />, name: "CSS" },
                { icon: <AiFillHtml5 />, name: "HTML5" },
                { icon: <FaPhp />, name: "PHP" },
                { icon: <BiLogoPython />, name: "Python" },
                { icon: <FaJava />, name: "Java" },
            ],
        },
        {
            category: "Frameworks/Libraries",
            items: [
                { icon: <FaReact />, name: "React.js" },
                { icon: <BiLogoVuejs />, name: "Vue.js" },
                { icon: <SiExpress />, name: "Express.js" },
                { icon: <SiCodeigniter />, name: "CodeIgniter" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
                { icon: <GiBearFace />, name: "Zustand" },
            ],
        },
        {
            category: "Database",
            items: [
                { icon: <BiLogoMongodb />, name: "MongoDB" },
                { icon: <SiMysql />, name: "MySQL" },
            ],
        },
        {
            category: "Others",
            items: [
                { icon: <SiNodedotjs />, name: "Node.js" },
                { icon: <SiPostman />, name: "Postman" },
            ],
        },
    ];

    return (
        <div className="mx-4 flex flex-col rounded-lg bg-spot-profile-pannel px-4 py-5 shadow-spot-def lg:hidden">
            <h1 className="pb-3 text-center text-xl font-semibold">
                Technologies
            </h1>
            <div className="mobileTechnologies">
                <ul>
                    {technologies.map((category) => (
                        <li key={category.category}>
                            <h1>{category.category}</h1>
                            <div>
                                {category.items.map((item) => (
                                    <p key={item.name}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </p>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default MobileTechnologies;
