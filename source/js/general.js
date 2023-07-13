import dropdown from "./modules/dropdown";
import header from "./modules/header";
import modal from "./modules/modal";
import select from "./modules/select";
import showNumber from "./modules/show-number";
import inputMask from "./modules/input-mask";
import toggleVisibility from "./modules/toggle-visibility";
import video from "./modules/video";
import like from "./modules/like";
import gallery from "./modules/gallery";
import Toastify from "toastify-js";
import resizeTextarea from "./modules/resize-textarea";

window.toast = (props) => {
    return Toastify(props).showToast();
}

dropdown();
header();
modal();
select();
showNumber();
inputMask();
toggleVisibility();
video();
like();
gallery();
resizeTextarea();