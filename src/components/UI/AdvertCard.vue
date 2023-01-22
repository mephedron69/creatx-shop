<template>
        <div class="advert container">
        <p class="advert-p1">{{ text }}</p>
        <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :slidesPerGroup="3"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
            clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            >
            <swiper-slide><CardButton class="cardb" :product="products[1]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :product="products[3]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :product="products[5]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :product="products[2]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :product="products[0]"/></swiper-slide>
            <swiper-slide><CardButton class="cardb" :product="products[7]"/></swiper-slide>
        </swiper>
        <button class="advert-button">{{button}}</button>
        </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import { Pagination, Navigation } from "swiper";
import CardButton from './CardButton.vue';
import products from "@/data/products.json"


export default {
    props: ["background", "text", "button"],
    components: {
    Swiper,
    SwiperSlide, CardButton, products
    },
    data() {
        return {
            products: products.products
        }
    },
  setup() {
    return {
      modules: [Pagination, Navigation,],
    };
  },
}
</script>
<style lang="scss" scoped>
.cardb {
    width: 390px !important;
    img {
         width: 390px !important;
    }
}


.mySwiper {
    margin-top: 60px;
    margin-bottom: 96px;
    width: auto;
}
.advert {
    &-p1 {
        font-weight: 900;
        font-size: 46px;
    }
    &-button {
        font-weight: 500;
        font-size: 16px;
        border: 2px solid teal;
        border-radius: 4px;
        padding: 15px 42px;
        display: flex;
        margin: auto;
        color: teal;
        background: none;
    }
}  
</style>