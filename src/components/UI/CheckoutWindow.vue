<template>
    <div class="win">
        <div class="cwindow" @click.stop="$emit('closeCheckout', true)">
        <div class="cwindow__counter">
            <p>Your cart (4)</p>
            <img style="cursor: pointer;" src="@/assets/icons/closeicon.png" @click.capture="$emit('closeCheckout', false)"/>
        </div>
        <div class="center">
            <div v-for="(item,index) in checkout" :key="index">
                <div class="center__card-line"></div>
                <div class="center__card">
                    <CheckoutCardModal :modal="item"/>
                     <img src="@/assets/icons/deleteicon2.png"/> 
                </div>
            </div>
        </div>
        <div class="cwindow-line"></div>
        <div class="cwindow__subtotal">
            <div class="cwindow__subtotal__sum">
                <p class="cwindow__subtotal__sum-p1">Subtotal:</p>
                <p class="cwindow__subtotal__sum-p2">$198.65</p>
            </div>
            <router-link to="/checkout" @click.capture="$emit('closeCheckout', false)">
                <div class="cwindow__subtotal__button">
                    <img src="@/assets/icons/cardicon.png"/>
                    <p>Checkout</p>
                </div>
            </router-link>
        </div>
        </div>
    </div>
</template>
<script>
import CheckoutCardModal from './CheckoutCardModal.vue';
import products from "@/data/products.json"

export default {
    components: { CheckoutCardModal },
    data() {
        return {
            products: products.products,
            checkout: []
        }
    },
     mounted() {
         this.checkout = JSON.parse(localStorage.getItem('checkout'))
    }
}
</script>
<style lang="scss" scoped> 
.win {
    display: flex;
    flex-direction: row-reverse;
}
.center {
    margin-top: 16px;
    margin-bottom: 156px;
    &__card {
        justify-content: space-between;
        display: flex;
        gap: 24px;
        margin: 16px 0 22px;
        align-items: flex-start;
        &-line {
        border: 1px solid #E5E8ED;
        margin: 0 -24px;
    }
    }
}
.cwindow {
    background: white;
    padding: 32px 24px;
    width: 20.83%;
    &__counter {
        font-weight: 700;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
    &-line {
        border: 1px solid #E5E8ED;
        margin: 0 -24px;
    }
    &__card {
        display: flex;
        align-items: center;
    }
    &__subtotal {
        &__sum {
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            &-p1 {
                color: #787A80;
            }
            &-p2 {
                font-weight: 700;
                font-size: 20px;
            }
        }
        &__button {
            display: flex;
            color: white;
            background: teal;
            padding: 13px 16px;
            font-weight: 500;
            border-radius: 4px;
            justify-content: center;
            gap: 9px;
        }
        a {
            text-decoration: none;
        }
    }
}
</style>