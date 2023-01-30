<template>
    <div class="blogB">
        <div class="blogB__name container810">
            <p class="blogB__name-p1">{{ blogs.name }}</p>
            <div class="blogB__name__desc">
                <div class="blogB__name__desc__left">
                    <p style="color: #17696A; font-weight: 700;">{{ blogs.category }}</p> |
                    <p style="color: #787A80">{{ blogs.date }}</p> |
                    <div class="blogB__name__desc__left-p2">
                        <img src="@/assets/icons/chatblock9.png"/>
                        <p>4 comments</p>
                    </div>
                </div>
                <div class="blogB__name__desc__right">
                    <soc-icon icon="facebook2"/>
                    <soc-icon icon="inst2"/>
                    <soc-icon icon="twiticon2"/>
                    <soc-icon icon="inicon2"/>
                </div>
            </div>
        </div>
        <div class="blogB-line"></div>
        <div class="blogB__desc container810"> 
            <img  class="blogB__desc-image" :src="require('@/assets/images/' + blogs.image + '.png')"/>
            <div class="blogB__desc__content">
                <div v-for="(item,index) in blogs.texts" :key="index" class="intext">
                    {{ item }}
                </div>
            </div>
            <div class="blogB__desc__tags">
                <div class="blogB__desc__tags__left">
                    <p>Tags:</p>
                    <div v-for="(item,index) in blogs.tags" :key="index" class="blogB__desc__tags__left-tag">
                        {{ item }}
                    </div>
                </div>
                <div class="blogB__desc__tags__right">
                    <p>Share:</p>
                    <soc-icon icon="facebook2"/>
                    <soc-icon icon="inst2"/>
                    <soc-icon icon="twiticon2"/>
                    <soc-icon icon="inicon2"/>
                </div>
            </div>
        </div>
        <div class="blogB-line"></div>
        <div class="blogB__swiper container810">
            <div class="blogB__swiper__top">
                <div class="blogB__swiper__top-strok">
                    <img src="@/assets/icons/leftstrok.png"/>
                    <p>Prev Post</p>
                </div>
                <div class="blogB__swiper__top-strok">
                    <p>Next Post</p>
                    <img src="@/assets/icons/rightstrok.png"/>
                </div>
            </div>
            <div class="blogB__swiper__bot">
                <div class="blogB__swiper__bot__left">
                    <img :src="require('@/assets/images/' + blogs.image + '.png')" class="blogB__swiper__bot__left-image"/>
                    <div class="blogB__swiper__bot__left__name">
                        <p class="blogB__swiper__bot__left__name-p1"><img src="@/assets/icons/clockicon2.png"/>{{ blogs.date }}</p>
                        <p class="blogB__swiper__bot__left__name-p2">{{ blogs.name }}</p>
                    </div>
                </div>
                <div class="blogB__swiper__bot__right">
                    <div class="blogB__swiper__bot__right__name">
                        <p class="blogB__swiper__bot__right__name-p1"><img src="@/assets/icons/clockicon2.png"/>{{ blogs.date }}</p>
                        <p class="blogB__swiper__bot__right__name-p2">{{ blogs.name }}</p>
                    </div>
                    <img :src="require('@/assets/images/' + blogs.image + '.png')" class="blogB__swiper__bot__left-image"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocIcon from './SocIcon.vue';
export default {
    props: ["blogs"],
    components: {SocIcon}
}
</script>
<style lang="scss" scoped>
.container810 {
    width: 810px;
    margin: auto;
} 
.intext {
    &-text1 {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 24px;
    }
}

.blogB {
    &__name {
        &-p1 {
            font-weight: 900;
            font-size: 46px;
            letter-spacing: 0.2px;
            margin: 32px 0;
        }
        &__desc {
            margin-bottom: 32px;
            display: flex;
            justify-content: space-between;
            &__left {
                gap: 12px;
                display: flex;
                align-items: center;
                &-p2 {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                    color: #787A80;
                }
            }
             &__right {
                display: flex;
                gap: 12px;
                align-items: center;
            }
        }
    }
    &-line {
        border: 1px solid #E5E8ED;
    }
    &__desc {
        &__content {
            margin-top: 32px;
            margin-bottom: 65px;
        }
        &-image {
            margin-top: 32px;
        }
         &__tags {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            margin-bottom: 51px;
                &__left {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    &-tag {
                        font-weight: 400;
                        color: #787A80;
                        background: #FFFFFF;
                        border: 1px solid #D7DADD;
                        border-radius: 4px;
                        padding: 5px 16px;
                    }
                }
                &__right {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
            }
    }
    &__swiper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 120px;
        &__top {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 20px;
            &-strok {
                display: flex;
                gap: 11px;
                align-items: center;
            }
        }
        &__bot {
            width: 100%;
            display: flex;
            justify-content: space-between;
            &__left {
                width: 42%;
                display: flex;
                gap: 20px;
                &-image {
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 4px;
                }
                &__name {
                    &-p1 {
                        color: #787A80;
                        font-weight: 400;
                        font-size: 14px;
                        margin-bottom: 8px;
                        display: flex;
                        gap: 8px;
                        align-items: center;
                    }
                    &-p2 {
                        font-weight: 700;
                        font-size: 16px;
                    }
                }
            }
            &__right {
                width: 42%;
                display: flex;
                gap: 20px;
                &__name {
                    display: flex;
                    flex-direction: column;
                     &-p1 {
                        color: #787A80;
                        font-weight: 400;
                        font-size: 14px;
                        margin-bottom: 8px;
                        display: flex;
                        gap: 8px;
                        align-items: center;
                    }
                    &-p2 {
                        font-weight: 700;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>