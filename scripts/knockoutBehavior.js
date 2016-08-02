
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);
    self.dishCount = ko.observable(1);
    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "Нет в наличии";
    });
}

function ReservationsViewModel() {
    var self = this;
    self.totalPrice = ko.observable(0);
    self.availableMeals = [
        { mealName: "Картофель с ризото", photo: "<img src='photo/PotatoesWithChorizo.jpg'> ", price: 99.99, available: "есть" },
        { mealName: "Картошка с тушенкой", photo: "<img src='photo/КАРТОШКА_С_ТУШЕНКОЙ.jpg'>", price: 149.99, available: "есть" },
        { mealName: "Котлетки на подушке из цукини", photo: "<img src='photo/КОТЛЕТКИ_НА_ПОДУШКЕ_ИЗ_ЦУКИНИ.jpg'>", price: 179.99, available: "есть" },
        { mealName: "Куриные крылышки", photo: "<img src='photo/КУРИНЫЕ_КРЫЛЫШКИ.jpg'>", price: 74.99, available: "есть" },
        { mealName: "Куриные шашлыки", photo: "<img src='photo/КУРИНЫЕ_ШАШЛЫЧКИ_SATAY.jpg'>", price: 59.99, available: "есть" },
        { mealName: "Курица в соляно-апельсиновом маринаде", photo: "<img src='photo/КУРИЦА_В_СОЛЯНО-АПЕЛЬСИНОВОМ_МАРИНАДЕ.jpg'>", price: 99.99, available: "есть" },
        { mealName: "Макароны с мясом по-грузински", photo: "<img src='photo/МАКАРОНЫ_С_МЯСОМ_ПО-ГРУЗИНСКИ.jpg'>", price: 59.99, available: "нет" },
        { mealName: "Паста с семгой и креветками", photo: "<img src='photo/ПАСТА_С_СЕМГОЙ_И_КРЕВЕТКАМИ.jpg'>", price: 0, available: "есть" },
        { mealName: "Ризотто с помидорами", photo: "<img src='photo/РИЗОТТО_С_ПОМИДОРАМИ_И_БАЗИЛИКОМ.jpg'>", price: 0, available: "есть" },
        { mealName: "Рисовая бабка", photo: "<img src='photo/РИСОВАЯ_БАБКА.jpg'>", price: 0, available: "есть" },
        { mealName: "Скумбрия запеченная", photo: "<img src='photo/СКУМБРИЯ_ЗАПЕЧЕННАЯ_С_ПАПРИКОЙ_И_ЧЕСНОКОМ.jpg'>", price: 0, available: "есть" },
        { mealName: "Спагетти с памидорами", photo: "<img src='photo/СПАГЕТТИ_СО_СВЕЖИМИ_ПОМИДОРАМИ.jpg'>", price: 0, available: "есть" },
        { mealName: "Судак с лимоном и луком", photo: "<img src='photo/судак_с_лимоном_и_луком.jpg'>", price: 0, available: "есть" },
        { mealName: "Тушенная картошка", photo: "<img src='photo/ТУШЕНАЯ_КАРТОШКА_В_МУЛЬТИВАРКЕ_С_КУРИНЫМ_ФИЛЕ.jpg'>", price: 0, available: "есть" },
        { mealName: "Фрикадельки", photo: "<img src='photo/ФРИКАДЕЛЬКИ_ИЗ_ИНДЮШКИЕ.jpg'>", price: 0, available: "есть" }
    ];

    self.seats = ko.observableArray([
        new SeatReservation(self.availableMeals[0]),
        new SeatReservation(self.availableMeals[1]),
        new SeatReservation(self.availableMeals[2]),
        new SeatReservation(self.availableMeals[3]),
        new SeatReservation(self.availableMeals[4]),
        new SeatReservation(self.availableMeals[5]),
        new SeatReservation(self.availableMeals[6])
    ]);

    self.addPrice = function(data) {
        var count = +data.dishCount() * data.meal().price;
        self.totalPrice(self.totalPrice() + count);
        data.dishCount(data.dishCount() + 1);
    }
}

ko.applyBindings(new ReservationsViewModel());
