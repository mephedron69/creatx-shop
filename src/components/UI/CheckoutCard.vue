<template>
    <div class="check">
        <div class="block1">
            <div class="betwe">
                <img class="check-img" :src="require('@/assets/products/' + check.image + '.png')"/>
                    <div class="check__text">
                        <p class="check__text-p1">{{ check.name }}</p>
                        <div class="text-desc">
                            <p class="check__text-p2">Color: {{ check.color }}</p>
                             <p class="check__text-p3">Size: {{ check.size }}</p>
                        </div>
                        
                    </div>
            </div>
            <input class="check__input" type="number" value="1"/>
        </div>
        <div class="block2">
        <p class="check__price">${{ check.price }}</p>
        <div class="check__delete">
            <button class="check__delete__button">Delete</button>
            <div class="check__delete__move">
                <p>Move to</p>
                <img src="@/assets/icons/favouricon.png"/>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CheckoutCard",
    props: ["check"]
}
</script>
<style lang="scss" scoped>
.betwe {
    display: flex;
    gap: 22px;
}
.block1 {
    display: flex;
    justify-content: space-between;
    width: 60%;
}
.block2 {
    width: 40%;
    display: flex;
    justify-content: space-between;
}
.check {
    background: #F4F5F7;
    padding: 24px;
    display: flex;
    gap: 40px;
    width: 93.5%;
    &-img {
        width: 80px;
        height: 80px;
        margin-top: -8px;
    }
    &__text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        &-p1 {
            font-weight: 700;
            font-size: 14px;
        }
        &-p2 {
                color: #787A80;
                font-size: 12px;
        }
        &-p3{
                color: #787A80;
                font-size: 12px;
        }
    }
    &__input {
        outline: none;
        width: 48px;
        padding: 0 12px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #D7DADD;
    }
    &__price {
        font-weight: 700;
        font-size: 16px;
        margin-top: 5px;
    }
    &__delete {
        &__button {
            border: 2px solid teal;
            background: none;
            border-radius: 4px;
            letter-spacing: 0.5px;
            font-weight: 700;
            font-size: 12px;
            color: teal;
            padding: 12px 22px;

        }
        &__move {
            font-weight: 700;
            font-size: 12px;
            color: #424551;
            display: flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
            margin-top: 15px;
            img { 
                width: 16px;
            }
        }
    }
}
.text-desc {
    margin-top: 4px;
}
</style>