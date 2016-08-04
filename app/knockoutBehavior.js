
function SeatReservation(initialMeal) {
    var self = this;
    self.meal = ko.observable(initialMeal);
    self.dishCount = ko.observable(0);
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

    self.selectedFood = ko.observableArray();

    self.availableMeals = [
        { mealName: "Картофель с ризото", photo: "dish1.jpg", price: 9.99, priceCounter: 0, available: true, id: 1 },
        { mealName: "Картошка с тушенкой", photo: "dish2.jpg", price: 19.99,  priceCounter: 0, available: true, id: 2 },
        { mealName: "Котлетки на подушке из цукини", photo: "dish3.jpg", price: 19.99,  priceCounter: 0, available: true, id: 3 },
        { mealName: "Куриные крылышки", photo: "dish4.jpg", price: 5.99,  priceCounter: 0, available: true, id: 4 },
        { mealName: "Куриные шашлыки", photo: "dish5.jpg", price: 5.99, priceCounter: 0, available: true, id: 5 },
        { mealName: "Курица в соляно-апельсиновом маринаде", photo: "dish6.jpg", priceCounter: 0, price: 9.99, available: true, id: 6 },
        { mealName: "Макароны с мясом по-грузински", photo: "dish7.jpg", priceCounter: 0, price: 5.99, available: true, id: 7 },
        { mealName: "Паста с семгой и креветками", photo: "dish8.jpg", priceCounter: 0, price: 4.49, available: true, id: 8 },
        { mealName: "Ризотто с помидорами", photo: "dish9.jpg", price: 5.99, priceCounter: 0, available: false, id: 9 },
        { mealName: "Рисовая бабка", photo: "dish10.jpg", price: 9.99, priceCounter: 0, available: true, id: 10 },
        { mealName: "Скумбрия запеченная", photo: "dish11.jpg", price: 0, priceCounter: 0, available: false, id: 11 },
        { mealName: "Спагетти с памидорами", photo: "dish12.jpg", price: 12.49, priceCounter: 0, available: true, id: 12 },
        { mealName: "Судак с лимоном и луком", photo: "dish13.jpg", price: 19.99, priceCounter: 0, available: true, id: 13 },
        { mealName: "Тушенная картошка", photo: "dish14.jpg", price: 24.99, priceCounter: 0, available: true, id: 14 },
        { mealName: "Фрикадельки", photo: "dish15.jpg", price: 5.99, priceCounter: 0, available: true, id: 15 }
    ];

    var food = [];
    self.availableMeals.forEach(function(meal) {
        food.push(new SeatReservation(meal));
    })

    self.foods = ko.observableArray(food);

    self.removeFood = function(data, event) {
        self.selectedFood.remove(data);
        self.totalPrice(self.totalPrice() - data.meal().price);
    };

    self.addPrice = function(data) {
        if (data.dishCount() < 20) {
            data.dishCount(data.dishCount() + 1);
            data.meal().priceCounter = +data.dishCount() * data.meal().price;

            var total = 0;
            self.foods().forEach(function(meal) {
                total += meal.meal().priceCounter;
            });

            self.totalPrice(total);
            self.selectedFood.push(new SeatReservation(self.availableMeals[event.target.id - 1]));
        }
    }
    this.resetClicks = function(data) {
        self.totalPrice(0);
    };
    }

ko.applyBindings(new ReservationsViewModel());
