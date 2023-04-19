import { Fancybox } from '@fancyapps/ui';

const ru = {
    CLOSE: 'Закрыть',
    NEXT: 'Далее',
    PREV: 'Назад',
    MODAL: 'Вы можете закрыть это модальное содержимое с помощью клавиши ESC',
    ERROR: 'Что-то пошло не так. Пожалуйста, попробуйте позже',
    IMAGE_ERROR: 'Изображение не найдено',
    ELEMENT_NOT_FOUND: 'HTML элемент не найден',
    AJAX_NOT_FOUND: 'Ошибка при загрузке AJAX: не найдено',
    AJAX_FORBIDDEN: 'Ошибка при загрузке AJAX: доступ запрещён',
    IFRAME_ERROR: 'Ошибка при загрузке страницы',
    ITERATEZOOM: 'Переключить уровень масштабирования',
    TOGGLE_THUMBS: 'Переключить отображение миниатюр',
    TOGGLE_SLIDESHOW: 'Переключить слайдшоу',
    TOGGLE_FULLSCREEN: 'Переключить полноэкранный режим',
    DOWNLOAD: 'Скачать',
}

function gallery() {
    Fancybox.bind('[data-fancybox]', {
        l10n: ru
    });
}

export default gallery;