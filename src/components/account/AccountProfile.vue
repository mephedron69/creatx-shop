<template>
    <div class="profile container">
        <div class="profile__top">
            <p class="profile__top-p1">My profile</p>
            <div class="profile__top-p2">
                <img src="@/assets/icons/deleteicon.png"/>
                <p>Delete account</p>
            </div>
        </div>
        <div class="profile__mid">
            <div class="profile__mid__block">
                <p class="profile__mid__block-desc">First name</p>
                <input class="profile__mid__block-input" type="text" placeholder="Annette"/>
            </div>
            <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Last name</p>
                <input class="profile__mid__block-input" type="text" placeholder="Black"/>
            </div>
            <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Email</p>
                <input class="profile__mid__block-input" type="text" placeholder="annetteb@example.com"/>
            </div>
             <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Phone</p>
                <input class="profile__mid__block-input" type="text" placeholder="(629) 555-0129"/>
            </div>
            <div class="profile__mid__block">
                <p class="profile__mid__block-desc">New Password</p>
                <input class="profile__mid__block-input" type="password"/>
            </div>
            <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Confirm Password</p>
                <input class="profile__mid__block-input" type="password"/>
            </div>
             <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Country</p>
                <input class="profile__mid__block-input" type="text" placeholder="USA"/>
            </div>
             <div class="profile__mid__block">
                <p class="profile__mid__block-desc">City</p>
                <input class="profile__mid__block-input" type="select" placeholder="New Jersey"/>
            </div>
             <div class="profile__mid__block">
                <p class="profile__mid__block-desc">Address</p>
                <input class="profile__mid__block-input" type="text" placeholder="2464 Royal Ln. Mesa, New Jersey"/>
            </div>
             <div class="profile__mid__block">
                <p class="profile__mid__block-desc">ZIP Code</p>
                <input class="profile__mid__block-input" type="number" placeholder="45463"/>
            </div>
        </div>
        <div class="profile__bot">
            <button class="profile__bot__button">Save changes</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.container {
    width: 810px !important;
}
.profile {
    &__top {
        display: flex;
        justify-content: space-between;
        &-p1 {
            font-weight: 900;
            font-size: 32px;
        }
        &-p2 {
            display: flex;
            color: red;
            align-items: center;
            gap: 9px;
        }
    }
    &__bot {
        margin-bottom: 180px;
        &__button {
            border: none;
            background: #17696A;;
            width: fit-content;
            letter-spacing: 0.5px;
            border-radius: 4px;
            padding: 15px 40px;
            color: white;
            font-weight: 500;
            font-size: 16px;
            cursor: pointer;
        }
    }
    &__mid {
        margin-top: 40px;
        margin-bottom: 48px;
        display: flex;
        flex-wrap: wrap;
        gap: 6%;
        row-gap: 24px;
        &__block {
            width: 45%;
            &-desc {
                font-weight: 400;
                font-size: 16px;
                margin-bottom: 8px;
            }
            &-input {
               border: 1px solid #D7DADD;
                border-radius: 4px;
                -webkit-animation: none;
                outline: none;
                padding: 13px 16px;
                width: 100%;
            }
        }
    }
}
</style>