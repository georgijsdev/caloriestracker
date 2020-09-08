// Storage

// Items
const ItemCtrl = (function() {
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    const data = {
      items: [
          {id: 0, name: 'Steak Dinner', calories: 500}
      ],
      currentItem: null, 
      totalCalories: 0
    }

    return {
        getItems: function() {
            return data.items;
        },
        logData: function() {
            return data;
        }
    }
})();

// DOM
const DOMCtrl = (function() {
    const UISelectors = {
        itemList: '#item-list'
    }

    return {
        populateItemList: function(items) {
            let html = '';

            items.map(item => {
                html += 
                    `<li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>`;
            });

            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function() {
            return UISelectors;
        }
    }
})();

// App
const AppCtrl = (function(ItemCtrl, DOMCtrl) {
    const loadEL = function() {
        const UISelectors = DOMCtrl.getSelectors();
    }

    return {
        init: function() {
            const items = ItemCtrl.getItems();

            DOMCtrl.populateItemList(items);
        }
    }
})(ItemCtrl, DOMCtrl);

// Initializing
AppCtrl.init();