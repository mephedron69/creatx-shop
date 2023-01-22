<template>
    <div class="noticeback">
        <div class="notice container">   
            <p class="notice-name">Subscribe for updates</p>
            <p class="notice-desc">Subscribe for exclusive early sale access and new arrivals.</p>
            <div class="notice__who"> 
                <button class="notice__who-button">Women</button>
                <button class="notice__who-button">Men</button>
                <button class="notice__who-button">Girls</button>
                <button class="notice__who-button">Boys</button>
            </div>
            <p class="notice-email">Email</p>
            <div class="notice__subs">
                <input class=notice__subs__input type="text" placeholder="Your working email"/>
                <button class=notice__subs__button>Subscribe</button>
            </div>
            <div class="notice__agree">
                <input id="checkbox" type="checkbox"/>
            <label for="checkbox">I agree to receive communications from Createx Store.</label>
            </div>
        <img class="noticeicon" src="@/assets/images/noticeimage.png"/>
    </div>
    </div>
</template>
<script>
export default {
    name: "NoticeBlock"
}
</script>
<style lang="scss" scoped>

.noticeback {
    background: #F4F5F7;
    width: 100%;
    padding: 100px 0;
}
.noticeicon{
    position: absolute;
    right: 0;
    bottom: -75px;
}
.notice {
    position: relative;

    &-name {
            font-weight: 900;
            font-size: 46px;
    }
    &-desc {
            font-weight: 400;
            font-size: 20px;
            color: #787A80;
            margin: 24px 0 30px;
    }
    &__who {
         display: flex;
         gap: 10px;
        &-button {
            border: 1px solid #787A80;
            color: #787A80;
            border-radius: 2px;
            background: white;
            padding: 6px 16px;
            
        }
    }
    &-email {
            font-weight: 400;
            font-size: 16px;
             margin: 32px 0 8px;
    }
    &__subs {
         &__input {
        border: none;
        padding: 11px 16px;
        margin-top: 8px;
        margin-bottom: 20px;
        outline: none;
        border: 1px solid #D7DADD;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      &__button {
        border: none;
        background: teal;
        border: 1px solid teal;
        padding: 11px 16px;
        color: white;
        cursor: pointer;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    &__agree {
        display: flex;
        gap: 7px;
        align-items: center;
        input {
            accent-color: teal;
        }
    }

}
</style>