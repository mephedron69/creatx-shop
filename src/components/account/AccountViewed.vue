<template>
    <div class="viewed">
         <div class="viewed__top">
            <p class="viewed__top-p1">Recently viewed</p>
            <div class="viewed__top-p2">
                <img src="@/assets/icons/deleteicon.png"/>
                <p>Delete all</p>
            </div>
        </div>
        <div class="viewed__content">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.viewed {
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
}
</style>