import { PlanetType } from "../types";
import mercuryPic from "../assets/mercury.png"
import jupiterPic from "../assets/jupiter.png"
import earthPic from "../assets/earth.png"
import marsPic from "../assets/mars.png"
import neptunePic from "../assets/neptune.png"
import saturnPic from "../assets/saturn.png"
import uranusPic from "../assets/uranus.png"
import venusPic from "../assets/venus.png"
import sunPic from "../assets/sun.png"

export const PLANET_LIST : PlanetType[] =[
    {name : "sun", imgSrc:sunPic ,order:1},
    {name : "mercury", imgSrc:mercuryPic ,order:2},
    {name : "venus", imgSrc:venusPic ,order:3},
    {name : "earth", imgSrc:earthPic ,order:4},
    {name : "mars", imgSrc:marsPic ,order:5},
    {name : "jupiter", imgSrc:jupiterPic ,order:6},
    {name : "saturn", imgSrc:saturnPic ,order:7},
    {name : "uranus", imgSrc:uranusPic ,order:8},
    {name : "neptune", imgSrc:neptunePic ,order:9},




]