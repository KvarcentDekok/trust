const likeInputs = document.querySelectorAll('.like__input, .icon-control input');
const headerLike = document.querySelector('.header__like');

function onLikeChange(evt) {
    const input = evt.target;

    let likesNumber = Number(headerLike.dataset.amount);

    if (input.checked) {
        likesNumber += 1;
    } else {
        likesNumber -= 1;
    }

    headerLike.dataset.amount = String(likesNumber);
}

function like() {
    for (let i = 0; i < likeInputs.length; i++) {
        likeInputs[i].addEventListener('change', (evt) => {
            onLikeChange(evt);
        });
    }
}

export default like;