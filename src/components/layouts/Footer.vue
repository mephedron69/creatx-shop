<template>
    <div class="footer">
       <div class="footer-back">
        <div class="footer__top container">
            <div class="footer__top__left">
                <div class="footer__top__left__desc">
                    <p class="desc-name">HELP</p>
                    <div class="desc-gap">
                        <p>Delivery & returns</p>
                        <p>FAQ</p>
                        <p>Track order</p>
                        <p>Contacts</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div class="footer__top__left__desc">
                    <p class="desc-name">SHOP</p>
                    <div class="desc-gap">
                        <p>New arrivals</p>
                        <p>Trending now</p>
                        <p>Sales</p>
                        <P>Brands</P>
                    </div>
                </div>
                <div class="footer__top__left__desc">
                    <p class="desc-name">GET IN TOUCH</p>
                    <div class="desc-gap">
                        <p>Call: (405) 555-0128</p>
                        <p>Email: hello@createx.com</p>
                    </div>
                    <div class="social">
                        <soc-icon icon="facebookW" background="#3b3e49;"/>
                        <soc-icon icon="instW" background="#3b3e49;"/>
                        <soc-icon icon="twitW" background="#3b3e49;"/>
                        <soc-icon icon="youtubeW" background="#3b3e49;"/>
                        <soc-icon icon="pinterestW" background="#3b3e49;"/>
                    </div>
                </div>
            </div>
            <div class="footer__top__right">
                <p class="desc-name">DOWNLOAD OUR APP</p>
                <div class="footer__top__right__aplic">
                    <div class="aplication">
                        <img src="@/assets/icons/Appleicon.png"/>
                        <div>
                            <p class="aplication-text1">Download on the</p>
                            <p class="aplication-text2">App Store</p>
                        </div>
                    </div>
                     <div class="aplication">
                        <img src="@/assets/icons/Googleicon.png"/>
                        <div>
                            <p class="aplication-text1">GET IT ON</p>
                            <p class="aplication-text2">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
       </div>
       <div class="footer-backbot">
         <div class="footer__bot container">
            <div class="footer__bot-left">
                <p>© All rights reserved. Made with</p>
                <img src="@/assets/icons/hearticon.png"/>
                <p>by Createx Studio </p>
            </div>
            <p class="footer__bot-right">Go to top</p>
        </div>
       </div>
    </div>  
</template>
<script>
import SocIcon from '../UI/SocIcon.vue';
export default {
    components: {SocIcon}
}
</script>
<style lang="scss" scoped>

.footer {
    height: 100%;
    background: #1E212C;;
    &-back {
        padding-top: 60px;
        padding-bottom: 40px;
        background: #1E212C;
    }
    &-backbot {
        background: #1E212C;
        padding-top: 24px;
        padding-bottom: 32px;
        border-top: 1px solid rgb(57, 57, 57);
    }

&__top {
    display: flex;
        justify-content: space-between;
    p {
        font-weight: 400;
        font-size: 16px;
    }
    &__left{
        display: flex;
        gap: 150px;
        &__desc {
            display: flex;
            flex-direction: column;
            gap: 12px;
            .desc-name {
                font-weight: 700;
                font-size: 16px;
                color: #FFFFFF;
                opacity: 1;
            }
            .desc-gap {
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
                p {
                    font-weight: 400;
                    font-size: 13px;
                    color: #FFFFFF;
                    opacity: 0.6;
                 }
            .social{
                display: flex;
                gap: 12px;
                &__div {
                    width: 32px;
                    height: 32px;
                     background: #424551;
                    border-radius: 4px;
                    z-index: 2;
                   
                }
                 img {
                        padding-left: 8px;
                    }
            }
            }
    }
    &__right {
        display: flex;
        flex-direction: column;
        gap: 20px;
        &__aplic {
            display: flex;
            gap: 20px;
            .aplication {
                background: #424551;
                border-radius: 7px;
                display: flex;
                align-items: center;
                padding: 8px 12px;
                gap: 10px;
                &-text1 {
                    font-weight: 400;
                    font-size: 12px;
                    color: white;
                    
                }
                &-text2 {
                    font-weight: 400;
                    font-size: 16px;
                    color: white;
                }
                
            }
            
        }
        .desc-name {
            font-weight: 700;
                font-size: 16px;
                color: #FFFFFF;
        }
    }
    @media (max-width: $mobile + px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        &__left {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
   }
}
&__bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
        display: flex;
        color: white;
        gap: 10px;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        
    }
    &-right {
        color: white;
        opacity: 0.6;
        font-weight: 700;
        font-size: 16px;
    }
}
}

</style>