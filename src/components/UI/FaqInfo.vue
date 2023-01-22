<template>
    <div class="faq">
        <div class="faq__top">
            <p @click="openFaq = !openFaq" class="faq__top-p1">{{ text }}</p>
            <img @click="openFaq = !openFaq" src="@/assets/icons/plusicon.png"/>
        </div>
        <div class="faq__bot" v-if="openFaq">
            {{ desc }}
        </div>
    </div>
</template>
<script>
export default {
    props: ["text", "desc"],
    data() {
        return {
            openFaq: false
        }
    }
}
</script>
<style lang="scss" scoped>
.faq {
        &__top {
            display: flex;
            justify-content: space-between;
            &-p1 {
                font-weight: 700;
                font-size: 20px;
            }
        }
        &__bot {
            margin-top: 16px;
            font-weight: 400;
            font-size: 16px;
            color: #787A80;
        }
        &-line {
            width: 810px;
            border: 1px solid #E5E8ED;
            margin-top: 20px;
            margin-bottom: 20px;
        }
}    
</style>