<template>
    <div class="checkout">
         <div class="account-back">
            <div class="checkout__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="checkout__nav-p1">Checkout</p>  
            </div>
        </div>  
        <div class="checkout__content container">
            <div class="checkout__content__left">
                <div class="checkout__content__left__basic">
                    <p class="checkout__content__left__basic-p1">Checkout</p>
                    <p class="checkout__content__left__basic-p2">Back to shopping</p>
                </div>
                <div class="checkout__content__left__sign">
                    <img src="@/assets/icons/profilicon2.png"/>
                    <p>Already have an account?</p>
                    <p class="checkout__content__left__sign-up">Sign in</p>
                    <p> for faster checkout experience</p>
                </div>
            <div class="checkout__content__left-line"></div>
                <div class="checkout__content__left__item">
                    <p class="checkout__content__left__item-name">1. Item Review</p>
                    <div>
                        <CheckoutCard v-for="(item, i) in checkout" :key="i" :check="item" class="checkout__content__left__item__box"/>
                        <div class="checkout__content__left__item__total">Subtotal: $198.65</div>
                    </div>
                </div>
            <div class="checkout__content__left-line"></div>
                <div class="checkout__content__left__data">
                    <p class="checkout__content__left__data-name">2. Shipping & Billing Address</p>
                    <div class="checkout__content__left__data__block2">
                        <div class="checkout__content__left__data__block2-box">
                            <p>First Name</p>
                            <input type="text" placeholder="Your first name"/>
                        </div>
                        <div class="checkout__content__left__data__block2-box">
                            <p>Last Name</p>
                            <input type="text" placeholder="Your last name"/>
                        </div>
                        <div class="checkout__content__left__data__block2-box">
                            <p>Email</p>
                            <input type="text" placeholder="Your working email"/>
                        </div>
                        <div class="checkout__content__left__data__block2-box">
                            <p>Phone</p>
                            <input type="text" placeholder="Your phone number"/>
                        </div>
                        <div class="checkout__content__left__data__block2-box">
                            <p>Country</p>
                            <select>
                                <option style="color: #9A9CA5;" selected="true" disabled="disabled">Choose your country</option>
                                <option>Kazakstan</option>
                                <option>USA</option>
                                <option>Germany</option>
                            </select>
                        </div>
                         <div class="checkout__content__left__data__block2-box">
                            <p>City</p>
                            <select>
                                <option style="color: #9A9CA5;" selected="true" disabled="disabled">Choose your city</option>
                                <option>Almaty</option>
                                <option>Astana</option>
                                <option>Karaganda</option>
                            </select>
                        </div>
                         <div class="checkout__content__left__data__block2-box">
                            <p>Address</p>
                            <input type="text" placeholder="Your address"/>
                        </div>
                         <div class="checkout__content__left__data__block2-box">
                            <p>ZIP Code</p>
                            <input type="number" placeholder="Your ZIP code"/>
                        </div>
                    </div>
                    <div class="checkout__content__left__data-checkbox">
                        <input type="checkbox" />
                        <p>Billing and Shipping details are the same</p>
                    </div>
                </div>
            <div class="checkout__content__left-line"></div>
                <div class="checkout__content__left__courier">
                    <p class="checkout__content__left__courier-name">3. Shipping Method</p>
                    <div class="block3method">
                        <div class="checkout__content__left__courier__block3">
                        <div class="checkout__content__left__courier__block3__box">
                            <div class="checkout__content__left__courier__block3__box__left">
                                <input type="radio"/>
                                <div class="checkout__content__left__courier__block3__box__left__text">
                                    <p class="checkout__content__left__courier__block3__box__left__text-p1">Courier to your address</p>
                                    <p class="checkout__content__left__courier__block3__box__left__text-p2">Estimated date: September 9</p>
                                </div>
                            </div>
                            <p>$25.00</p>
                        </div>
                    </div>
                    <div class="checkout__content__left__courier__block3">
                        <div class="checkout__content__left__courier__block3__box">
                            <div class="checkout__content__left__courier__block3__box__left">
                                <input type="radio"/>
                                <div class="checkout__content__left__courier__block3__box__left__text">
                                    <p class="checkout__content__left__courier__block3__box__left__text-p1">Pick up from store</p>
                                    <p class="checkout__content__left__courier__block3__box__left__text-p2">Pick up on September 8 from 12:00</p>
                                </div>
                            </div>
                            <p>Free</p>
                        </div>
                    </div>
                    <div class="checkout__content__left__courier__block3">
                        <div class="checkout__content__left__courier__block3__box">
                            <div class="checkout__content__left__courier__block3__box__left">
                                <input type="radio"/>
                                <div class="checkout__content__left__courier__block3__box__left__text">
                                    <p class="checkout__content__left__courier__block3__box__left__text-p1">UPS Ground Shipping</p>
                                    <p class="checkout__content__left__courier__block3__box__left__text-p2">Up to one week</p>
                                </div>
                            </div>
                            <p>$10.00</p>
                        </div>
                    </div>
                    <div class="checkout__content__left__courier__block3">
                        <div class="checkout__content__left__courier__block3__box">
                            <div class="checkout__content__left__courier__block3__box__left">
                                <input type="radio"/>
                                <div class="checkout__content__left__courier__block3__box__left__text">
                                    <p class="checkout__content__left__courier__block3__box__left__text-p1">Pick up at Createx Locker</p>
                                    <p class="checkout__content__left__courier__block3__box__left__text-p2">Pick up on September 8 from 12:00</p>
                                </div>
                            </div>
                            <p>$8.50</p>
                        </div>
                    </div>
                    <div class="checkout__content__left__courier__block3">
                        <div class="checkout__content__left__courier__block3__box">
                            <div class="checkout__content__left__courier__block3__box__left">
                                <input type="radio"/>
                                <div class="checkout__content__left__courier__block3__box__left__text">
                                    <p class="checkout__content__left__courier__block3__box__left__text-p1">Createx Global Export</p>
                                    <p class="checkout__content__left__courier__block3__box__left__text-p2">3-4 days</p>
                                </div>
                            </div>
                            <p>$15.00</p>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="checkout__content__left-line"></div>
                <div class="checkout__content__left__payment">
                    <p class="checkout__content__left__payment-name">4. Payment Method</p>
                    <div class="checkout__content__left__payment__block4">
                        <payment-method img1="mastercardicon" img2="visaicon" text1="Credit card" text2="Credit card"/>
                        <payment-method img1="mastercardicon" img2="visaicon" text1="PayPal" text2="PayPal"/>
                        <payment-method img1="mastercardicon" img2="visaicon" text1="Cash on delivery" text2="Cash on delivery"/>
                    </div>
                </div>
            <div class="checkout__content__left-line"></div>
                <div class="checkout__content__left__note">
                    <p class="checkout__content__left__note-name">5. Additional Information (Optional)</p>
                    <p class="checkout__content__left__note-p1">Order notes</p>
                    <textarea placeholder="Notes about your order, e.g. special noted for delivery."></textarea>
                </div>
     </div>
        <div class="checkout__content__right">
                <p>Apply a promo code</p>
                <div class="checkout__content__right__button">
                    <input type="text" placeholder="Enter promo code"/>
                    <button>Apply</button>
                </div>  
                <div class="checkout__content__right__order">
                    <p class="checkout__content__right__order-name">Order totals</p>
                    <div class="checkout__content__right__order-line"></div>
                    <div class="total">
                         <div class="checkout__content__right__order-subtotal">
                        <p>Subtotal:</p>
                        <p>$198.65</p>
                    </div>
                    <div class="checkout__content__right__order-other">
                        <p>Shipping costs:</p>
                        <p>$25.00</p>
                    </div>
                     <div class="checkout__content__right__order-other">
                        <p>Discount:</p>
                        <p>—</p>
                    </div>
                     <div class="checkout__content__right__order-other">
                        <p>Estimated sales tax:</p>
                        <p>$6.35</p>
                    </div>
                    </div>
                    <div class="checkout__content__right__order-line"></div>
                     <div class="checkout__content__right__order-total">
                        <p>Order total:</p>
                        <p>$230.00</p>
                    </div>
                </div>
                <div class="checkout__content__right__complete">
                    <button>Complete order</button>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import PaymentMethod from '@/components/UI/PaymentMethod.vue';
