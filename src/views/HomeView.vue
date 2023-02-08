<template>
    <div class="home">
        <div class="home__block1">
            <swiper 
            :pagination="pagination" 
            :navigation="{
                nextEl: nextHome,
                prevEl: prevHome
            }" 
            :modules="modules"
             class="mySwiper1">
            <swiper-slide class="homeimage">
              <div class="homeblock">
                  <p class="home__block1-p1">NEW COLLECTION</p>
                  <p class="home__block1-p2">Menswear 2023</p>
                  <div class="home__block1__p3">
                      <div class="home__block1__p3-left">Shop sale</div>
                      <div class="home__block1__p3-right">Shop the menswear</div>
                  </div>
              </div>
            <img  class="chapka-img" src="@/assets/icons/chapka.png"/>
            </swiper-slide>
            <swiper-slide class="homeimage"><img class="chapka-img" src="@/assets/images/chapka.png"/></swiper-slide>
            <swiper-slide class="homeimage"><img class="chapka-img" src="@/assets/images/chapka3.png"/></swiper-slide>
            <swiper-slide class="homeimage"><img  class="chapka-img" src="@/assets/images/chapka3.jpg"/></swiper-slide>
              <div ref="prevHome" class="next-arrow111"><img src="@/assets/icons/leftstrok.png"/></div>
              <div ref="nextHome" class="prev-arrow111"><img src="@/assets/icons/rightstrok.png"/></div>
          </swiper>
        </div>
        <div class="home__block2 container">
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
                 :breakpoints="breakpoints"
                   :slidesPerView="5"
                :spaceBetween="30"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper2"
                >
                    <swiper-slide  v-for="(item) in tovar">
                      <CardButton :product="item"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="home__block4">
            <div class="home__block4__top">
                <div class="home__block4__top-left">
                    <img src="@/assets/images/block4p1.png"/>
                      <div class="inblock">
                          <p class="inblock__name">Summer Collections</p>
                          <p class="inblock__desc">Sale Up to 70%</p>
                          <div class="inblock__click">Explore new prices</div>
                      </div>
                </div>
                <div class="home__block4__top-right">
                    <img src="@/assets/images/block4p2.png"/>
                      <div class="inblock">
                          <p class="inblock__name">Deal of the week</p>
                          <p class="inblock__desc">Stay Warm With Our New Sweaters</p>
                          <div class="inblock__click">Shop now</div>
                          <p class="inblock__limit">Limited time offer</p>
                          <div class="inblock__time">
                              <div class="inblock__time-offer">
                                <p class="inblock__limit1">X</p>
                                <p class="inblock__limit1">Days</p>
                              </div>
                               <div class="inblock__time-offer">
                                <p class="inblock__limit1">Y</p>
                                <p class="inblock__limit1">HOURS</p>
                              </div>
                               <div class="inblock__time-offer">
                                <p class="inblock__limit1">Z</p>
                                <p class="inblock__limit1">MINS</p>
                              </div>
                               <div class="inblock__time-offer">
                                <p class="inblock__limit1">S</p>
                                <p class="inblock__limit1">SECS</p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
            <div class="home__block4__bot">
                <div class="home__block4__bot-left">
                    <img src="@/assets/images/block4p3.png"/>
                      <div class="inblock">
                          <p class="inblock__name">New collection</p>
                          <p class="inblock__desc">Shoes & Bags autumn / winter 2020 </p>
                          <div class="inblock__click">See offers ></div>
                          
                      </div>
                </div>
                <div class="home__block4__bot-right">
                    <img src="@/assets/images/block4p4.png"/>
                      <div class="inblock">
                          <p class="inblock__name">For All new Email Subscribers</p>
                          <p class="inblock__desc">Get 5% Off & Free Delivery</p>
                          <p class="inblock-email">Email</p>
                          <div class="block4in">
                            <input class=inblock__input type="text" placeholder="Your working email"/>
                            <button class=inblock__button>Subscribe</button>
                          </div>
                          <p class="inblock-email">*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</p>
                      </div>
                      <img class="block4p4" src="@/assets/images/block4p44.png"/>
                </div>
            </div>
        </div>
        <div class="home__block5">
            <p class="home__block5-desc">Popular categories</p>
            <div class="home__block5__category">
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p1.png"/>
                    <p class="logoname">Tops</p>
                </div>
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p2.png"/>
                    <p class="logoname">T-shirts</p>
                </div>
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p3.png"/>
                    <p class="logoname">Caps</p>
                </div>
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p4.png"/>
                    <p class="logoname">Sandals</p>
                </div>
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p5.png"/>
                    <p class="logoname">Jackets</p>
                </div>
                <div class="home__block5__category-logo">
                    <img src="@/assets/images/block5p6.png"/>
                    <p class="logoname">Coats</p>
                </div>
            </div>
        </div>
        <div class="home__block6">
            <div class="block6"><advert-card text="Trending now" button="Explore top sales" numbers="block" width="100%" slidesPerView="3"/></div>
        </div>
        <div class="home__block7">
            <div class="block7"><advert-card text="Sale up to 70%" button="See all sale products" numbers="block" width="100%" slidesPerView="3"/></div>
        </div>
       <div class="backblock8">
         <div class="home__block8 container">
             <div class="home__block8__right">
                <p class="desc-name">Enjoy mobile shopping with our Createx Store App!</p>
                <div class="home__block8__right__aplic">
                    <div class="aplication">
                        <img src="@/assets/icons/Appleicon.png"/>
                        <div>
                            <p class="aplication-text1">Download on the</p>
                            <p class="aplication-text2">App Store</p>
                        </div>
                    </div>
                     <div class="aplication">
                        <img src="@/assets/icons/Googleicon.png"/>
                        <div>
                            <p class="aplication-text1">GET IT ON</p>
                            <p class="aplication-text2">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <img class="img8" src="@/assets/images/block8p1.png"/>
        </div>
       </div>
       <div class="home__block9 container">
          <div class="home__block9__part1">
              <div class="home__block9__part1__about">
                  <img src="@/assets/icons/block9p1.png"/>
                  <p class="block9name">Fast Worldwide Shipping</p>
                  <p class="block9desc">Get free shipping over $250</p>
              </div>
              <div class="home__block9__part1__line"></div>
               <div class="home__block9__part1__about">
                  <img src="@/assets/icons/block9p2.png"/>
                  <p class="block9name">24/7 Customer Support</p>
                  <p class="block9desc">Friendly 24/7 customer support</p>
              </div>
              <div class="home__block9__part1__line"></div>
               <div class="home__block9__part1__about">
                  <img src="@/assets/icons/block9p3.png"/>
                  <p class="block9name">Money Back Guarantee</p>
                  <p class="block9desc">We return money within 30 days</p>
              </div>
              <div class="home__block9__part1__line"></div>
               <div class="home__block9__part1__about">
                  <img src="@/assets/icons/block9p4.png"/>
                  <p class="block9name">Secure Online Payment</p>
                  <p class="block9desc">Accept all major credit cards</p>
              </div>
          </div>
          <div class="home__block9__part2">
              <div class="home__block9__part2__left">
                  <p class="home__block9__part2__left-p1">Follow us on Instagram</p>
                  <p class="home__block9__part2__left-p2">@createx_store</p>
                  <a href="http://instagram.com">
                    <div class="home__block9__part2__left-p3">
                      <img src="@/assets/images/block9inst.png"/>
                      <p>Follow instagram</p>
                  </div>
                  </a>
              </div>
              <div class="home__block9__part2__right">
                  <img src="@/assets/images/block9p2i1.png"/>
                   <img class="home__block9__part2__right-p1" src="@/assets/images/block9p2i2.png"/>
                    <img class="home__block9__part2__right-p2" src="@/assets/images/block9p2i3.png"/>
              </div>
          </div>
          <div class="home__block9__part3">
              <div class="home__block9__part3__top">
                <p class="home__block9__part3__top__left">Fashion blog</p>
                <router-link to="/blog"><div class="home__block9__part3__top__right">View blog</div></router-link>
              </div>
              <div class="home__block9__part3__bot">
                  <BlogCard  class="home__block9__part3__bot__blog" :blogs="blog[0]"></BlogCard>
                  <BlogCard class="home__block9__part3__bot__blog" :blogs="blog[1]"></BlogCard>
              </div>
          </div>
           <div class="home__block9__part4">
              <img src="@/assets/icons/block9p4i1.png"/>
              <img src="@/assets/icons/block9p4i2.png"/>
              <img src="@/assets/icons/block9p4i3.png"/>
              <img src="@/assets/icons/block9p4i4.png"/>
              <img src="@/assets/icons/block9p4i5.png"/>
              <img src="@/assets/icons/block9p4i6.png"/>
          </div>
       </div>
        <notice-block />
    </div>
