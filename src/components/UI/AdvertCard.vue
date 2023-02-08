<template>
        <div class="advert container">
        <div class="swipe">
            <p class="advert-p1">{{ text }}</p>
            <div ref="prev1" class="swiper-button-prev222"><img src="@/assets/icons/leftstrok.png"/></div>
            <div ref="next1" class="swiper-button-next222"><img src="@/assets/icons/rightstrok.png"/></div>
        </div>
        <swiper
            :breakpoints="breakpoints"
            :slidesPerView="slidesPerView"
            :spaceBetween="30"
            :slidesPerGroup="3"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :direction="'horizontal'"
            :pagination="{
            clickable: true,
            }"
            :navigation="{
                    nextEl: next1,
                    prevEl: prev1,
            }"
            class="mySwiper"
            >
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[1]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[3]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[5]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[2]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[0]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :style="'width:' + width" :product="products[7]"/></swiper-slide>
        </swiper>
        <button class="advert-button" :style="'display:' + numbers">{{button}}</button>
        </div>
</template>
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation])

import CardButton from './CardButton.vue';
import products from "@/data/products.json"



export default {
    props: ["background", "text", "button", "numbers", "width", "slidesPerView"],
    components: {
        Swiper,
        SwiperSlide,
        CardButton
    },
    data() {
        return {
            products: products.products,
            breakpoints: {
            991.98: {
            slidesPerView: 3,
            },
            767.98: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            0: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
        },
        }
    },
    setup() {
        const prev1 = ref(null);
        const next1 = ref(null);
        return {
            modules: [Navigation, Pagination],
            prev1,
            next1
        }
  },
}
</script>
<style lang="scss" scoped>
.swipe {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.swiper-button-prev222 {
    position: absolute;
    right: 48px;
    cursor: pointer;
    @media (max-width: $mobile + px) {
        display: none;
    }
}
.swiper-button-next222 {
        cursor: pointer;
        @media (max-width: $mobile + px) {
        display: none;
    }
}


.mySwiper {
    margin-top: 60px;
    width: auto;
}
.advert {
    &-p1 {
        font-weight: 900;
        font-size: 46px;
        @media (max-width: $mobile + px) {
            font-size: 24px;
            margin: auto;
        }
    }
    &-button {
        font-weight: 500;
        font-size: 16px;
        border: 2px solid teal;
        border-radius: 4px;
        padding: 15px 42px;
        display: flex;
        justify-content: space-between;
        color: teal;
        background: none;
        margin-left: auto;
        margin-right: auto;
        margin-top: 96px;
    }
}  
</style>