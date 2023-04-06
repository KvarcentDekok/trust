import slider from "./modules/slider";
import filter from "./modules/filter";
import inputMask from "./modules/input-mask";
import stepper from "./modules/stepper";
import questionnaire from "./modules/questionnaire";
import accordion from "./modules/accordion";
import showNumber from "./modules/show-number";
import animationFeatures from "./modules/animation-features";

slider();
filter();
inputMask();
stepper('.questionnaire__step', 'questionnaire__step--active');
questionnaire();
accordion();
showNumber();
animationFeatures();