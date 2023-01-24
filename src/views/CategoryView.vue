<template>
    <div class="category">
        <div class="account-back">
            <div class="category__nav container">
                <div class="category__nav-left">
                    <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                    <img src="@/assets/icons/linestok.svg"/>
                     <p>Men</p>  
                </div>
                <div class="category__nav-right">
                    <img src="@/assets/icons/crossicon.png"/>
                    <p>Dresses</p>
                </div>
            </div>
        </div> 
        <div class="category__content container">
            <div class="category__content__top">
                <div class="topleft">
                    <div class="category__content__top__filter" @click="openAllFilter = !openAllFilter">
                        <img src="@/assets/icons/filtericon.png" />
                        <p>Show filters</p>
                    </div>
                    <div class="category__content__top__sort">
                        <p>Sort by</p>
                        <select>
                            <option>popularity</option>
                            <option>new</option>
                        </select>
                    </div>
                    <div class="category__content__top__show">
                        <p class="category__content__top__show-p1">Show</p>
                        <input type="number" value="12"/>
                        <p class="category__content__top__show-p2">products per page</p>
                    </div>
                </div>
                <div class="category__content__top__slider">
                    <p>1 2 3 ... 10</p>
                    <img src="@/assets/icons/linestrokblack.png"/>
                </div>
            </div>

            <div class="category__content__mid">
                <div class="category__content__mid__filter" v-if="openAllFilter">
                    <div>
                        <div class="basic">
                            <p>Clothes</p>
                            <img @click="openFilter = !openFilter" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="category__content__mid__filter__block" v-if="openFilter">
                             <div class="category__content__mid__filter__block-input">
                                <input type="text" placeholder="Search the clothes type"/>
                                <img src="@/assets/icons/searchicon.png"/>
                            </div>
                            <div class="category__content__mid__filter__block__content">
                                    <div class="category__content__mid__filter__block__content-box" v-for="(item) in category[0].clothes" :key="item">
                                        <input type="checkbox" />
                                        <div>{{ item }}</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="category__content__mid__filter-line"></div>
                    <div>
                         <div class="basic">
                            <p>Size</p>
                            <img @click="openFilter1 =!openFilter1" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="category__content__mid__filter__block__content" v-if="openFilter1">
                            <div class="category__content__mid__filter__block__content-box" v-for="(item) in category[0].sizes" :key="item">
                                <input type="checkbox" />
                                <div>{{ item }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="category__content__mid__filter-line"></div>
                    <div>
                         <div class="basic">
                            <p>Color</p>
                            <img @click="openFilter3 =!openFilter3" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="color" v-if="openFilter3">
                             <div class="color__box" v-for="(item, index) in colors" :key="index">
                                <div class="color__box__input">
                                    <div class="color__box__input__out"></div>
                                    <div class="color__box__input__in" :style="'background:' + item.color"></div>
                                </div>
                                <p>{{item.color}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="category__content__mid__filter-line"></div>
                    <div>
                        <div class="basic">
                            <p>Material</p>
                            <img @click="openFilter4 = !openFilter4" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="category__content__mid__filter__block" v-if="openFilter4">
                             <div class="category__content__mid__filter__block-input">
                                <input type="text" placeholder="Search the clothes type"/>
                                <img src="@/assets/icons/searchicon.png"/>
                            </div>
                            <div class="category__content__mid__filter__block__content">
                                    <div class="category__content__mid__filter__block__content-box" v-for="(item) in category[0].clothes" :key="item">
                                        <input type="checkbox" />
                                        <div>{{ item }}</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="category__content__mid__filter-line"></div>
                     <div>
                        <div class="basic">
                            <p>Brand</p>
                            <img @click="openFilter5 = !openFilter5" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="category__content__mid__filter__block" v-if="openFilter5">
                             <div class="category__content__mid__filter__block-input">
                                <input type="text" placeholder="Search the clothes type"/>
                                <img src="@/assets/icons/searchicon.png"/>
                            </div>
                            <div class="category__content__mid__filter__block__content">
                                    <div class="category__content__mid__filter__block__content-box" v-for="(item) in category[0].clothes" :key="item">
                                        <input type="checkbox" />
                                        <div>{{ item }}</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="category__content__mid__filter-line"></div>
                    <div>
                        <div class="basic">
                            <p>Price</p>
                            <img @click="openFilter6 = !openFilter6" src="@/assets/icons/plusicon.png"/>
                        </div>
                        <div class="category__content__mid__filter__price" v-if="openFilter6">
                            <div>
                                <VueSimpleRangeSlider
                                style="width: 300px"
                                :min="0"
                                :max="400"
                                exponential
                                v-model="state.range"
                                >
                                <template #prefix="{ value }">$</template>
                                </VueSimpleRangeSlider>
                                
                            </div>
                            <div class="category__content__mid__filter__price__maxmin">
                                <input type="number" v-model="state.range[0]"/>
                                <div class="category__content__mid__filter__price__maxmin-line"></div>
                                <input type="number" v-model="state.range[1]"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="category__content__mid-cards">
                    <div class="category__content__mid-cards"><card-button v-for="(item, index) in products" :product="item" :key="index"/></div>
                    <div class="category__content__bot">
                 <div class="topleft">
                    <div class="category__content__top__sort">
                        <p>Sort by</p>
                        <select>
                            <option>popularity</option>
                            <option>new</option>
                        </select>
                    </div>
                    <div class="category__content__top__show">
                        <p class="category__content__top__show-p1">Show</p>
                        <input type="number" value="12"/>
                        <p class="category__content__top__show-p2">products per page</p>
                    </div>
                </div>
                <div class="category__content__top__slider">
                    <p>1 2 3 ... 10</p>
                    <img src="@/assets/icons/linestrokblack.png"/>
                </div>
            </div>
                </div>
            </div>
        </div>
        <notice-block />
    </div>
</template>
<script>
import NoticeBlock from '@/components/UI/NoticeBlock.vue';
import CardButton from '@/components/UI/CardButton.vue';
import products from "@/data/products.json"
import category from "@/data/category.json"
import colors from "@/data/colors.json"
import Slider from '@vueform/slider'

import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
import { reactive, defineComponent } from "vue";


export default {
    data() {
        return {
            products: products.products,
            category: category.category,
            colors: colors.colors,
            openAllFilter: false,
            openFilter: true,
            openFilter1: false,
            openFilter2: false,
            openFilter3: false,
            openFilter4: false,
            openFilter5: false,
            openFilter6: true,
            value: [20, 40]
        }
    },
    components: { NoticeBlock, CardButton, Slider, VueSimpleRangeSlider },
    methods: {
    },
     setup() {
    const state = reactive({ range: [45, 150], number: 10 });
    return { state };
    },
}
</script>
<style lang="scss" scoped>
.color {
    margin-top: 16px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    &__box {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-weight: 400;
        font-size: 12px;
        color: #787A80;
        width: fit-content;
        align-items: center;
        &__input {
            position: relative;
            &__out {
            width: 30.45px;
            height: 30.45px;
            border-radius: 50%;
            border: 1px solid #D7DADD;
        }
        &__in {
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 50%;
                    bottom: 12%;
                    left: 13%;
        }
        }
    }
}
.account-back {
        background: #F4F5F7;
        padding: 16px 0;
}
.category {
     &__nav {
        display: flex;
        justify-content: space-between;
        color: #9A9CA5;
        font-weight: 400;
        font-size: 14px;
       &-left {
        display: flex;
        align-items: center;
        gap: 13px;
       }
       &-right {
        display: flex;
        align-items: center;
        gap: 13px;
        color: #9A9CA5;
       }
    }
    .topleft {
        display: flex;
        gap: 60px;
    }
    &__content {
        &__top {
            display: flex;
            justify-content: space-between;
            margin: 32px 0;
            &__filter {
                display: flex;
                gap: 8px;
                background: teal;
                border-radius: 4px;
                align-items: center;
                height: fit-content;
                font-weight: 700;
                font-size: 14px;
                color: white;
                padding: 13.6px 79.5px;
            }
            &__sort {
                display: flex;
                gap: 12px;
                height: fit-content;
                align-items: center;
                select {
                    width: 170px;
                    padding: 12.7px 16px;
                     background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    outline: none;
                }
            }
            &__show {
                display: flex;
                align-items: center;
                gap: 12px;
                &-p1 {
                    font-weight: 700;
                    font-size: 16px;
                }
                &-p2 {
                    font-weight: 400;
                    font-size: 14px;
                    color: #787A80;
                }
                input {
                    width: 46.5px;
                    padding: 13.2px 16px;
                     background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    outline: none;
                }
            }
            &__slider {
                display: flex;
                gap: 23px;
                align-items: center;
            }
        }
        &__mid {
            display: flex;
            gap: 60px;
            &__filter {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 339.47px;

            &__price {
                &__maxmin {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    input {
                        width: 50%;
                        padding: 9px 12px;background: #FFFFFF;
                        border: 1px solid #D7DADD;
                        border-radius: 4px;
                    }
                    &-line {
                        width: 9px;
                        border: 1px solid black;
                    }
                }
            }

            &-line {
                border: 1px solid #E5E8ED;
                width: 100%;
            }
            .basic {
                display: flex;
                justify-content: space-between;
                font-weight: 700;
                font-size: 16px;
                align-items: center;
                img {
                    width: 15px;
                    cursor: pointer;
                }
            }
            &__block {
                &-input {
                    margin: 16px 0 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    padding: 9px 12px;
                    input {
                        border: none;
                        outline: none;
                    }
                }
                &__content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    height: 163px;
                    overflow: auto;
                    margin-top: 16px;
                    &-box {
                        display: flex;
                        gap: 12px;
                        input {
                            accent-color: teal;
                            transform:scale(1.3);
                        }
                    }
                }
            }
            }  


            &-cards {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
        &__bot {
            display: flex;
            justify-content: space-between;
            margin: 90px 0 180px 0;
            width: 100%;
        }
    }
}
</style>