import CardButton from '@/components/UI/CardButton.vue';
import products from "@/data/products.json"
import CheckoutCard from "@/components/UI/CheckoutCard.vue";

export default {
    data() {
        return {
            openCredit: false,
            products: products.products,
            checkout: []
        }
    },
    components: { PaymentMethod, CardButton , CheckoutCard},
    mounted() {
         this.checkout = JSON.parse(localStorage.getItem('checkout'))
    }
}
</script>
<style lang="scss" scoped>
input {
        background: #FFFFFF;
        border: 1px solid #D7DADD;
        border-radius: 4px;
        outline: none;
        padding: 17px 16px;
 }
 input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

 select {
    background: #FFFFFF;
        border: 1px solid #D7DADD;
        border-radius: 4px;
        outline: none;
        padding: 17px 16px;
 }
.total {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 16px 0;
}
.account-back {
        background: #F4F5F7;
        padding: 16px 0;
}
.checkout {
     &__nav {
       display: flex; 
       gap: 13px;
       &-p1 {
        font-weight: 400;
        font-size: 14px;
        color: #9A9CA5;
       }
    }
    &__content {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        margin-bottom: 180px;
        &__left {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 735px;
            &__basic {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &-p1 {
                    font-weight: 900;
                    font-size: 46px;
                }
                &-p2 {
                    text-decoration-line: underline;
                    color: teal;
                }
            }
            &__sign{
                background: rgba(23, 105, 106, 0.06);
                border: 1px solid rgba(23, 105, 106, 0.25);
                border-radius: 4px;
                display: flex;
                gap: 6px;
                padding: 19px 0 19px 21px;
                color: teal;
                &-up {
                    font-weight: 700;
                    text-decoration-line: underline;
                }
                img {
                    margin-right: 7px;
                }
            }
            &-line {
                border: 1px solid #E5E8ED;
            }
            &__item {
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &__box {
                    border: 1px solid #E5E8ED;
                }
                &__total {
                    width: 93.5%;
                    display: flex;
                    flex-direction: row-reverse;
                    padding: 24px;
                    background: #F4F5F7;
                    border: 1px solid #E5E8ED;
                    font-weight: 700;
                    font-size: 18px;
                }
            }
            &__data {
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &__block2 {
                    display: flex;
                    gap: 2%;
                    row-gap: 24px;
                    flex-wrap: wrap;
                    &-box {
                        width: 49%;
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                    }
                }
                &-checkbox {
                    margin-top: 32px;
                    display: flex;
                    gap: 15px;
                    input {
                        accent-color: teal;
                    }
                }
            }
            &__courier {
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &__block3 {
                    &__box {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        &__left {
                            align-items: flex-start;
                            display: flex;
                            gap: 16px;
                            input {
                                accent-color: teal;
                            }
                            &__text {
                                &-p1 {
                                    font-weight: 700;
                                }
                                &-p2 {
                                    color: #787A80;
                                }
                            }
                        }
                    }
                }
            }
             &__payment {
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &__block4 {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            }
             &__note     {
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &-p1 {
                    margin-bottom: 8px;
                }
                textarea {
                    padding-left: 16px;
                    padding-top: 13px;
                    width: 97%;
                    height: 117px;
                    resize: none;
                    outline: none;
                    background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                }
            }
        }
        &__right {
            width: 390px;
             &__button {
                margin-top: 8px;
                margin-bottom: 24px;
                input {
                    font-weight: 500;
                    font-size: 16px;
                    background: #FFFFFF;
                    outline: none;
                    border: 1px solid #D7DADD;
                    width: 233px;
                    padding: 13px 16px;
                }
                button {
                    font-weight: 500;
                    font-size: 16px;
                    color: white;
                    background: teal;
                    border: 1px solid teal;
                    padding: 13px 40px;

                }
            }
            &__order {
                    background: #F4F5F7;
                    border-radius: 4px;
                    padding: 24px;
                    margin-bottom: 24px;
                &-name {
                    font-weight: 700;
                    font-size: 24px;
                    margin-bottom: 24px;
                }
                &-line {
                    border: 1px solid #E5E8ED;
                    margin: 0 -24px;
                }
                &-subtotal {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                }
                &-other {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 400;
                }
                &-total {
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    font-size: 20px;
                    margin-top: 20px;
                }
            }
            &__complete {
                button {
                    border: none;
                    color: white;
                    background: teal;
                    padding: 13px 0;
                    width: 100%;
                }
            }
        }
    }
}
.block3method {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>