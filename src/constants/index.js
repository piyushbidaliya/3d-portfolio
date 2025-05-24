import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    python,
    sql,
    sharksecure,
    mountainmavericks,
    unified,
    attendancesys,
    plants,
    tata,
    threejs,
    novanector
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJs Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"Python",
      icon: python,
    },
    {
      name:"Sql",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FullStack Web Developer Intern",
      company_name: "Novanector Services Pvt Ltd",
      icon: novanector,
      iconBg: "#383E56",
      date: "Apr 2025 - Present",
      points: [
        "Acquiring skills in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Developing and maintaining web applications with a focus on optimized performance, user experience, and responsive design",
        "Working in a team, collaborating with teammates using git/github.",

      ],
    },
    {
      title: "React.js Developer",
      company_name: "SharkSecure Services",
      icon: sharksecure,
      iconBg: "#383E56",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Mountain Mavericks",
      icon: mountainmavericks,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Jun 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Unified Mentor",
      icon: unified,
      iconBg: "#383E56",
      date: "Jul 2024 - Sep 2024",
      points: [
        "Acquired skills in building full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
        "Developed and maintained web applications with a focus on optimized performance, user experience, and responsive design",
        "Implemented secure authentication, API integrations, and real-time data handling using MERN technologies.",
        "Built 3 projects that covered aspects of database management, front-end design, and back-end architecture, following industry best practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Face Recoginition Attendance System With Realtime Database",
      description:
        "Web-based platform that allows employers/teachers to take attendance, add student/employee, and check attendance of student/employee present and registered in database.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: attendancesys,
      source_code_link: "https://github.com/piyushbidaliya/FaceRecoginitionAttendanceSystem",
    },
    {
      name: "Ecommerce Website",
      description:
        "Web application that enables users to search for Plants, view estimated price ranges for plants, vase, and add selected product to cart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "Context Api",
          color: "pink-text-gradient",
        },
      ],
      image: plants,
      source_code_link: "https://github.com/piyushbidaliya/novanectorplants",
    },
    {
      name: "Tata Motors 1yr Data Analysis",
      description:
        "Tata Motors one year performance from 20-dec-2023 to 20-dec-2024. Web scraped data using python libraries like beautiful soup and requests and visualiztion using PowerBi",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Excel",
          color: "green-text-gradient",
        },
        {
          name: "PowerBi",
          color: "pink-text-gradient",
        },
      ],
      image: tata,
      source_code_link: "https://github.com/piyushbidaliya/Data_Analysis",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };