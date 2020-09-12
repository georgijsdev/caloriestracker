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
        addItem: function(name, calories) {
            let ID;
            
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            calories = parseInt(calories);

            newItem = new Item(ID, name, calories);

            data.items.push(newItem);

            return newItem;
        },
        logData: function() {
            return data;
        }
    }
})();

// DOM
const DOMCtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addbtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
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
                    </li>`
                ;
            });

            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        getSelectors: function() {
            return UISelectors;
        },
        addListItem : function(item) {
            const li = document.createElement('li');
            
            li.classList.add('collection-item');
            li.id = `item-${item.id}`;

            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>`
            ;
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        }
    }
})();

// App
const AppCtrl = (function(ItemCtrl, DOMCtrl) {
    const loadEL = function() {
        const UISelectors = DOMCtrl.getSelectors();

        document.querySelector(UISelectors.addbtn).addEventListener('click', itemAddSubmit);
    }

    const itemAddSubmit = e => {
        const input = DOMCtrl.getItemInput();

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            DOMCtrl.addListItem(newItem);

            DOMCtrl.clearInput();
        }

        e.preventDefault();
    }

    return {
        init: function() {
            const items = ItemCtrl.getItems();

            DOMCtrl.populateItemList(items);

            loadEL();
        }
    }
})(ItemCtrl, DOMCtrl);

// Initializing
AppCtrl.init();