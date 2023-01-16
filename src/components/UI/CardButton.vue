<template>
    <div class="card">
        <div class="card__photo">
            <img :src="require('@/assets/products/'+ product.image + '.png')" />
            <img class="card__photo__favour" src="@/assets/icons/favouricon.png"/>
            <div class="card__photo__back"></div>
        </div>
        <p class="card-name"> {{ product.name }}</p>
        <p class="card-price">${{ product.price }}</p>
    </div>
</template>
<script>
export default {
    name: "CardButton",
    props: ["product"]

}
</script>
<style lang="scss" scoped>

.card {
    margin-bottom: 260px;
    width: 285px;
    height: 413px;
    position: relative;
    &__photo {
        &__favour {
            position: absolute;
            right: 24px;
            bottom: 118px;
            z-index: 1;
        }
        &__back {
             position: absolute;
            right: 18px;
            bottom: 114px;
            width: 32px;
            height: 32px;
            background: white;
            border-radius: 50%;
            z-index: 0;
        }
    }
    &-name {
        font-weight: 400;
        font-size: 18px;
        color: #424551;
        margin-top: 16px;
        margin-bottom: 8px;
        margin-left: 16px;
        
    }
    &-price {
        font-weight: 700;
        font-size: 20px;
        margin-left: 16px;
    }
}
</style>