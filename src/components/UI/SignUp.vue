<template>
    <div>
        <div class="signup" @click.stop="$emit('closeModal1', true)">
        <div class="signup-close" @click.capture="$emit('closeModal1', false)"><img src="@/assets/icons/closeicon.png"/></div>
        <p class="signup-p1">Sign up</p>
        <p class="signup-p2">Registration takes less than a minute but gives you full control over your orders.</p>
        <div class="signup__mail">
            <p >Full Name</p>
            <input class="input" type="text" placeholder="Your full name"/>
        </div>
        <div class="signup__mail">
            <p >Email</p>
            <input class="input" type="text" placeholder="Your working email"/>
        </div>
        <div class="signup__pass">
            <p>Password</p>
            <div class="signup__pass__top">
                <input class="input" type="password" />
                <img src="@/assets/icons/eyepass.png"/>
            </div>
        </div>
        <div class="signup__pass">
            <p>Confirm Password</p>
            <div class="signup__pass__top">
                <input class="input" type="password" />
                <img src="@/assets/icons/eyepass.png"/>
            </div>
        </div>
        <div class="signup__forgot">
            <div class="signup__forgot-left">
                <input class="checkbox" type="checkbox"/>
                <p>Remember me</p>
            </div>
        </div>
        <div class="signup__up">
            <button class="signup__up-button">Sign up</button>
        </div>
        <div class="signup__up">
            <p>Already have an account?</p>
            <p class="signup__up-color">Sign in</p>
       </div>
       <div class="signup-line"></div>
       <p class="signup-p2">Or sign in with</p>
       <div class="signup__social">
            <div class="signup__social-block">
                <img class="signup__social-image" src="@/assets/icons/facebook2.png"/>
            </div>
            <div class="signup__social-block">
                <img class="signup__social-image" src="@/assets/icons/googleicon2.png"/>
            </div>
           <div class="signup__social-block">
                <img class="signup__social-image" src="@/assets/icons/twiticon2.png"/>
            </div>
            <div class="signup__social-block">
                <img class="signup__social-image" src="@/assets/icons/inicon2.png"/>
            </div>
       </div>
    </div>
    </div>
</template>
<script>
export default {
    name: "SingUp",
    data() {
        return {
        }
    }
}
</script>
<style lang="scss" scoped>
.checkbox {
    accent-color: teal;
}
.signup {
    border-radius: 4px;
    position: relative;
    color: black;
    width: 390px;
    height: fit-content;
    padding: 48px;
    background: white;
    &-close {
        cursor: pointer;
        position: absolute;
        right: 28px;
        top: 28px;
    } 
    &-p1 {
        display: flex;
        justify-content: center;
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 24px;
    }
    &-p2 {
        color: #787A80;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
    }
    &__mail {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 24px 0 20px 0;
        font-weight: 400;
        font-size: 14px;
        .input {
            background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            outline: none;
            width: 358px;
            padding: 12px 16px;

        }
    }
    &__pass {
        display: flex;
            margin-top: 20px;
        flex-direction: column;
        gap: 8px;
        font-weight: 400;
        font-size: 14px;
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
             background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            .input {
                border: none;
                outline: none;   
                width: -webkit-fill-available;
                margin-right: 15px;
            }
        }
    }
    &__forgot {
        margin-top: 20px;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-left {
            display: flex;
            font-weight: 400;
            font-size: 14px;
            gap: 10px;
            align-items: center;
        }
        &-right {
            color: #17696A;
        }
    }
    &__up {
        margin-bottom: 24px;
        &-button {
            border: none;
            background: teal;
            color: white;
            width: 100%;
            padding: 12px 0;
            border-radius: 4px;
        }
    }
    &__up {
        display: flex;
        gap: 2px;
        color: black;
        &-color {
            color: teal;
        }
    }
    &-line {
        display: flex;
        justify-content: center;
        margin: 24px -48px;
        border: 1px solid #E5E8ED;
        
    }
    &__social {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        gap: 12px;
        &-block {
            width: 32px;
            height: 32px;
            background: rgb(226, 226, 226);
            border-radius: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
        }
        &-image {
            height: 45%;
            opacity: 0.5;
        }
    }
}
</style>