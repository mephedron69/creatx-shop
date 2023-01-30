<template>
    <div class="cardB">
        <div class="card">
        <div class="card__photo">
            <router-link to="/cart"><img class="proimage" :src="require('@/assets/products/'+ product.image + '.png')" /></router-link>
            <div class="card__photo__like">
                <img class="card__photo__favour" :class="{activeWishlist: statusWishlist}" @click="addWishlist(product)" src="@/assets/icons/favouricon.png"/>
                <div class="card__photo__back"></div>
                <img class="iconteal" src="@/assets/icons/hearticonteal.png"/>
            </div>
        </div>
        <p class="card-name"> {{ product.name }}</p>
        <p class="card-price">${{ product.price }}</p>
        <div class="info">
            <div class="info__top"> 
                <input type="radio"/>
                <input type="radio"/>
            </div>
            <div class="info__button" :class="{activeCheckout: statusCheckout}" @click="addCheckout(product)">
                <img src="@/assets/icons/cartadder.png"/>
                <div></div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "CardButton",
    props: ["product"],
    data() {
        return {
            statusCheckout: false,
            statusWishlist: false
        }
    },
    mounted() {
        let getCheckout = JSON.parse(localStorage.getItem('checkout')) || []
        getCheckout.findIndex(item => item.id == this.product.id) < 0 ? this.statusCheckout = false : this.statusCheckout = true

        let getWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        getWishlist.findIndex(item => item.id == this.product.id) < 0 ? this.statusWishlist = false : this.statusWishlist = true
    },  
    methods: {
        addCheckout(product) {
            let getCheckout = JSON.parse(localStorage.getItem('checkout'))
            if (getCheckout) {
                const result = getCheckout.findIndex(item => item.id == product.id)
                if (result < 0) {
                    getCheckout.push(product)
                    this.statusCheckout = true
                }
                else {
                    getCheckout.splice(result, 1)
                    this.statusCheckout = false
                }
                localStorage.setItem('checkout', JSON.stringify(getCheckout))
            }
            else {
                localStorage.setItem('checkout', JSON.stringify([product]))
                this.statusCheckout = true;
            }
        },
         addWishlist(product) {
            let getWishlist = JSON.parse(localStorage.getItem('wishlist'))
            if (getWishlist) {
                const result = getWishlist.findIndex(item => item.id == product.id)
                if (result < 0) {
                    getWishlist.push(product)
                    this.statusWishlist = true
                }
                else {
                    getWishlist.splice(result, 1)
                    this.statusWishlist = false
                }
                localStorage.setItem('wishlist', JSON.stringify(getWishlist))
            }
            else {
                localStorage.setItem('wishlist', JSON.stringify([product]))
                this.statusWishlist = true;
            }
        }

    }

}
</script>
<style lang="scss" scoped>
.proimage {
    width: 100%;
}
.cardB {
    // margin-bottom: 260px;
    // width: 285px;
}

// .iconteal {
//      position: relative;
//     display: none;
// }

.card {
        position: relative;
            z-index: 3;
    &__photo {
        position: relative;
        &__like {
              position: absolute;
            right: 24px;
            bottom: 25px;
            z-index: 2;
        }
        &__favour {
            position: absolute;
             right: 5.5px;
            bottom: 5px;
            z-index: 2;
            &:hover {   
                .iconteal {
                    display: block;
                }
            }
            &.activeWishlist {
                background:  url("@/assets/icons/hearticonteal.png") no-repeat;
            }
        }
        &__back {
            position: absolute;
            right: 0px;
            bottom: 0px;
            width: 32px;
            height: 32px;
            background: white;
            border-radius: 50%;
            z-index: 1;
        }
    }
    &-name {
        font-weight: 400;
        font-size: 18px;
        color: #424551;
        margin-top: 16px;
        margin-bottom: 8px;
        margin-left: 16px;
        
    }
    &-price {
        font-weight: 700;
        font-size: 20px;
        margin-left: 16px;
    }
    .info {
        display: none;
    }
    &:hover {
        box-shadow: 1px 4px 8px 0px rgba(34, 60, 80, 0.2);
        cursor: pointer;
        max-height: 100wh;
        padding-bottom: 16px;
        .info {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 4;
            display: block;
        &__top {
            display: flex;
            justify-content: space-between;
            margin: 20px 16px;
            height: 50px;
        }
        &__button {
            justify-content: center;
            background: teal;
            display: flex;
            color: white;
            align-items: center;
            padding: 14px 0;
            margin: 0 20px;
            gap: 4px;
            &:hover {
                 background: rgb(0, 113, 113);
            }
            &:after {
                content: "Add to cart";
            }

            &.activeCheckout {
                background: white;
                color: black;
                box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
                 &:hover {
                    background: url("@/assets/icons/inicon2.png");
                    color: white;
                    background: rgb(0, 113, 113);
                }
                &:after {
                    content: "Delete from cart";
                }
            }
        }
    }
    }

}

</style>