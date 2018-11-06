import { autorun, observable, computed } from "mobx"
import { onError } from "mobx-react"

// MobX is a simple data layer that manages state.
//
// MobX touts that makes it impossible to produce an inconsistent state.
//
// In fact, everything that can be derived from the application state
// will be derived automatically.
//
// MobX doesn’t run all derivations, but ensures that only computed values that are involved in some
// reaction are kept in sync with the observable state. Those derivations
// are called to be reactive.
//
// Everything happens synchronously
//
// ## Under the hood
// 1. Stale notifications sent and new values are stored
// 2. Ready notifications sent that confirms if a value was changed
// 3. Derivations wait for ready notifications and diffs against stale notifcations to know what to recompute
// 4. If no ready notifcations indicate a value change, derivations tell observers that they're ready to go!
//
//
// ### Pros
// 1. It easy to set up and get started.
// 2. Eliminates inconsistency in state
// "One should not imperatively act on state changes by using manually defined subscriptions
// or cursors. This will inevitably lead to bugs as a result of under- or oversubscribing."
// 3. Aims to limit wasted rendering to 0!
// 4. Influenced by OOP
//
// ### Cons
// 1. Relies on the use of newer JS features that aren’t widely supported yet (Decorators).
// 2. Could be difficult to track data changes in larger applications
//
// ### Resources
// [MobX: Ten minute introduction to MobX and React](https://mobx.js.org/getting-started.html)
// [Becoming fully reactive: an in-depth explanation of MobX](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)

// ### Repo
// https://github.com/digsby06/cheese-shop-frontend


class Store {
    // Observables are any value that can be mutated. Can be objects, primitives, classes, arrays...you name it!

    @observable products = []
    @observable cart = []

    // Computed properties operate on observable values. These bad boys react to state changes.
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

    // Actions do the dirty work and are the primary means to modifying state.

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
