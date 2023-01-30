<template>
    <div class="track">
        <div class="account-back">
            <div class="track__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="track__nav-p1">Track order</p>  
            </div>
        </div>
         <div class="track__top container">
                <div class="track__top__left">
                    <p class="track__top__left-p1">Track your order</p>
                    <p class="track__top__left-p2">This form allows you to search for tracking details from anywhere within Createx Tracking Service.</p>
                    <p class="track__top__left-p3">Order No</p>
                    <div class="track__top__left__order">
                        <input type="text" value="# 34BV66580K92"/>
                        <button>Search</button>
                    </div>
                    <div class="track__top__left__info">
                        <div  class="track__top__left__info-name">
                            <p>Order No:</p>
                            <p>Shiped via:</p>
                            <p>Shipped on:</p>
                            <p>Destination:</p>
                            <p>Expected date:</p>
                            <p>Status:</p>
                        </div>
                        <div  class="track__top__left__info-desc">
                            <p>34BV66580K92</p>
                            <p>UPS Ground </p>
                            <p>August 29, 2020, 6:00 pm</p>
                            <p>London, United Kingdom</p>
                            <p>September 4, 2020</p>
                            <p>In Transit</p>
                        </div>
                    </div>
                    <div class="track__top__left__checkbox">
                        <input for="checkobx" type="checkbox" />
                        <label id="checkobx">Notify me when order is delivered</label>
                    </div>
                </div>
                <div class="track__top__right">

                </div>
            </div>
    </div>
</template>
<script>
export default {
    name: "TrackView",
    data() {
        return {
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
    &__top {
        display: flex;
        gap: 10.66%;
        margin-top: 32px;
        margin-bottom: 180px;
        &__left {
            width: 30.81%;
            &-p1 {
                font-weight: 900;
                font-size: 46px;
            }
            &-p2 {
                color: #787A80;
                font-weight: 400;
                font-size: 18px;
                margin: 24px 0 32px;
            }
            &-p3 {
                font-weight: 400;
                font-size: 16px;
                color: #424551;
                margin-bottom: 8px;
            }
            &__order {
                display: flex;
                input {
                    box-sizing: border-box;
                    width: 66.15%;
                    padding: 18px 16px;
                    outline: none;
                    border: 1px solid #D7DADD;
                }
                button {
                    width: 33.85%;
                    border: none;
                    background: teal;
                    color: white;
                }
            }
            &__checkbox {
                accent-color: teal;
                display: flex;
                align-items: center;
                gap: 12px;
                color: #424551;
            }
            &__info {
                box-shadow: 1px 2px 8px 0px rgba(34, 60, 80, 0.2);
                margin: 48px 0 40px;
                display: flex;
                gap: 24px;
                font-size: 16px;
                padding: 24px;
                &-name {
                    font-weight: 700;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                &-desc {
                    color: #787A80;
                    font-weight: 400;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
            }
        }
        &__right {

        }
         @media (max-width: $mobile + px) {
            width: 100%;
         }
    }
}
</style>