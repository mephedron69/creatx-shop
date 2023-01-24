<template>
    <div class="content container">
        <div class="block1">
            <div class="block1__name">
                <p class="block1__name-p1">{{ cart.name }}</p>
                <div class="block1__name-p2">
                    <p>Art. No.</p>
                    <p>183260098</p>
                </div>
            </div>
            <div class="block1__info">
                <p class="block1__info-p1" @click="openCard(0)">General info</p>
                <p style="color: #9A9CA5;" @click="openCard(1)">Product details</p>
                <div class="block1__info__p2" @click="openCard(2)">
                    <p>Reviews </p>
                    <p class="block1__info__p2-p2">12</p>
                </div>
            </div>
            <div class="block1-line"></div>
        </div>
        <div class="blockbet" v-if="cardId == 0">
        <div class="content__left">
            <img class="cartimage" :src="require('@/assets/products/'+ cart.image + '.png')"/>
            <div>Тут слайдеры</div>
        </div>
            <div class="content__right">
              
            <div class="content__right__price">
                <div class="content__right__price__left">
                    <p class="content__right__price__left-p1">{{ cart.price }}</p>
                    <div class="content__right__price__left-p2">-50%</div>
                </div>
                <div class="content__right__price__right">
                    <p>•••••••</p>
                    <p>12 reviews</p>
                </div>
            </div>
            <div class="content__right__color">
                <p>Color</p>
                <div class="content__right__color__select">
                    <div class="content__right__color__select__box">
                        <div class="content__right__color__select__box-out"> </div>
                        <div class="content__right__color__select__box-in" style="background: red;"> </div>
                    </div>
                    <div class="content__right__color__select__box">
                        <div class="content__right__color__select__box-out"> </div>
                        <div class="content__right__color__select__box-in" style="background: blue;"> </div>
                    </div>
                    <div class="content__right__color__select__box">
                        <div class="content__right__color__select__box-out"> </div>
                        <div class="content__right__color__select__box-in" style="background: green;"> </div>
                    </div>
                    <p style="color: #9A9CA5;">pink</p>
                </div>
            </div>
            <div class="content__right__size">
                <p>Size</p>
                <div class="content__right__size__input">
                    <select>
                        <option>Please select</option>
                        <option>XS</option>
                        <option>S</option>
                    </select>
                    <div class="content__right__size__input-right">
                        <img src="@/assets/icons/charticon.png"/>
                        <p>Size chart</p>
                    </div>
                </div>
                <div class="content__right__size__adder">
                    <input class="content__right__size__adder__input" type="number" value="1"/>
                    <div class="content__right__size__adder__tocart">
                        <img src="@/assets/icons/cartadder.png"/>
                        <p>Add to cart</p>
                    </div>
                    <div class="content__right__size__adder__favor">
                        <img src="@/assets/icons/hearticon.png"/>
                        <p>Favourite</p>
                    </div>
                </div>
            </div>
            <div class="content__right__swipe">
                <div class="content__right__swipe__box"> 
                    <p style="font-weight: 700;">Delivery</p>
                    <img src="@/assets/icons/plusicon.png" @click="openDelivery = !openDelivery"/>
                </div>
                <div class="content__right__swipe__delivery" v-if="openDelivery ">
                    <p class="content__right__swipe__delivery-p1">Free standard shipping on orders over $35 before tax, plus free returns.</p>
                    <div class="delivery">
                        <div style="color: #787A80" class="content__right__swipe__delivery-text">
                            <p>TYPE</p>
                            <p>HOW LONG</p>
                            <p>HOW MUCH</p>
                        </div>
                        <div class="content__right__swipe__delivery-line"></div>
                        <div class="content__right__swipe__delivery-text">
                            <p style="width: 114px;">Standard delivery</p>
                            <p style="width: 160px;">1-4 business days</p>
                            <p style="width: 90px;">$4.50</p>
                        </div>
                        <div class="content__right__swipe__delivery-line"></div>
                        <div class="content__right__swipe__delivery-text">
                            <p style="width: 114px;">Express delivery</p>
                            <p style="width: 160px;">1 business day</p>
                            <p style="width: 90px;">$10.00</p>
                        </div>
                        <div class="content__right__swipe__delivery-line"></div>
                        <div class="content__right__swipe__delivery-text">
                            <p style="width: 114px;">Pick up in store</p>
                            <p style="width: 160px;">1-3 business days</p>
                            <p style="width: 90px;">Free</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content__right-line"></div>
             <div class="content__right__swipe">
                <div class="content__right__swipe__box"> 
                    <p style="font-weight: 700;">Return</p>
                    <img src="@/assets/icons/plusicon.png" @click="openReturn = !openReturn"/>
                </div>
                <div class="content__right__swipe__return" v-if="openReturn">
                    <p class="content__right__swipe__return-p1">
                        You have 60 days the item(s) using any of the following methods:
                    </p>
                    <div>
                         <p>• Free store return</p>
                         <p>• Free returns via USPS Dropoff Service</p>
                    </div>
                </div>
            </div>
            <div class="content__right-line"></div>
            <div class="content__right__share">
                <p>Share: </p>
                <img src="@/assets/icons/facebook2.png"/>
                <img src="@/assets/icons/twiticon2.png"/>
                <img src="@/assets/icons/pinterest2.png"/>
            </div>
            <div class="content__right__pay">
                <img src="@/assets/icons/visabig.png"/>
                <img src="@/assets/icons/masterbig.png"/>
                <img src="@/assets/icons/paypalbig.png"/>
            </div>
        </div>
    </div>
    <div class="detail" v-if="cardId == 1">
        fff
    </div>
    <div class="review" v-if="cardId == 2">
        Review
    </div>
    </div>
