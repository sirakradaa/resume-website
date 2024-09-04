import AWS from "./aws.png";
import Bootstrap from "./bootstrap.png";
import CSharp from "./csharp.png";
import CSS from "./css.png";
import Cypress from "./cypress.png";
import Docker from "./docker.png";
import ESLint from "./eslint.png";
import ExpressJS from "./expressjs.png";
import Figma from "./figma.png";
import Firebase from "./firebase.png";
import Git from "./git.png";
import HTML from "./html.png";
import IBM from "./ibm.png";
import Java from "./java.png";
import JavaScript from "./javascript.png";
import MaterialUI from "./material-ui.png";
import NestJS from "./nestjs.png";
import NextJS from "./nextjs.png";
import Node from "./node.png";
import PostgreSQL from "./postgresql.png";
import Python from "./python.png";
import React from "./react.png";
import ReactNative from "./react-native.png";
import Redux from "./redux.png";
import SQL from "./sql.png";
import TypeScript from "./typescript.png";

import Arrival from "./arrival.png";
import BugTracker from "./bug.png";
import Calculator from "./calculator.png";
import MarvelAndDC from "./marvelAndDC.png";

// Define an array of projects with their corresponding images
const ProjectsImages = [
  {
    name: "Arrival",
    logo: Arrival,
    link: "https://github.com/CMPUT301W20T07/arrival/wiki",
    description:
      "Arrival is an Edmonton-based ride sharing platform for Android. Users can sign up as a Rider, or Driver, depending on their needs. More information about the app's features and development can be found on the project's Wiki.",
    technologies: ["Android SDK", "Java", "Express", "Firebase", "Travis CI"],
  },
  {
    name: "Marvel and DC",
    logo: MarvelAndDC,
    link: "https://github.com/sirakradaa/marvel-and-dc",
    description:
      "Fan page of 4 marvel/dc heroes and 4 marvel/dc villains which allows the user to submit the their heroes/villains in order of most to least favourite. Along with some pictures, descriptions, and affiliation information about the character.",
    technologies: ["React", "Redux", "JavaScript", "CSS", "HTML"],
  },
  {
    name: "BugTracker",
    logo: BugTracker,
    link: "https://github.com/sirakradaa/BugTracker",
    description:
      "A bug tracker that allows users to input bugs with a description and priority (Low, Medium, High). Bugs can also be resolved to remove them from the list. Developed using React, Node.js, HTML, CSS. Includes testing with React Testing Library.",
    technologies: ["React", "Node.js", "HTML", "CSS"],
  },
  {
    name: "Calculator",
    logo: Calculator,
    link: "https://github.com/sirakradaa/Interest",
    description:
      "I've created a simple web-based project that calculates interest based on user input. I used HTML to structure the page, CSS for styling, and JavaScript to handle the logic behind the calculations. This project showcases basic web development skills, allowing users to enter values and see the interest calculated dynamically on the page.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

// Define an array of skills with their corresponding images
const SkillsList = [
  {
    name: "AWS",
    logo: AWS,
    professionalExperience: "1 year",
    personalExperience: "1 year",
  },
  {
    name: "Bootstrap",
    logo: Bootstrap,
    professionalExperience: "0 years",
    personalExperience: "3 years",
  },
  {
    name: "CSharp",
    logo: CSharp,
    professionalExperience: "0 years",
    personalExperience: "4 years",
  },
  {
    name: "CSS",
    logo: CSS,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "Cypress",
    logo: Cypress,
    professionalExperience: "2 years",
    personalExperience: "2 years",
  },
  {
    name: "Docker",
    logo: Docker,
    professionalExperience: "1 year",
    personalExperience: "1 year",
  },
  {
    name: "ESLint",
    logo: ESLint,
    professionalExperience: "2 years",
    personalExperience: "2 years",
  },
  {
    name: "ExpressJS",
    logo: ExpressJS,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "Figma",
    logo: Figma,
    professionalExperience: "0 years",
    personalExperience: "2 years",
  },
  {
    name: "Firebase",
    logo: Firebase,
    professionalExperience: "0 years",
    personalExperience: "5 years",
  },
  {
    name: "Git",
    logo: Git,
    professionalExperience: "2 years",
    personalExperience: "5 years",
  },
  {
    name: "HTML",
    logo: HTML,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "IBM",
    logo: IBM,
    professionalExperience: "0 years",
    personalExperience: "1 year",
  },
  {
    name: "Java",
    logo: Java,
    professionalExperience: "2 years",
    personalExperience: "4 years",
  },
  {
    name: "JavaScript",
    logo: JavaScript,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "MaterialUI",
    logo: MaterialUI,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "NestJS",
    logo: NestJS,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "NextJS",
    logo: NextJS,
    professionalExperience: "0 years",
    personalExperience: "1 year",
  },
  {
    name: "Node",
    logo: Node,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "PostgreSQL",
    logo: PostgreSQL,
    professionalExperience: "0 years",
    personalExperience: "3 years",
  },
  {
    name: "Python",
    logo: Python,
    professionalExperience: "0 years",
    personalExperience: "6 years",
  },
  {
    name: "React",
    logo: React,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "ReactNative",
    logo: ReactNative,
    professionalExperience: "0 years",
    personalExperience: "1 year",
  },
  {
    name: "Redux",
    logo: Redux,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "SQL",
    logo: SQL,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
  {
    name: "TypeScript",
    logo: TypeScript,
    professionalExperience: "2 years",
    personalExperience: "3 years",
  },
];

export { ProjectsImages, SkillsList };
