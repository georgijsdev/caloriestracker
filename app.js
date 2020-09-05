// Storage

// Items
const ItemCtrl = (function () {
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
      item: [
          {id: 0, name: 'Steak Dinner', calories: 500}
      ],
      currentItem: null, 
      totalCalories: 0
    }
})();

// DOM
const DOMCtrl = (function () {
    
})();

// App
const AppCtrl = (function (ItemCtrl, DOMCtrl) {
    
})(ItemCtrl, DOMCtrl);+ //6s:32