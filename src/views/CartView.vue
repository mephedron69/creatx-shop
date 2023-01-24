<template>
    <div class="cart">
         <div class="account-back">
            <div class="cart__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="cart__nav-p1">Women</p> 
                <img src="@/assets/icons/linestok.svg"/> 
                <p class="cart__nav-p1" style="color: black;">Clothes</p>
            </div>
        </div> 
        <CartBlock :cart="products[0]"/>
        <div class="cart__advert1 container">
            <div class="cart__advert1-p1">
                <p>Complete your look</p>
                <div>
                    <div ref="prevLook" class="newPrev"><img src="@/assets/icons/leftstrok.png"/></div>
                    <div ref="nextLook" class="newNext"><img src="@/assets/icons/rightstrok.png"/></div>
                </div>
            </div>
            <div class="cart__advert1__content">
                <img src="@/assets/images/advert1image.png" />
                <swiper
                    :slidesPerView="2"
                    :spaceBetween="30"
                    :slidesPerGroup="2"
                    :pagination="paginationNew"
                    :navigation="{
                        nextEl: nextLook,
                        prevEl: prevLook,
                    }"
                    :modules="modules"
                    class="mySwiper"
                    >
                    <swiper-slide><CardButton :product="products[1]"/></swiper-slide>
                    <swiper-slide><CardButton :product="products[3]"/></swiper-slide>
                    <swiper-slide><CardButton :product="products[5]"/></swiper-slide>
                    <swiper-slide><CardButton :product="products[2]"/></swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="cart__advert2">
            <advert-card text="You may be interested in" numbers="none" width="100%" slidesPerView="4"/>
        </div>
        <div class="cart__advert3">
            <advert-card text="Recently viewed" numbers="none" width="100%" slidesPerView="4"/>
        </div>
        <notice-block />
    </div>
</template>
<script>
import products from "@/data/products.json"
import CartBlock from "@/components/UI/CartBlock.vue"
import NoticeBlock from '@/components/UI/NoticeBlock.vue';
import CardButton from '@/components/UI/CardButton.vue';
import AdvertCard from "@/components/UI/AdvertCard.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

import { ref } from 'vue';
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation])

export default {
    data() {
        return {
            products: products.products
        }
    },
    components: {CartBlock, NoticeBlock, Swiper,
        SwiperSlide, CardButton, AdvertCard
    },
    setup() {
        const prevLook = ref(null);
        const nextLook = ref(null);
    return {
        modules: [Pagination, Navigation,],
        nextLook,
        prevLook,
        paginationNew: {
            clickable: true,
            type: 'bullets',
            bulletClass: 'bulletsNew',
            bulletActiveClass: 'bullets-activeNew',
            dynamicBullets: true,
            renderBullet: function (index, className) {
            return '<span class="' + "bulletsNew" + '">' + (index + 1) + "</span>";
            },
        }
    };
     },

}
</script>
<style lang="scss" scoped>

.newPrev {
    position: absolute;
    right: 48px;
    top: 15px;
}
.newNext {
    right: 0;
    position: absolute;
    top: 15px;
}
.account-back {
        background: #F4F5F7;
        padding: 16px 0;
}
.cart {
     &__nav {
       display: flex; 
       gap: 13px;
       &-p1 {
        font-weight: 400;
        font-size: 14px;
        color: #9A9CA5;
       }
    }
    &__advert1 {
        img {
            object-fit: cover;
            height: fit-content;
        }
        margin-top: 180px;
        margin-bottom: 180px;
        &-p1 {
            position: relative;
            display: flex;
            justify-content: space-between;
            font-weight: 900;
            font-size: 46px;
            margin-bottom: 60px;
        }
        &__content {
            display: flex;
            justify-content: space-between;
        }
    }
    &__advert2 {
        background: #E5E8ED;
        padding: 80px 0;
    }
    &__advert3 {
        background: white;
        padding: 80px 0;
    }
}  

</style>