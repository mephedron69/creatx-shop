<template>
   <div class="outlet__block">
            <img class="outletimg" :src="require('@/assets/images/' + image + '.png')"/>
            <p class="outlet-p1">{{ text }}</p>
            <div class="cp3">
                        <div class="contact__top__contact-p2">
                        <img src="@/assets/icons/phoneicon.png"/>
                        <p>{{ tel }}</p>
                    </div>
                    <div class="contact__top__contact-p2">
                        <img src="@/assets/icons/mailicon.png"/>
                        <p>{{ email }}</p>
                    </div>
                    <div class="contact__top__contact-p2">
                        <img src="@/assets/icons/clockicon.png"/>
                        <p>{{ time }}</p>
                    </div>
                    <div class="contact__top__contact-p2">
                        <img src="@/assets/icons/gps.png"/>
                        <p>{{ address }}</p>
                    </div>
            </div>
     </div>
</template>
<script>
export default {
    props: ["image", "text", "tel", "email", "time", "address"]
}
</script>
<style lang="scss" scoped>
.outletimg {
    width: 100%;
}
  .outlet__block {
        border: 2px solid rgb(232, 232, 232);
        width: fit-content;
    }
    .outlet-p1 {
        font-weight: 700;
        font-size: 24px;
        margin-left: 21px;
        margin-top: 24px;
    }

.cp3 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
    margin-left: 24px;
    margin-bottom: 32px;
}
.contact__top__contact-p2 {
    display: flex;
                gap: 7px;
                color: #424551;
                font-weight: 400;
                font-size: 16px;
}
</style>