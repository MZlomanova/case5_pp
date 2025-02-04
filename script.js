document.addEventListener('DOMContentLoaded', function() {
    const filialsList = document.getElementById('filials');
    const filials = [
        "Москва",
        "Санкт-Петербург",
        "Ростов-на-Дону",
        "Казань",
        "Самара",
        "Екатеринбург",
        "Сочи",
        "Новосибирск",
        "Нижний Новгород",
        "Краснодар",
        "Воронеж",
        "Иркутск"
    ];

    filials.forEach(function(filial) {
        let li = document.createElement('li');
        li.textContent = filial;
        filialsList.appendChild(li);
    });
});