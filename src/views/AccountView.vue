<template>
    <div class="account">
        <div class="account-back">
            <div class="account__nav container">
                <img src="@/assets/icons/homeicon.png"/>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="account__nav-p1">Account</p>  
                <img src="@/assets/icons/linestok.svg"/>
                <p class="account__nav-p2">My profile </p>
            </div>
        </div>
        <div class="account__filter container">
            <div class="account__filter__left">
                <div class="account__filter__left__user">
                    <p class="account__filter__left__user-p1">Dauren Amankulov</p>
                    <p class="account__filter__left__user-p2">amankulov.d.t@gmail.com</p>
                </div>
                <div class="account__filter__left__sorts" :class="{activeAccount: sortId == item.slug}" v-for="item in nav" :key="item" @click="$router.push('/account/'+item.slug)">
                    <img :src="require('@/assets/icons/' + item.icon + '.png')"/>
                    <p>{{ item.text }}</p>
                </div>
            </div>
                <div class="account__filter__profile" v-if="sortId == 'my-profile'">
                <profile />
                </div>
                <div class="account__filter__orders" v-else-if="sortId == 'my-orders'">
                    <order />
                </div>
                <div class="account__filter__orders" v-else-if="sortId == 'my-wishlist'">
                    <wishlist />
                </div>
                <div class="account__filter__orders" v-else-if="sortId == 3">
                    <viewed />
                </div>
                <div class="account__filter__orders" v-else-if="sortId == 4">
                    <review />
                </div>
        </div>
    </div>
</template>
<script>
import profile from "@/components/account/AccountProfile.vue"
import order from "@/components/account/AccountOrder.vue"
import wishlist from "@/components/account/AccountWishlist.vue"
import viewed from "@/components/account/AccountViewed.vue"
import review from "@/components/account/AccountReview.vue"

import { value } from "dom7"
export default {
    name: "AccountView",
    components: {
        profile, order, wishlist, viewed, review
    },
    data() {
        return {
            sortId: "my-profile",
            nav: [
                { id: 0, icon: "accountp1", text: "My profile", slug: 'my-profile' },
                { id: 1, icon: "accountp2", text: "My orders", slug: 'my-orders'  },
                { id: 2, icon: "accountp3", text: "Wishlist", slug: 'my-wishlist'  },
                { id: 3, icon: "accountp4", text: "Recently viewed", slug: 'recently-viewed'  },
                { id: 4, icon: "accountp5", text: "My reviews", slug: 'my-reviews'  },
                { id: 5, icon: "accountp6", text: "Sign out" },
            ]
        }
    },
    methods: {
        sortAccount(id) {
            this.sortId = id
        }
    },
    mounted() {
        this.sortId = this.$route.params.id
    },
    watch: {
        $route() {
            this.sortId = this.$route.params.id
        }
    }
}
</script>
<style lang="scss" scoped>
.activeAccount {
    background: teal;
    color: white;
}
.account {
    .account-back{
        background: #F4F5F7;
        padding: 16px 0;
    }
    &__nav {
       display: flex; 
       gap: 13px;
       &-p1 {
        font-weight: 400;
        font-size: 14px;
       }
       &-p2 {
        font-weight: 400;
        font-size: 14px;
        color: #9A9CA5;
       }
    }
    &__filter {
        margin-bottom: 180px;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        &__left {
            width: fit-content;
            &__user {
                padding: 20px 90px 20px 20px;
                border: 1px solid #E5E8ED;
                box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                 &-p1 {
                font-weight: 700;
                font-size: 20px;
            }
            &-p2 {
                font-weight: 400;
                font-size: 16px;
                color: #787A80;
                padding: 2px 0 20px;
            }
            }
            &__sorts {
                padding: 12px 90px 12px 20px;
                border: 1px solid #E5E8ED;
                box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                display: flex;
                gap: 9px;
                
            }
        }
    }
    
}
</style>