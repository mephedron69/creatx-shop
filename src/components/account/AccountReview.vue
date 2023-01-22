<template>
    <div class="review">
         <div class="review__top">
            <p class="review__top-p1">My reviews</p>
            <div class="review__top__p2">
                <p>Sort by</p>
                <select>
                    <option>newest</option>
                    <option>fewest</option>
                    <option>popular</option>
                </select>
            </div>
        </div>
        <div class="review__content">

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.review {
    width: 810px;
    &__top {
        display: flex;
        justify-content: space-between;
        &-p1 {
            font-weight: 900;
            font-size: 32px;
        }
        &__p2 {
            font-weight: 700;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 9px;
            
            select {
                background: #FFFFFF;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                outline: none;
                padding: 13px 25px;
            }
        }
    }
}
</style>