import dropdown from "./modules/dropdown";
import slider from "./modules/slider";
import filter from "./modules/filter";
import inputMask from "./modules/input-mask";
import stepper from "./modules/stepper";
import questionnaire from "./modules/questionnaire";
import accordion from "./modules/accordion";
import showNumber from "./modules/show-number";
import header from "./modules/header";

dropdown();
slider();
filter();
inputMask();
stepper('.questionnaire__step', 'questionnaire__step--active');
questionnaire();
accordion();
showNumber();
header();