import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion";
// import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { ExpandMore } from "@mui/icons-material";


function ExperienceAccordion(props) {
  const theme = props.theme;
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const LightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  const experience = {
    title: "Experience",
    subtitle: "Work, Internship and Volunteer experience",
    description:
      "I'm a self-taught developer and I love what I do. I have experience in Web Development, App Development and computer vision. I'm also open to any opportunity to learn and grow.",
    sections: [
      {
        title: "Work Experience",
        experiences: [
          {
            title: "Associate Software Engineer Intern",
            company: "Tekion Corp",
            company_url:
              "https://tekion.com/",
            logo_path: "tekion.png",
            duration: "Jan 2023 - Present",
            location: "Chennai",
            description: `Front-End developer`,
            color: "#05DEBA",
          },
          {
            title: "R&D Analyst: Computer Vision",
            company: "Accenture Labs",
            company_url:
              "https://www.accenture.com/in-en/about/accenture-labs-index",
            logo_path: "accenture.png",
            duration: "Mar 2022 - Sept 2022",
            location: "Remote",
            description: `Explore and anlyze innovations and deep learning models related to Metaverse Avatars. 
            Creating Programmable Interactive 3D avatars for metaverse 
            `,
            color: "#0071C5",
          },
          {
            title: "Mobile App Developer ",
            company: "ReachTheTop Sporting Software Solutions",
            company_url: "http://www.reachthetop.io/",
            logo_path: "rtt_logo.png",
            duration: "Oct 2021 - Present",
            location: "Remote",
            description: `Built ReachTheTop.io Mobile Application from scratch. Effectively enhanced system efficiency by 35%
            by reducing API calls made through state management via redux.
            `,
           
            color: "#ee3c26",
          },
          {
            title: "Front End Developer ",
            company: "Dhruva",
            company_url: "https://www.dhruvaiiitk.tech/",
            logo_path: "dhruva.webp",
            duration: "Sept 2021 - Oct 2021",
            location: "Remote",
            description: `Part of the Web development team of the technical fest website of IIIT Kottayam.
            `,
            
            color: "#C5E2EE",
          },
          {
            title: "Computer Vision Intern",
            company: "UST Global",
            company_url: "https://www.ust.com/",
            logo_path: "ust.png",
            duration: "May 2021 - Aug 2021",
            location: "Remote",
            description: `Built A sign Language Translator using Deep Learning frameworks like Mediapipe, Tensorflow and LSTM models.
            `,
            
            color: "#00FF00",
          },
        ],
      },
      {
        title: "Volunteer Experience",
        experiences: [
          {
            title: "Technical Coordinator",
            company: "IEEE LINK | Kochi Hub",
            company_url: "https://ieee-link.org/",
            logo_path: "ieee_link.jpg",
            duration: "Jan 2021 - Jan 2022",
            location: "Kerala",
            description:
              "Coordinating technical events for 45+ Student Branches under IEEE Kochi Hub.",
            color: "#4285F4",
          },
          {
            title: "Secretary",
            company: "IEEE Student Branch | IIIT Kottayam",
            company_url: "https://skillenza.com/",
            logo_path: "ieee_iiitk.PNG",
            duration: "May 2020 - Present",
            location: "Kerala",
            description:
              "Organizing, coordinating and documenting events for IEEE Student Branch IIIT Kottayam.",
            color: "#196acf",
          },
          {
            title: "GitHub Student Developer",
            company: "GitHub",
            company_url: "https://github.com/",
            logo_path: "github.png",
            duration: "Nov 2019 - Present",
            location: "Work from Home",
            description:
              "Contribute to Open Source Community and Open Source Project.",
            color: "#124b63",
          },
          {
            title: "Appwrite Github Organization Member",
            company: "Appwrite",
            company_url: "https://appwrite.io/",
            logo_path: "Appwrite.png",
            duration: "may 2021 - Present",
            location: "Work From Home",
            description:
              "Contributor and github org member at Appwrite: End to end backend server for frontend and mobile developers.",
            color: "#D83B01",
          },
          {
            title: "Fossasia Github Organization Member",
            company: "Fossasia",
            company_url: "https://fossasia.org/",
            logo_path: "fossasia.jpg",
            duration: "may 2021 - Present",
            location: "Work From Home",
            description:
              "Contributor and github org member at Fossasia: Open Technologies developed in Asia and Around the Globe.",
            color: "#5a900f",
          },
        ],
      },
    ],
  };
  // return (
  //   <div className="experience-accord">
  //     <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
  //       <Accordion onChange={({ expanded }) => console.log(expanded)}>
  //         { experience.sections.map((section) => {
  //           return (
  //             <Panel
  //               className="accord-panel"
  //               title={section["title"]}
  //               key={section["title"]}
  //             >
  //               {section["experiences"].map((experience) => {
  //                 return (
  //                   <ExperienceCard experience={experience} theme={theme} />
  //                 );
  //               })}
  //             </Panel>
  //           );
  //         })}
  //       </Accordion>
  //     </ThemeProvider>
  //   </div>
  // );

  return (
    <ThemeProvider theme={theme.name === "light" ? LightTheme: darkTheme}>

    <div className="experience-accord">
    {props.sections.map((section)=>{
      return(
        <Accordion>
          <AccordionSummary  expandIcon={<ExpandMore />} className="accord-panel">
            <Typography className="accord-panel">{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {section["experiences"].map((experience) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
          </AccordionDetails>
        </Accordion>
      )
    })}
    </div>
    </ThemeProvider>

  );

}


export default ExperienceAccordion;
