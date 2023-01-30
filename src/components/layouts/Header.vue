<template>
    <div class="header">
        <div class="topback">
             <div class="header__top container">
            <div class="tel">
                <p>Available 24/7 at </p>
                <a href="tel:87476328976"><p>(405) 555-0128</p></a>
            </div>
            <div class="header__top__p2">
                <p>Delivery & returns</p>
                <router-link to="/track"><p>Track order</p></router-link>
                <router-link to="/blog"><p>Blog</p></router-link>
                <router-link to="/contact"><p>Contacts</p></router-link>
            </div>
            <div class="header__top__p3">
                <div class="header__top__p3__currence">
                    <img src="@/assets/icons/flagusa.png"/>
                    <select style="cursor: pointer;">
                        <option>Eng / $</option>
                        <option>Rus / $</option>
                    </select>
                </div>
                <div class="header__top__p3__profil" v-if="!getAuth">
                    <img src="@/assets/icons/profilicon.png"/>
                    <p @click="signIn = true" style="cursor: pointer;">Log in</p>
                    <sign-in @click="signIn=false" @closeModal="closeModel" class="signin" v-if="signIn"/>
                    /
                    <p @click="signUp = true" style="cursor: pointer;"> Register</p>
                    <sign-up @click="signUp=false" @closeModal1="closeModel1" class="signup" v-if="signUp"/>
                </div>
                <div v-else class="header__top__p3__profil" @click="$router.push('/account/my-profile')">
                    <img src="@/assets/icons/profilicon.png"/>
                    <p  style="cursor: pointer;">Account</p>
                </div>
            </div>
        </div>
        </div>
        <div class="header__middle container">
            <div class="header__middle__left">
                <router-link to="/" class="menu"><img class="menu-open" src="@/assets/icons/menu.png"/><img src="@/assets/icons/logoshop.png"/></router-link>
                <div class="header__middle__left-sort">
                    <p @click="categoryNav = !categoryNav">Women</p>
                    <category-nav class="navigation" v-if="categoryNav"/>
                    <router-link to="/category"><p>Men</p></router-link>
                    <p>Girls</p>
                    <p>Boys</p>
                    <p style="color: red">Sale</p>
                </div>
            </div>
            <div class="header__middle__right">
                <div class="header__middle__right__p1">
                    <input type="text" placeholder="Search for products..."/>
                    <img src="@/assets/icons/searchicon.png"/>
                </div>

                <div class="header__middle__right__p2">
                    <div class="favbas">
                         <router-link to="/account/my-wishlist"><img src="@/assets/icons/favouricon.png"/></router-link>
                        <p>2</p>
                    </div>
                    <div class="favbas">
                        <img src="@/assets/icons/basketicon.png" @click="openCheckout = true" style="cursor: pointer;" />
                        <checkout-window @click="openCheckout = false" @closeCheckout="closeCheckout" v-if="openCheckout" class="checkout-modal"/>
                        <p class="favbas-style">4</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="botback">
            <div class="header__bot">
                <img src="@/assets/icons/leftslider.png"/>
                <p>Up to 70% Off. Shop our latest sale styles</p>
                <img src="@/assets/icons/rightslider.png"/>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryNav from '../UI/CategoryNav.vue';
import SignIn from '../UI/SignIn.vue';
import SignUp from '../UI/SignUp.vue';
import CheckoutWindow from '../UI/CheckoutWindow.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { SignIn, SignUp, CategoryNav, CheckoutWindow},
    data() {
        return {
            signIn: false,
            signUp: false,
            categoryNav: false,
            openCheckout: false
        }
    },
    computed: {
        ...mapGetters(["getAuth"])
    },  
    mounted() {
        this.checkAuth()
    },
    methods: {
        ...mapActions(["checkAuth"]),
        closeModel(value) {
            this.signIn = value;
        },
        closeModel1(value) {
            this.signUp = value;
        },
        closeCheckout(value) {
            this.openCheckout = value   
        }
    }
}
</script>
<style lang="scss" scoped>
.tel {
    display: flex;
    gap: 3px;
    a {
        text-decoration: none;
        color: white;
    }
}
.checkout-modal {
    z-index: 4;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
}
.navigation {
      z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
    max-width: 100%;
    margin-top: 120px;
}

.signin{
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: center ;
}

.signup{
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4); /*Черный с непрозрачностью */
    width: 100%; 
    height: 100%; 
    display: flex;
    justify-content: center ;
}

.header {
    .topback{
       background: #1E212C;
    }
    .botback{
        background: #17696A;
    }
    &__top {
        padding: 12px 0;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        color: white;
        @media (max-width: $mobile + px) {
            display: none;
        }
        &__p2 {
            display: flex;
            gap: 32px;
            a {
                text-decoration: none;
                color: white;
            }
        }
         &__p3 {
            display: flex;
            gap: 63px;
            align-items: center;
            &__currence {
                display: flex;
                gap: 12px;
                align-items: center;
                select {
                    border: none;
                    background: #1E212C;
                    color: white;
                    outline: none;
                }
            }
            &__profil {
                display: flex;
                gap: 10px;
                align-items: center;
            }
        }
    }
    &__middle {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        &__left {
            display: flex;
            align-items: center;
            gap: 60px;
            &-sort{
                display: flex;
                gap: 40px;
                font-weight: 700;
                font-size: 16px;
                a {
                    text-decoration: none;
                    color: black;
                }
                @media (max-width: $mobile + px) {
                    display: none;
                }
            }
            
            .menu {
            display: flex;
            gap: 5px;
                &-open {
                    display: none;
                }
                @media (max-width: $mobile + px) {
                    align-items: center;
                    gap: 10px;
                    &-open {
                        display: block;
                        width: 22px;
                    }
                }
            }

        }
        &__right {
            display: flex;
            gap: 48px;
            align-items: center;
            &__p1 {
                color: #9A9CA5;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 380px;
                box-sizing: border-box;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                padding: 11px 15px;
                input { 
                    border: none;
                    outline: none;

                }
            }
            &__p2 {
                display: flex;
                gap: 40px;
                .favbas{
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    &-style {
                        padding: 1px 8px;
                        border-radius: 4px;
                        background: #03CEA4;
                    }
                }
            }
        }
        @media (max-width: $mobile + px) {
            margin-top: 12px;
            margin-bottom: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            &__left {
                gap: 0;
                img {
                    width: 90px;
                }
            }
            &__right {
                margin-top: -30px;
                flex-direction: column-reverse;
                display: flex;
                align-items: center;
                gap: 10px;
                &__p1 {
                    width: 100%;
                }
                &__p2 {
                    gap: 1px;
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    gap: 10px;
                }
            }
        }
    }
    &__bot {
        display: flex;
        gap: 17px;
        justify-content: center;
        padding: 9px 0 9px;
        color: white;
        font-weight: 400;
        font-size: 12px;
        text-decoration: underline;
        @media (max-width: $mobile + px) {
                padding: 5px 0 5px;
        }
    }
}

</style>