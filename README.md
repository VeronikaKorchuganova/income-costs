# Тестовое задание: Доходы/расходы

Построение DOM дерева выполнено в html. Поиск элементов на странице осуществляется методом querySelector("").
Значения вводятся через форму, где в селекте предоставлен выбор, в какое поле будет записано значение (доходы / расходы), а также синхронно с добавлением значений производится итоговый расчет внизу страницы (с + или с -). 
При нажатии на кнопку "Добавить" создается элемент "р" в контейнере расходов/доходов. 
Все значения введенные в поля доходов и (или) расходов, а также значение "итого" сохраняются на странице при обновлении с помощью localStorage.
Кнопка "Очистить" удаляет все элементы "p" из контейнеров дохода/расхода, "итого" присваивается значение 0, localStorage очищается. 
