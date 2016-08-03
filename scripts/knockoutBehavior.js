
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

    self.formattedTotalPrice = ko.computed(function() {
        var price = self.totalPrice();
        return price.toFixed(2);
    });
    self.availableMeals = [
        { mealName: "Картофель с ризото", photo: "<img src='photo/dish1.jpg'> ", price: 9.99, available: "есть" },
        { mealName: "Картошка с тушенкой", photo: "<img src='photo/dish2.jpg'>", price: 19.99, available: "есть" },
        { mealName: "Котлетки на подушке из цукини", photo: "<img src='photo/dish3.jpg'>", price: 19.99, available: "есть" },
        { mealName: "Куриные крылышки", photo: "<img src='photo/dish4.jpg'>", price: 7.99, available: "есть" },
        { mealName: "Куриные шашлыки", photo: "<img src='photo/dish5.jpg'>", price: 5.99, available: "есть" },
        { mealName: "Курица в соляно-апельсиновом маринаде", photo: "<img src='photo/dish6.jpg'>", price: 9.99, available: "есть" },
        { mealName: "Макароны с мясом по-грузински", photo: "<img src='photo/dish7.jpg'>", price: 5.99, available: "нет" },
        { mealName: "Паста с семгой и креветками", photo: "<img src='photo/dish8.jpg'>", price: 4.49, available: "есть" },
        { mealName: "Ризотто с помидорами", photo: "<img src='photo/dish9.jpg'>", price: 0, available: "нет" },
        { mealName: "Рисовая бабка", photo: "<img src='photo/dish10.jpg'>", price: 9.99, available: "есть" },
        { mealName: "Скумбрия запеченная", photo: "<img src='photo/dish11.jpg'>", price: 0, available: "нет" },
        { mealName: "Спагетти с памидорами", photo: "<img src='photo/dish12.jpg'>", price: 12.49, available: "есть" },
        { mealName: "Судак с лимоном и луком", photo: "<img src='photo/dish13.jpg'>", price: 19.99, available: "есть" },
        { mealName: "Тушенная картошка", photo: "<img src='photo/Тdish14.jpg'>", price: 24.99, available: "есть" },
        { mealName: "Фрикадельки", photo: "<img src='photo/dish15.jpg'>", price: 5.99, available: "есть" }
    ];

    self.seats = ko.observableArray([
        new SeatReservation(self.availableMeals[0]),
        new SeatReservation(self.availableMeals[1]),
        new SeatReservation(self.availableMeals[2]),
        new SeatReservation(self.availableMeals[3]),
        new SeatReservation(self.availableMeals[4]),
        new SeatReservation(self.availableMeals[5]),
        new SeatReservation(self.availableMeals[6]),
        new SeatReservation(self.availableMeals[7]),
        new SeatReservation(self.availableMeals[8]),
        new SeatReservation(self.availableMeals[9])
    ]);

    self.addPrice = function(data) {
        var count = +data.dishCount() * data.meal().price;
        var r = self.totalPrice(self.totalPrice() + count);
        data.dishCount(+data.dishCount() + 1);
    }

    this.resetClicks = function(data) {
        self.totalPrice(0);
    };
}

ko.applyBindings(new ReservationsViewModel());
