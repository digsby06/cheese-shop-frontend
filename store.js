import { observable, computed } from "mobx"
import { onError } from "mobx-react"

class Store {
    // Observables:
    @observable products = []
    @observable cart = []

    // Computed properties:
    @computed get allProducts() {
        return this.products;
    }

    @computed get productsInCart() {
        return this.cart;
    }


    @computed get cartAmount() {
        let amount;

        if (!this.cart.length) {
            amount = 0
        } else {
            amount = this.cart
                .map(item => item.quantity)
                .reduce((prev, curr) => prev + curr)
        }

        return amount
    }

    @computed get subtotal() {

        if(!this.cart.length) {
          return 0;
        } else {
          let vals = []

          for (let i = 0; i < this.cart.length; i++) {
              vals.push(this.cart[i].details.price * this.cart[i].quantity)
          }

          return vals.reduce((prev, curr) => prev + curr);
        }
    }

    // Actions:
    emptyCart() {
        this.cart = [];
    }

    persistCart(cart) {
        this.cart = cart;
    }

    setProducts(array) {
        this.products = array || [];
    }

    findIndex(item) {
        const index = this.cart.findIndex(el => el.id === item.id)
        return index
    }

    updateProduct(item, quantity) {
        // find index of item in shopping cart
        const index = this.findIndex(item)

        // remove it and replace with the updated obj
        this.cart.splice(index, 1, {
            id: item.id,
            details: item.attributes,
            quantity
        })
    }

    isItemInCart(id) {
        const update = this.cart.filter(item => item.id === id)
        return update
    }

    addToCart(item, quantity) {
      console.log('From store', item);
        this.cart.push({
            id: item.id,
            details: item.attributes,
            quantity
        })
    }

    prepareCart(item, quantity) {
        const update = this.isItemInCart(item.id)

        // Check if the update array is empty

        if (!update.length) {
            this.addToCart(item, quantity)
        } else {
            this.updateProduct(item, quantity)
        }
    }
}

// log mobx errors
onError(error => {
    console.log(error)
});

// export singleton store
export const store = new Store();
