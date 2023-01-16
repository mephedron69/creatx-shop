<template>
    <div class="home">
        <div class="home__block1">
            <swiper :pagination="pagination" :modules="modules" class="mySwiper">
            <swiper-slide>
              <div class="homeblock">
                  <p class="home__block1-p1">NEW COLLECTION</p>
                  <p class="home__block1-p2">Menswear 2023</p>
                  <div class="home__block1__p3">
                      <div class="home__block1__p3-left">Shop sale</div>
                      <div class="home__block1__p3-right">Shop the menswear</div>
                  </div>
              </div>
            <img src="@/assets/icons/chapka.png"/>
          </swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
          </swiper>
        </div>
        <div class="home__block2">
            <div class="home__block2__sort">
              <img src="@/assets/products/block2p1.png"/>
              <p class="home__block2__sort__desc">Women’s</p>
            </div>
            <div class="home__block2__sort">
              <img src="@/assets/products/block2p2.png"/>
              <p class="home__block2__sort__desc">Men’s</p>
            </div>
            <div class="home__block2__sort">
              <img src="@/assets/products/block2p3.png"/>
              <p class="home__block2__sort__desc">Kids’</p>
            </div>
        </div>
        <div class="home__block3">
            <p class="home__block3-name">New arrivals</p>
            <p class="home__block3-desc">Check out our latest arrivals for the upcoming season</p>
            <router-link to="/">See the collection here</router-link>
            <div class="home__block3-card">
                 <swiper
                  :slidesPerView="10"
                  :spaceBetween="30"
                  
                  :pagination="{
                    clickable: true,
                  }"
                  :modules="modules"
                  class="mySwiper container"
                  >
                    <!-- <swiper-slide><CardButton v-for="(item) in tovar" :key="item" :product="item"/></swiper-slide> -->
                    <swiper-slide><img src="@/assets/products/product1.png"/></swiper-slide>
                     <swiper-slide><img src="@/assets/products/product2.png"/></swiper-slide>
                      <swiper-slide><img src="@/assets/products/product3.png"/></swiper-slide>
                       <swiper-slide><img src="@/assets/products/product4.png"/></swiper-slide>
                        <swiper-slide><img src="@/assets/products/product5.png"/></swiper-slide>
                         <swiper-slide><img src="@/assets/products/product6.png"/></swiper-slide>
                          <swiper-slide><img src="@/assets/products/product7.png"/></swiper-slide>
                           <swiper-slide><img src="@/assets/products/product8.png"/></swiper-slide>
                            <swiper-slide><img src="@/assets/products/product9.png"/></swiper-slide>
                             <swiper-slide><img src="@/assets/products/product10.png"/></swiper-slide>

                  
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import CardButton from "@/components/UI/CardButton.vue";
import products from "@/data/products.json";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export default {
  name: "HomeView",
  components: {
    CardButton, Swiper, SwiperSlide,
  },
  data() {
    return {
      tovar: products.products
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    };
  },
}
</script>

<style lang="scss" scoped>
.home {
  &__block1 {
     z-index: 1;
    img {
      width: 1500px;
    }
    .homeblock {
      position: absolute;
      left: 200px;
      top: 120px;
    }
    position: relative;
    width: 100%;
    &-p1 {
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 1px;
    }
    &-p2 {
      font-weight: 900;
      font-size: 72px;
      letter-spacing: 1px;
      margin-top: 12px;
      margin-bottom:45px;
    }
    &__p3 {
        display: flex;
        gap: 24px;
        align-items: center;
        &-left {
          border: 1px solid teal;
          border-radius: 2px;
          padding: 10px 22px;
          color: teal;
          
        }
        &-right {
          background: teal;
          border: 1px solid teal;
          border-radius: 2px;
          padding: 10px 22px;
          color: white;
          font-weight: 500;
           font-size: 16px;
           letter-spacing: 0.5px;
        }
    }
  }
   &__block2 {
      display: flex;
      gap: 30px;
      justify-content: center;
      margin-top: -52px;
      position: relative;
      z-index: 2;
      &__sort {
        display: flex;
        flex-direction: column;
        gap: 16px;
        &__desc {
          display: flex;
          justify-content: center;
          font-weight: 700;
          font-size: 20px;
          color: #424551;
        }
      }
  }
   &__block3 {
    display: flex;
    flex-direction: column;
    align-items: center;
      &-name {
        margin-top: 180px;
        font-weight: 900;
        font-size: 46px;
        color: #1E212C;
      }
      &-desc {
        margin-top: 24px;
        font-weight: 400;
        font-size: 18px;
        color: #787A80;
      }
      a {
        color: teal;
        margin-bottom: 60px;
      }
      &-card {
        display: flex;
        gap: 30px;

         .swiper-wrapper {
          display: flex;
          gap: 100px;
      }
      }
     
  }
}
</style>