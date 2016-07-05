$(function() {
    var resume = {
        name: 'Сверкунова Ирина Игоревна',
        photo: {
            src: 'img/photo.jpg',
            alt: 'Ира'
        },
        job: 'Студентка КНЭУ им. В.Гетьмана',
        reasons: ['Хочу научиться делать классные вещи',
            'Реализовать себя именно в этой области',
            'Веселиться'],
        number: '+380634548299',
        vkId: 'reena_i',
        feedback: "Let's study hard!"
    };

    var resumeTemplate = $('#resumeTemplate').html();
    var content = tmpl(resumeTemplate, resume);
    $('.template').append(content);
});