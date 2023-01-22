<template>
    <div class="track">
        <div class="account-back">
            <div class="track__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="track__nav-p1">Track order</p>  
            </div>
            <div class="track__top container">
                <div class="track__top__left">
                    <p>Track your order</p>
                    {{ page1 }}
                </div>
                <div class="track__top__right">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TrackView",
    data() {
        return {
            page1: "Dauren"
        }
    },
    methods: {
    }

}
</script>
<style lang="scss" scoped>
.account-back {
    background: #F4F5F7;
        padding: 16px 0;
}
.track {
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
</style>