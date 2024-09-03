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
import MySQL from "./mysql.png";
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
const SkillsImages = [
  { name: "AWS", logo: AWS },
  { name: "Bootstrap", logo: Bootstrap },
  { name: "CSharp", logo: CSharp },
  { name: "CSS", logo: CSS },
  { name: "Cypress", logo: Cypress },
  { name: "Docker", logo: Docker },
  { name: "ESLint", logo: ESLint },
  { name: "ExpressJS", logo: ExpressJS },
  { name: "Figma", logo: Figma },
  { name: "Firebase", logo: Firebase },
  { name: "Git", logo: Git },
  { name: "HTML", logo: HTML },
  { name: "IBM", logo: IBM },
  { name: "Java", logo: Java },
  { name: "JavaScript", logo: JavaScript },
  { name: "MaterialUI", logo: MaterialUI },
  { name: "NestJS", logo: NestJS },
  { name: "NextJS", logo: NextJS },
  { name: "Node", logo: Node },
  { name: "PostgreSQL", logo: PostgreSQL },
  { name: "Python", logo: Python },
  { name: "React", logo: React },
  { name: "ReactNative", logo: ReactNative },
  { name: "Redux", logo: Redux },
  { name: "MySQL", logo: MySQL },
  { name: "TypeScript", logo: TypeScript },
];

export { ProjectsImages, SkillsImages };
