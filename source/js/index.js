import filter from "./modules/filter";
import inputMask from "./modules/input-mask";
import stepper from "./modules/stepper";
import questionnaire from "./modules/questionnaire";
import accordion from "./modules/accordion";
import animationFeatures from "./modules/animation-features";
import {initSliderMain} from "./modules/slider";

filter();
stepper('.questionnaire__step', 'questionnaire__step--active');
questionnaire();
accordion();
animationFeatures();
initSliderMain();