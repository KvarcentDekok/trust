import filter from "./modules/filter";
import stepper from "./modules/stepper";
import questionnaire from "./modules/questionnaire";
import accordion from "./modules/accordion";
import {initSliderMain, initSliderPartners} from "./modules/slider";
import {animationFeatures} from "./modules/animation";

filter();
stepper('.questionnaire__step', 'questionnaire__step--active');
questionnaire();
accordion();
animationFeatures();
initSliderMain();
initSliderPartners();