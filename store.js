import { observable, computed } from "mobx"
import { onError } from "mobx-react"

class Store {
    @observable products = [];
    @observable cart = [];

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
            quantity
        })

        console.log('Added', this.cart);
    }

    prepareCart(item, quantity) {
        const update = this.isItemInCart(item.id)

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