</template>
<script>
export default {
    props: ["cart"],
    data() {
        return {
            openReturn: false,
            openDelivery: false,
            cardId: 0
        }
    },
    methods: {
        openCard(id) {
            this.cardId = id;
        }
    }
}
</script>
<style lang="scss" scoped>
.delivery {
    padding: 0 25px;
    margin-bottom: 12px;
}
.cartimage {
    width: 600px;
    height: 600px;
}
.block1 {
        &__name {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 32px 0;
            &-p1 {
                font-weight: 900;
                font-size: 46px;
            }
            &-p2 {
                color: #787A80;
                display: flex;
            }
        }
        &__info {
            display: flex;
            gap: 52px;
            align-items: center;
            &-p1 {
                border: 2px solid teal;
                color: teal;
                font-size: 16px;
                align-items: center;
                padding: 12.5px 22px;
                border-radius: 4px;
            }
            &__p2 {
                display: flex;
                color: #9A9CA5;
                &-p2 {
                    font-weight: 900;
                    font-size: 10px;
                }
            }
        }
        &-line {
            border: 1px solid #E5E8ED;
            margin: 30px 0;
        }
    }

.blockbet {
    display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 8.29%;
}
.content {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 8.29%;
            &__right {
                width: 100%;
                 &__share {
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    img {
                        opacity: 0.7;
                    }
               }
               &__pay {
                display: flex;
                gap: 24px;
                margin-top: 60px;
               }
                &__price {
                    justify-content: space-between;
                    display: flex;
                    &__left {
                        display: flex;
                        gap: 34px;
                        align-items: center;
                        &-p1 {
                            font-weight: 700;
                            font-size: 24px;
                            color: red;
                        }   
                        &-p2 {
                            font-weight: 700;
                            color: white;
                            background: red;
                            padding: 5px 8px;
                            border-radius: 4px;
                        }
                    }
                }
                &__color {
                    margin: 24px 0;
                    &__select {
                        display: flex;
                        gap: 12px;
                        margin-top: 12px;
                        align-items: center;
                        &__box {
                            position: relative;
                            &-out {
                                border: 1px solid teal;
                                border-radius: 50%;
                                width: 24px;
                                height: 24px;
                            }
                            &-in {  
                                position: absolute;
                                left: 4.5px;
                                bottom: 4.5px;
                                border-radius: 50%;
                                width: 16px;
                                height: 16px; 
                            }
                        }
                    }
                }
                &__size {
                    margin-bottom: 48px;
                    &__input {
                        margin-top: 8px;
                        margin-bottom: 32px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        select {
                            outline: none;
                            width: 348px;
                            padding: 12.7px 16px;
                            background: #FFFFFF;
                            border: 1px solid #D7DADD;
                            border-radius: 4px;
                        }
                            &-right {
                                display: flex;
                                align-items: center;
                                gap: 8px;
                            }
                    }
                    &__adder {
                        display: flex;
                        justify-content: space-between;
                        &__input {
                            padding: 13.6px 16px;
                            width: 44.5px;
                            border: 1px solid #D7DADD;
                            border-radius: 4px;
                            outline: none;

                        }
                        &__tocart{
                            padding: 0 16px;
                            width: 210.3px;
                            gap: 9px;
                            color: white;
                            justify-content: center;
                            display: flex;
                            align-items: center;
                            background: teal;
                            border: 1px solid #D7DADD;
                            border-radius: 4px;
                        }
                        &__favor {
                            padding: 0 16px;
                            width: 120px;
                            gap: 9px;
                            color: teal;
                            justify-content: center;
                            display: flex;
                            align-items: center;
                            border: 1px solid teal;
                            border-radius: 4px;
                        }
                    }
                }
                &__swipe {
                        &__box {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            img {
                                width: 15px;
                                cursor: pointer;
                            }
                        }
                        &__delivery {
                            margin-top: 16px;
                            display: flex;
                            flex-direction: column;
                            gap: 24px;
                            &-text {
                                display: flex;
                                justify-content: space-between;
                            }
                            &-line {
                                border: 1px solid #E5E8ED;
                                margin: 12px 0;
                                width: 85%;
                                display: flex;
                                justify-content: center;
                                margin-left: auto;
                                margin-right: auto;
                            }
                        }
                        &__return {
                            &-p1 {
                                margin-top: 16px;
                                margin-bottom: 12px;
                            }
                        }
                    }
                &-line {
                    border: 1px solid #E5E8ED;
                    margin: 20px 0;
                }    
            }
        }
        

</style>