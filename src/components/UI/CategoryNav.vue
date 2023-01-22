<template>
    <div>
        <div class="catergory-background">
            <div class="category container">
                <div class="category__left">
                     <div class="category__text">
                    <p>New collection</p>
                    <p>Best Sellers</p>
                    <p>Plus Size</p>
                    <p style="color: red">Sale up to 70%</p>
                    </div>
                <div class="category__left-items">
                    <p style="font-weight: 700;">CLOTHES</p> 
                    <div v-for="(item) in category[0].clothes" :key="item">{{ item }}</div>
                </div>
                <div class="category__left-items">
                    <p style="font-weight: 700;">SHOES</p> 
                    <div v-for="(item) in category[0].shoes" :key="item">{{ item }}</div>
                </div>
                <div class="category__left-items">
                    <p style="font-weight: 700;">ACCESSORIES</p> 
                    <div v-for="(item) in category[0].accessories" :key="item">{{ item }}</div>
                </div>
                </div>
                <div class="category-line">     </div>  
                <div class="category__right">
                    <img class="proimage" :src="require('@/assets/products/'+ products[1].image + '.png')" />
                    <p class="category__right-p1">Products with 50% discount</p>
                    <div class="category__right__button">
                        <p>See offers</p>
                        <img src="@/assets/icons/linestrok.png"/>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
import CardButton from '@/components/UI/CardButton.vue';
import products from "@/data/products.json"
import category from "@/data/category.json"

export default {
    components: { CardButton },
    data() {
        return {
            products: products.products,
            category: category.category
        }
    }
}
</script>
<style lang="scss" scoped>
.proimage {
    width: 285px;
    height: 285px;
}
.catergory-background {
    border: 1px solid #E5E8ED;
    background: white;
}
.category {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;        
    margin-top: 22px;
    margin-bottom: 40px;
    &__text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 400;
        font-size: 14px;
    }
    &__left {
        width: 61%;
        display: flex;
        justify-content: space-between;
        &-items {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }
    &-line {
        width: 0;
        border: 1px solid #E5E8ED;
    }
    &__right {
        &-p1 {
            font-weight: 700;
            font-size: 14px;
            margin: 16px 0;
        }
        &__button {
            display: flex;
            align-items: center;
            gap: 7px;
            color: teal;
            border: 1px solid teal;
            border-radius: 4px;
            padding: 9px 27px;
            width: fit-content;
        }
    }
}
</style>