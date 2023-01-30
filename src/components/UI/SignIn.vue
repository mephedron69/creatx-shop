<template>
    <div>
        <div class="signin" @click.stop="$emit('closeModal', true)">
        <div class="signin-close" @click.capture="$emit('closeModal', false)"><img src="@/assets/icons/closeicon.png"/></div>
        <p class="signin-p1">Sign in</p>
        <p class="signin-p2">Sign in to your account using email and password provided during registration.</p>
        <div class="signin__mail">
            <p >Email</p>
            <input class="input" type="text" placeholder="Your working email" v-model="login"/>
        </div>
        <div class="signin__pass">
            <p>Password</p>
            <div class="signin__pass__top">
                <input class="input" :type="showPass ? 'text' : 'password'"  v-model="password"/>
                <img src="@/assets/icons/eyepass.png" @click="showPass = !showPass"/>
            </div>
        </div>
        <div class="signin__forgot">
            <div class="signin__forgot-left">
                <input class="checkbox" type="checkbox"/>
                <p>Keep me signed in</p>
            </div>
            <p class="signin__forgot-right">Forgot password?</p>
        </div>
        <div class="signin__in">
            <button class="signin__in-button" @click="signIn">Sign in</button>
        </div>
        <div class="signin__up">
            <p>Don't have an account?</p>
            <p class="signin__up-color">Sign up</p>
       </div>
       <div class="signin-line"></div>
       <p class="signin-p2">Or sign in with</p>
       <div class="signin__social">
            <div class="signin__social-block">
                <img class="signin__social-image" src="@/assets/icons/facebook2.png"/>
            </div>
            <div class="signin__social-block">
                <img class="signin__social-image" src="@/assets/icons/googleicon2.png"/>
            </div>
           <div class="signin__social-block">
                <img class="signin__social-image" src="@/assets/icons/twiticon2.png"/>
            </div>
            <div class="signin__social-block">
                <img class="signin__social-image" src="@/assets/icons/inicon2.png"/>
            </div>
       </div>
    </div>
    </div>
</template>
<script>
import users from "@/data/users.json"
import { mapActions } from 'vuex'
export default {
    name: "SingIn",
    data() {
        return {
            showPass: false,
            users: users.users,
            login: "mephed.ron",
            password: "MamaQueen7"
        }
    },
    methods: {
        ...mapActions(["checkAuth"]),
        signIn() {
            if (this.users.find(item => item.log == this.login && item.password == this.password)) {
                localStorage.setItem("login", this.login)
                this.$router.push("/account")
                this.$emit('closeModal', false)
                this.checkAuth()
            }
            else {
                alert("Неверный логин или пароль!")
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.checkbox {
    accent-color: teal;
}
.signin {
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
    &__in {
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