<template>
    <div class="contact">
        <div class="account-back">
            <div class="contact__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="contact__nav-p1">Contacts</p>  
            </div>
        </div>
        <div class="contact__top container">
            <div class="contact__top__left">
                <button class="contact__top__left-p" @click="openContact(0)">Contact Us</button>
                <button class="contact__top__left-p" @click="openContact(1)">Outlet Stores</button>
                <button class="contact__top__left-p" @click="openContact(2)">FAQ</button>
            </div>
            <div class="contact__top__contact" v-if="tabId == 0">
                <p class="contact__top__contact-p1">If you have any questions, concerns or comments, we would love to hear from you! Submit your query using any of the methods below: </p>
                <div class="cp2">
                     <div class="contact__top__contact-p2">
                    <img src="@/assets/icons/phoneicon.png"/>
                    <p>(405) 555-0128</p>
                </div>
                 <div class="contact__top__contact-p2">
                    <img src="@/assets/icons/mailicon.png"/>
                    <p>Send us an email</p>
                </div>
                 <div class="contact__top__contact-p2">
                    <img src="@/assets/icons/messicon.png"/>
                    <p>Connect on Messenger</p>
                </div>
                 <div class="contact__top__contact-p2">
                    <img src="@/assets/icons/twiticon.png"/>
                    <p>Tweet us</p>
                </div>
                </div>
                <p class="contact__top__contact-p1">Or get in touch with us by completing the below form:</p>
                <div class="contact__top__contact__mid">
                    <div class="contact__top__contact__mid__block">
                        <p class="contact__top__contact__mid__block-desc">First name</p>
                        <input class="contact__top__contact__mid__block-input" type="text" placeholder="Annette"/>
                    </div>
                    <div class="contact__top__contact__mid__block">
                        <p class="contact__top__contact__mid__block-desc">Last name</p>
                        <input class="contact__top__contact__mid__block-input" type="text" placeholder="Black"/>
                    </div>
                    <div class="contact__top__contact__mid__block">
                        <p class="contact__top__contact__mid__block-desc">Email</p>
                        <input class="contact__top__contact__mid__block-input" type="text" placeholder="annetteb@example.com"/>
                    </div>
                    <div class="contact__top__contact__mid__block">
                        <p class="contact__top__contact__mid__block-desc">Phone</p>
                        <input class="contact__top__contact__mid__block-input" type="text" placeholder="(629) 555-0129"/>
                    </div>
                    <div class="contact__top__contact__mid__block">
                        <p class="contact__top__contact__mid__block-desc">Message*</p>
                        <input class="contact__top__contact__mid__block-input message" type="message" placeholder="Write your message here"/>
                    </div>
                </div>
                <button class="button1">Send message</button>
            </div> 
            <div class="contact__top__contact" v-else-if="tabId == 1">
                <div class="outlet">
                    <outlet-stores image="outlet1" text="New York, USA" tel="(405) 555-0128" email="hello@createx.com" time="Daily from 9 am to 9 pm" address="20 W 29th Street New York, NY 10001"/>
                    <outlet-stores image="outlet2" text="Delaware, USA" tel="(808) 555-0111" email="delaware@createx.com" time="Daily from 10 am to 9 pm" address="6391 Elgin St. Celina, Delaware 10299"/>
                    <outlet-stores image="outlet3" text="New Jersey, USA" tel="(702) 555-0122" email="newjersey@createx.com" time="Daily from 9 am to 8 pm" address="2464 Royal Ln. Mesa, New Jersey 45463"/>
                    <outlet-stores image="outlet4" text="Maine, USA" tel="(219) 555-0114" email="maine@createx.com" time="Daily from 9 am to 9 pm" address="8502 Preston Rd. Inglewood, Maine 98380"/>
                </div>
            </div>
            <div class="contact__top__contact" v-else-if="tabId == 2">
               <div class="faq">
                    <div class="faq__blocks">
                        <faq-info text="Do I need to register to place an order?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="What is the estimated delivery time?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="How can I pay for my order?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="Can I get a refund if the price has changed since I ordered it?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="Do you refund delivery charges if I return something?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="What documents will be provided with the order?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="Can I return the order to the courier if anything does not suit me?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="What should I do if my order hasn't been delivered yet?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                        <div class="faq__blocks-line"></div>
                        <faq-info text="What is your Returns Policy?" desc="Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."/>
                    </div>
               </div>
            </div>
        </div>
        <notice-block />
    </div>
</template>
<script>
import NoticeBlock from '@/components/UI/NoticeBlock.vue'
import FaqInfo from "@/components/UI/FaqInfo.vue"
import OutletStores from '@/components/UI/OutletStores.vue';

export default {
    name: "ContactView",
    components: { NoticeBlock, FaqInfo, OutletStores },
    methods: {
        openContact(id) {
            this.tabId = id;
        },
        openFaq(id) {
            this.faqId == id;
        }
    },
    data() {
        return {
            tabId: 0,
            openFaq: false
        }
    }
}
</script>
<style lang="scss" scoped>


.faq {
    &__blocks {
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
}

.outlet {
    display: flex;
    flex-wrap: wrap;
    row-gap: 48px;
    gap: 15px;
}
.button1 {
    border: none;
    background: teal;
    padding: 12px 25px;
    color: white;
    border-radius: 4px;
}
.message {
    width: 777px !important;
}
.account-back {
    background: #F4F5F7;
        padding: 16px 0;
}

.cp2 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;
    margin-bottom: 62px;
}

.contact {
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
        justify-content: space-between;
        margin-top: 42px;
        margin-bottom: 180px;
        &__left {
            display: flex;
            flex-direction: column;
            gap: 25px;
            align-items: baseline;
            &-p {
                cursor: pointer;
                font-weight: 700;
            font-size: 28px;
            color: #9A9CA5;
            border: none;
            background: white;
            }
        }
        &__contact {
            width: 810px;
            &-p1 {
                font-weight: 700;
                font-size: 20px;
            }
            &-p2 {
                display: flex;
                gap: 7px;
                color: #424551;
                font-weight: 400;
                font-size: 16px;
            }
            &__mid {
                    margin-top: 40px;
                    margin-bottom: 48px;
                    display: flex;
                    gap: 30px;
                    flex-wrap: wrap;
                    row-gap: 24px;
                    &__block {
                        &-desc {
                            font-weight: 400;
                            font-size: 16px;
                            margin-bottom: 8px;
                        }
                        &-input {
                        border: 1px solid #D7DADD;
                            border-radius: 4px;
                            width: 356px;
                            -webkit-animation: none;
                            outline: none;
                            padding: 13px 16px;

                        }
                    }
                }
        }
    }
}
</style>