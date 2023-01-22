<template>
    <div class="blog">
        <div class="account-back">
            <div class="blog__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="blog__nav-p1">Fashion blog</p>  
            </div>
        </div>
        <div class="blog-top container">
            <div class="blog__left">
                <p class="blog__left-p1">Fashion blog</p>
                 <div class="blogs"><blog-card  class="blog__left__card" v-for="item in blog" :blogs="item"/></div>
            </div>
            <div class="blog__right">
                <div class="blog__right__block1">
                    <input class="blog__right__block1-input" type text placeholder="Search the blog..."/>
                    <img src="@/assets/icons/searchicon.png"/>
                </div>
                <div class="blog__right-line"></div>
                <p class="blog__right__name">Blog Categories</p>
                <div class="blog__right__block2">
                    <div class="blog__right__block2__elem">
                        <p>All</p>
                        <p class="number">23</p>
                    </div>
                    <div class="blog__right__block2__elem">
                        <p>Fashion</p>
                        <p class="number">3</p>
                    </div>
                    <div class="blog__right__block2__elem">
                        <p>Designers</p>
                        <p class="number">7</p>
                    </div>
                    <div class="blog__right__block2__elem">
                        <p>Lifestyle</p>
                        <p class="number">4</p>
                    </div>
                    <div class="blog__right__block2__elem">
                        <p>Celebrity style</p>
                        <p class="number">9</p>
                    </div>
                </div>
                <div class="blog__right-line"></div>
                <p class="blog__right__name">Featured Posts</p>
                <div class="blog__right__block3">
                    <div class="blog__right__block3__elem">
                        <img src="@/assets/images/featp1.jpg"/>
                        <div class="block3-gap">
                            <p class="blog__right__block3-p1">July 5, 2020</p>
                            <p class="blog__right__block3-p2">14 Items From End-of-Spring Sales Are Sure to Spark Joy</p>
                        </div>
                    </div>
                     <div class="blog__right__block3__elem">
                        <img src="@/assets/images/featp2.jpg"/>
                        <div class="block3-gap">
                            <p class="blog__right__block3-p1">April 9, 2020</p>
                            <p class="blog__right__block3-p2">Best Fashion Instagrams of the Week</p>
                        </div>
                    </div>
                     <div class="blog__right__block3__elem">
                        <img src="@/assets/images/featp3.jpg"/>
                        <div class="block3-gap">
                            <p class="blog__right__block3-p1">March 12, 2020</p>
                            <p class="blog__right__block3-p2">Top 10 Looks from the Venice Film Festival</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <notice-block class="notice"/>
    </div>
</template>
<script>
import BlogCard from '@/components/UI/BlogCard.vue'
import blog from "@/data/blog.json"
import NoticeBlock from '@/components/UI/NoticeBlock.vue'

export default {
    name: "BlogView",
    components: { BlogCard, NoticeBlock },
    data() {
        return {
            blog: blog.blog
        }
    }
}
</script>
<style lang="scss" scoped>
.account-back{
        background: #F4F5F7;
        padding: 16px 0;
    }
    
.blog {
    &__left {
        &-p1 {
            font-weight: 900;
            font-size: 46px;
            margin-bottom: 32px;
        }
        &__card {
            width: 810px;
        }
    }
    &__right {
        width: 342px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        &__block1{
            display: flex;
            align-items: center;
            border: 1px solid rgb(141, 141, 141);
            padding: 11px 16px;
            border-radius: 4px;
            &-input {
                border: none;
                outline: none;
                width: 288px;
            }
        }
        &-line {
            width: 342;
            border: 1px solid #E5E8ED;
        }
        &__name {
            font-weight: 700;
            font-size: 24px;
        }
        &__block2 {
            display: flex;
            flex-direction: column;
            gap: 12px;
            &__elem {
                display: flex;
                justify-content: space-between;
                font-weight: 700;
                font-size: 16px;
                .number {
                    font-weight: 400;
                    font-size: 16px;
                    color: #424551;
                }
            }
        }
        &__block3 {
            display: flex;
            flex-direction: column;
            gap: 24px;
            &__elem {
                display: flex;
                align-items: center;
                gap: 20px;
            }
            &-p1 {
                font-weight: 400;
                font-size: 14px;
                color: #787A80;
            }
            &-p2 {
                font-weight: 700;
                font-size: 16px;
            }
            .block3-gap {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        }
    }
    &__nav {
       display: flex; 
       gap: 13px;
       &-p1 {
        font-weight: 400;
        font-size: 14px;
        color: #9A9CA5;
       }
    }
}
.blogs {
    display: flex;
    flex-direction: column;
    gap: 55px;
}
.blog-top {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
}
.notice {
    margin-top: 180px;
}
</style>