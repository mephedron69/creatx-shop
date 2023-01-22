<template>
    <div class="block4">
        <div class="block4__box">   
                            <div class="block4__box-p1">
                                <input @click="openCredit = !openCredit" type="radio" style="accent-color: teal;"/>
                                <p style="font-weight: 700;">{{ text1 }}</p>
                                <img :src="require('@/assets/icons/' + img1 + '.png')"/>
                                <img :src="require('@/assets/icons/' + img2 + '.png')"/>
                            </div>
                            <div v-if="openCredit">
                                <div class="block4__box-p2">
                                <p>{{ text2 }}</p>
                                 <input type="text" placeholder="0000 0000 0000 0000"/>
                            </div>
                            <div class="block4__box__p3">
                                <div class="block4__box__p3-left">
                                    <p style="font-weight: 700;">Expiry date</p>
                                    <input type="text" placeholder="mm/yy"/>
                                </div>
                                 <div class="block4__box__p3-right">
                                    <p style="font-weight: 700;">CVC</p>
                                    <input type="text" placeholder="000"/>
                                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            openCredit: false
        }
    },
    props: ["img1", "img2", "text1", "text2"]
}
</script>
<style lang="scss" scoped>

input {
        background: #FFFFFF;
        border: 1px solid #D7DADD;
        border-radius: 4px;
        outline: none;
        padding: 17px 16px;
 }
 input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.block4 {
                    width: 341px;
                    background: #FFFFFF;
                    border: 1px solid #E5E8ED;
                    padding: 24px;
                    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                    border-radius: 4px;
                    &__box{
                        &-p1 {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                        }
                        &-p2 {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            margin-top: 16px;
                            margin-bottom: 20px;
                        }
                        &__p3 {
                            display: flex;
                            width: 100%;
                            gap: 2%;
                            &-left {
                                width: 53%;
                                display: flex;
                                flex-direction: column;
                                gap: 8px;
                            }
                             &-right {
                                width: 45%;
                                display: flex;
                                flex-direction: column;
                                gap: 8px;
                            }
                        }
                    }
                }
</style>