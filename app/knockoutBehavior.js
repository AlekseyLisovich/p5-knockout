
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);
    self.dishCount = ko.observable(1);
    self.availabity = ko.computed(function() {
        var available = self.meal().available;
        return available ? "Есть" : "Нет в наличии";
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
        { mealName: "Картофель с ризото", photo: "dish1.jpg", price: 9.99, available: true },
        { mealName: "Картошка с тушенкой", photo: "dish2.jpg", price: 19.99, available: true },
        { mealName: "Котлетки на подушке из цукини", photo: "dish3.jpg", price: 19.99, available: true },
        { mealName: "Куриные крылышки", photo: "dish4.jpg", price: 5.99, available: true },
        { mealName: "Куриные шашлыки", photo: "dish5.jpg", price: 5.99, available: true },
        { mealName: "Курица в соляно-апельсиновом маринаде", photo: "dish6.jpg", price: 9.99, available: true },
        { mealName: "Макароны с мясом по-грузински", photo: "dish7.jpg", price: 5.99, available: true },
        { mealName: "Паста с семгой и креветками", photo: "dish8.jpg", price: 4.49, available: true },
        { mealName: "Ризотто с помидорами", photo: "dish9.jpg", price: 5.99, available: false },
        { mealName: "Рисовая бабка", photo: "dish10.jpg", price: 9.99, available: true },
        { mealName: "Скумбрия запеченная", photo: "dish11.jpg", price: 0, available: false },
        { mealName: "Спагетти с памидорами", photo: "dish12.jpg", price: 12.49, available: true },
        { mealName: "Судак с лимоном и луком", photo: "dish13.jpg", price: 19.99, available: true },
        { mealName: "Тушенная картошка", photo: "dish14.jpg", price: 24.99, available: true },
        { mealName: "Фрикадельки", photo: "dish15.jpg", price: 5.99, available: true }
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
        new SeatReservation(self.availableMeals[9]),
        new SeatReservation(self.availableMeals[10]),
        new SeatReservation(self.availableMeals[11]),
        new SeatReservation(self.availableMeals[12]),
        new SeatReservation(self.availableMeals[13]),
        new SeatReservation(self.availableMeals[14])
    ]);

    self.addPrice = function(data) {
    if (data.dishCount() < 20) {
        data.dishCount(+data.dishCount() + 1);
        var count = +data.dishCount() * data.meal().price;
        var r = self.totalPrice(self.totalPrice() + count);
    }
}
    this.resetClicks = function(data) {
        self.totalPrice(0);
    };
}

ko.applyBindings(new ReservationsViewModel());
