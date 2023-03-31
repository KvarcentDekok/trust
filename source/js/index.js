import dropdown from "./dropdown";
import slider from "./slider";
import filter from "./filter";
import inputMask from "./input-mask";
import stepper from "./stepper";
import questionnaire from "./questionnaire";
import accordion from "./accordion";

dropdown();
slider();
filter();
inputMask();
stepper('.questionnaire__step', 'questionnaire__step--active');
questionnaire();
accordion();