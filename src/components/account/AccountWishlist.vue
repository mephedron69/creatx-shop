<template>
    <div class="wishlist">
         <div class="wishlist__top">
            <p class="wishlist__top-p1">Wishlist</p>
            <div class="wishlist__top-p2">
                <img src="@/assets/icons/deleteicon.png"/>
                <p>Delete all</p>
            </div>
        </div>
        <div class="wishlist__content">
            <CardButton v-for="(item,i) in wishlist" :key="i" :product="item" class="wishlist__content__card"/>
        </div>
    </div>
</template>
<script>
import CardButton from "@/components/UI/CardButton.vue";
import products from "@/data/products.json";

export default {
    components: { CardButton },
    data() {
        return {
            products: products.products,
            wishlist: []
        }
    },
    mounted() {
        this.wishlist = JSON.parse(localStorage.getItem('wishlist'))
    }
    
}
</script>

<style lang="scss" scoped>
.wishlist {
    width: 810px;
    &__top {
        display: flex;
        justify-content: space-between;
        &-p1 {
            font-weight: 900;
            font-size: 32px;
        }
        &-p2 {
            display: flex;
            color: red;
            align-items: center;
            gap: 9px;
        }
    }
    &__content {
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 3.6%;
        &__card {
            width: 48.2%;
        }
    }
}
</style>