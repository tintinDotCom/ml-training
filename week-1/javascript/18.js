/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */


function createShoppingCart() {
    const cart = [];
  
    return {
      addItem: (item) => {

        if (cart.length === 10) {
          return "Cart is full, cannot add more items.";
        }

        cart.push(item);
        return `Added ${item.name} to the cart.`;
      },
      removeItem: (itemName) => {
        const itemIndex = cart.findIndex((item) => item.name === itemName);
        if (itemIndex === -1) {
          return `${itemName} is not in the cart.`;
        }
  
        const removedItem = cart.splice(itemIndex, 1)[0];
        return `Removed ${removedItem.name} from the cart.`;
      },
      getTotalPrice: () => {
        return cart.reduce((total, item) => total + item.price, 0);
      },
      getTotalItems: () => {
        return cart.length;
      },
    };
  }
  

  const cart = createShoppingCart();
  
console.log(cart.addItem({ name: "apple", price: 10 })); 
console.log(cart.addItem({ name: "banana", price: 12 })); 
console.log(cart.addItem({ name: "orange", price: 15 })); 
console.log(cart.addItem({ name: "grape", price: 200 })); 
console.log(cart.addItem({ name: "pear", price: 50 })); 
console.log(cart.addItem({ name: "kiwi", price: 60 })); 
console.log(cart.addItem({ name: "mango", price: 80 })); 
console.log(cart.addItem({ name: "peach", price: 60 })); 
console.log(cart.addItem({ name: "plum", price: 80 })); 
console.log(cart.addItem({ name: "strawberry", price: 100 })); 
console.log(cart.addItem({ name: "blueberry", price: 200 })); 


console.log('Total items in the cart')
console.log(cart.getTotalItems()); 
console.log('Total price')
console.log(cart.getTotalPrice()); 