</template>
<script>
import CardButton from "@/components/UI/CardButton.vue";
import products from "@/data/products.json";
import NoticeBlock from "@/components/UI/NoticeBlock.vue"
import BlogCard from "@/components/UI/BlogCard.vue";
import blog from "@/data/blog.json";
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
  name: "HomeView",
  components: {
    CardButton, Swiper, SwiperSlide,NoticeBlock, BlogCard, AdvertCard
  },
  data() {
    return {
      tovar: products.products,
      blog: blog.blog,
      breakpoints: {
        991.98: {
          slidesPerView: 6,
        },
        767.98: {
          slidesPerView: 3,
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
    const prevHome = ref(null);
    const nextHome = ref(null);
    return {
      pagination: {
        clickable: true,
        type: 'bullets',
        horizontalClass: 'bullets-content',
        bulletClass: 'bulletsA',
        bulletActiveClass: 'bulletsA-active',
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return '<span class="' + "bulletsA" + '">' + ('0' + (1 + index)) + "</span>";
        },
      },
      prevHome,
      nextHome,
      modules: [Pagination, Navigation,],
    };
  },
}
</script>

<style lang="scss" scoped>

.homeimage {
  position: relative;
}
.next-arrow111{
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 2;
  background: white;
  border-radius:50%;
  border: 7px solid white;
  @media (max-width: $mobile + px) {
        display: none;
    }
}
.prev-arrow111{
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 2;
   background: white;
  border-radius:50%;
  border: 7px solid white;
  @media (max-width: $mobile + px) {
        display: none;
    }
}

.block6 {
  background:#E5E8ED;
  padding: 80px 0;
  @media (max-width: $mobile + px) {
    padding: 20px 0;
  }
}
.block7 {
  padding: 80px 0;
  @media (max-width: $mobile + px) {
    padding: 20px 0;
  }
}
.home {
  &__block1 {
     z-index: 1;
    img {
      width: 100%;
    }
    .homeblock {
      position: absolute;
      left: 10%;
      top: 15%;
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
     @media (max-width: $mobile + px) {
      &-p1 {
        font-size: 15px;
      }
      &-p2 {
        font-size: 15px;
      }
      &__p3 {
        &-left {
          font-size: 8px;
        }
        &-right {
          font-size: 8px;
        }
      }
     }
  }
   &__block2 {
      display: flex;
      justify-content: space-between;
      margin-top: -52px;
      position: relative;
      z-index: 2;
      &__sort {  
        width: 30.81%;
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
      @media (max-width: $mobile + px) {

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
        @media (max-width: $mobile + px) {
          text-align: center;
        }
      }
      a {
        color: teal;
        margin-bottom: 60px;
      }
      &-card {
        width: 100%;
        margin: 0 30px 180px;
        @media (max-width: $mobile + px) {
          margin: 0 0 50px;
        }
      }
       @media (max-width: $mobile + px) {
          &-name {
            margin-top: 50px;
          }
       }
  }

  &__block4 {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 16px;
    &__top {
      display: flex;
      gap: 2%;
        &-left {
          width: 34%;
          position: relative;
        }
        &-right {
          width: 63%;
          position: relative;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 500px;
        }
        @media (max-width: $mobile + px) {
          display: flex;
          flex-direction: column;
          &-left {
            width: 100%;
            img {
              height: 200px;
            }
          }
          &-right {
            width: 100%;
            img {
              height: 200px;
            }
          }
        }
         
    }

    &__bot {
      display: flex;
      gap: 2%;  
        &-left {
          position: relative;
          width: 63%;
        }
        &-right {
          position: relative;
          width: 34%;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 500px;
        }
        @media (max-width: $mobile + px) {
          display: flex;
          flex-direction: column;
          &-left {
            width: 100%;
            img {
              height: 200px;
            }
          }
          &-right {
            width: 100%;
            img {
              height: 200px;
            }
          }
        }
    }
    .inblock {
      z-index: 2;
      width: 72%;
        height: 100%;
      position: absolute;
      left: 5%;
      top: 15%;
      &__name {
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
      }
      &__desc {
        font-weight: 900;
        font-size: 32px;
        margin-top: 12px;
        margin-bottom: 40px;
        @media (max-width: $mobile + px) {
          font-size: 20px;
        }
      }
      &__click {
        width: fit-content;
        text-align: center;
        border: 2px solid teal;
        border-radius: 2px;
        color: teal;
        font-weight: 700;
        font-size: 14px;
        padding: 10px 22px;
        @media (max-width: $mobile + px) {
          font-size: 10px;
        }
      }
      &-email {
        font-weight: 400;
        font-size: 14px;
         @media (max-width: $mobile + px) {
          display: none;
         }
      }
      &__input {
        border: none;
        padding: 11px 16px;
        margin-top: 8px;
        margin-bottom: 20px;
        outline: none;
         @media (max-width: $mobile + px) {
          margin-top: 0;
          margin-bottom: 5px;
          padding: 6px 16px;
         }
      }
      

      &__button {
        border: none;
        background: teal;
        padding: 11px 16px;
        color: white;
        cursor: pointer;
         @media (max-width: $mobile + px) {
          display: flex;
          margin: auto;
          padding: 6px 16px;
         }
      }
      &__limit {
        margin-top: 79px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        @media (max-width: $mobile + px) {
          display: none;
        }
      }
      &__time {
        margin-top: 15px;
        display: flex;
        gap: 20px;
        &-offer {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
         @media (max-width: $mobile + px) {
          display: none;
        }
      }
      &__limit1{
        
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
    .block4in {
       @media (max-width: $mobile + px) {
          margin-top: -25px
         }
    }
  }
  &__block5 {
    margin: 180px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
      &-desc {
        display: flex;
          font-weight: 900;
          font-size: 46px;
          justify-content: center;
          @media (max-width: $mobile + px) {
            text-align: center;
            font-size: 24px;
          }
      }
      &__category {
        justify-content: center;
        gap: 30px;
        display: flex;
        &-logo {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .logoname {
          display: flex;
          justify-content: center;
          font-weight: 700;
          font-size: 20px;
        }
        @media (max-width: $mobile + px) {
          flex-wrap: wrap;
          img {
            width: 100px;
          }
        }
      }
      @media (max-width: $mobile + px) {
        margin: 50px 0 ;
      }
  }

  .backblock8 {
    background: #1E212C;
    padding: 60px 0;
  }
  &__block8 {
    position: relative;
    .img8 {
      position: absolute;
        bottom: -55px;
        left: 0px;
        @media (max-width: $mobile + px) {
          width: 250px;
          bottom: -55px;
          opacity: 0.4;
        left: 0px;
        z-index: 1;
        }
    }
     &__right {
         margin-left: 50%;
        display: flex;
        flex-direction: column;
        gap: 55px;
        &__aplic {
            display: flex;
            gap: 20px;
            .aplication {
                background: #424551;
                border-radius: 7px;
                display: flex;
                align-items: center;
                padding: 8px 12px;
                gap: 10px;
                &-text1 {
                    font-weight: 400;
                    font-size: 12px;
                    color: white;
                    
                }
                &-text2 {
                    font-weight: 400;
                    font-size: 16px;
                    color: white;
                }
                
            }
            
        }
        .desc-name {
          width: 600px;
           font-weight: 900;
          font-size: 32px;
                color: #FFFFFF;
          @media (max-width: $mobile + px) {
          font-size: 22px;
          width: 100%;
        }
        }
        @media (max-width: $mobile + px) {
          margin-left: 0;
          position: relative;
          z-index: 2;
        }
    }
  }
  &__block9 {
    &__part1 {
          margin-top: 120px;
          justify-content: space-between;
          display: flex;
         gap: 50px;
        &__about {
          text-align: center;
          .block9name {
            font-weight: 700;
            font-size: 20px;
            margin: 24px 0 8px ;
          }
          .block9desc {
            font-weight: 400;
            font-size: 16px;
          color: #787A80;
          }
        }
        &__line {
            height: 136px;
            width: 1px;
            background: black;
            background: linear-gradient(270.01deg, rgba(218, 219, 221, 0) 0%, rgba(218, 219, 221, 0.5) 12.33%, #DADBDD 51.91%, rgba(218, 219, 221, 0.5) 87.85%, rgba(218, 219, 221, 0) 100%);
             @media (max-width: $mobile + px) {
              display: none;
             }
        }
         @media (max-width: $mobile + px) {
          gap: 20px;
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          margin-top: 20px;
         }
    }
    &__part2 {
      margin: 180px 0;
      display: flex;
      justify-content: space-between;
      &__left {
          &-p1 {
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 1px;
          }
           &-p2 {
              font-weight: 900;
              font-size: 46px;
              margin: 8px 0 60px;
          }
           &-p3 {
              display: flex;
              gap: 5px;
              color: teal;
              font-weight: 700;
              font-size: 16px;
              border: 2px solid teal;
              width: fit-content;
              padding: 10px 25px;
              cursor: pointer;
              @media (max-width: $mobile + px) {
                background: white;
                align-items: center;
                margin: auto;
              }
          }
          a {
            text-decoration: none;
            @media (max-width: $mobile + px) {
            }
          }
          @media (max-width: $mobile + px) {
            position: relative;
            z-index: 2;
          }
      }
      &__right {
          display: flex;
          gap: 15px;
          z-index: 1;
          @media (max-width: $mobile + px) {
            flex-direction: column;
            &-p1 {
              display: none;
            }
            &-p2 {
                display: none;
            }
          }
           @media (max-width: $mobile + px) {
            margin-top: -250px;
           }
      }
      @media (max-width: $mobile + px) {
        flex-direction: column;
        margin: 70px 0;
        gap: 20px;
      }
    }
    &__part3 {
      &__top {
        margin-bottom: 60px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        &__left {
          font-weight: 900;
          font-size: 46px;
          @media (max-width: $mobile + px) {
            font-size: 35px;
          }
        }
        a {
          text-decoration: none;
        }
        &__right {
          font-weight: 700;
          font-size: 14px;
          color: teal;
          border: 2px solid teal;
          width: fit-content;
          padding: 10px 22px;
          cursor: pointer;
        }
        @media (max-width: $mobile + px) {
          flex-direction: column;
          align-items: center;
        }
      }
      &__bot {
        display: flex;
        justify-content: space-between;
          &__blog {
            box-shadow: 8px 7px 24px 0px rgba(34, 60, 80, 0.2);
            max-width: 600px;
          }
          @media (max-width: $mobile + px) {
            flex-direction: column;
            gap: 20px;
          }
      }
    }
    &__part4 {
      display: flex;
      justify-content: space-between;
      margin: 120px 0;
      @media (max-width: $mobile + px) {
        flex-wrap: wrap;
        margin: 60px 0;
      }
    }
  }
}
.chapka-img {
  height: 800px;
  object-fit: cover;
  @media (max-width: $mobile + px) {
        height: 250px;
     }
}
.block4p4 {
  width: auto !important;
  height: 65% !important;
  position: absolute;
  right: 1px;
  bottom: 5px;
}

</style>