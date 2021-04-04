import astrahero from "../assets/astrahero.png"
import f247hero from "../assets/f247hero.png"
import portfoliohero from "../assets/portfoliohero.png"
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    header: {
     text: ['Hi!', "I'm Adrian Petersson", 'I am '],
      typical: [
        'UX designer ✍',
        2000,
        'Web developer 💻',
        2000,
        'Product designer 📏',
        2000
      ],
      btnText: 'Discover More',
    },
  
    stack: {
      title: 'Stack',
      tech: [
        {
          img: process.env.PUBLIC_URL + '/assets/express.png',
          alt: 'express',
        },
        {
          img: process.env.PUBLIC_URL + '/assets/node.png',
          alt: 'node',
        },
      ],
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only`,
    },
    projects: {
        title: 'projects',
        projectData:[
            {id:"f247", category: "Research UX UI", role: "UX Researcher, UX Designer", year:"2020", name:"Fitness 24 Seven Redesign", desc: "A redesign of the current app of a popular Scandinavian fitness chain by making the app more accessible to all members.", link:"f247",img:f247hero, external:"Live Prototype", ext:"https://www.figma.com/proto/0hdiXgXRgr9iMXYLZ6BCVl/Fitness24%2F7-Redesign?kind=&node-id=626%3A605&scaling=scale-down&viewport=400%2C914%2C0.26390525698661804"},

            {id:"astra", category: "Research UX/UI Development", role: "UX Researcher, UX Designer, Developer", year:"2020-2021", name:"Astra Watches E-Commerce", desc: "Astra Watches is a personal project based on my own watch designs. In this project I worked on logo-design and designed & developed a landing-page concept for it's e-commerce store.", link:"astra", img:astrahero, external:"Live Website", ext:"https://astrawatches.netlify.app/" },

            {id:"portfolio", category: "UX/UI Development",role: "UX Designer, Developer", year:"2021",name:"Portfolio", desc: "This responsive portfolio you're currently viewing was designed, wireframed and ultimately developed using React & Tailwind CSS.", link:"portfolio", img:portfoliohero, external:"Currently viewing!" },
        ],
      }
  };