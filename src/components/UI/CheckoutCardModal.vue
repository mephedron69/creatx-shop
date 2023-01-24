<template>
    <div class="modal">
        <img class="modal-img" :src="require('@/assets/products/' + modal.image + '.png')"/>
        <div class="modal__char">
            <div class="modal__char__desc">
                <p class="modal__char__desc-p1">{{ modal.name }}</p>
                <p class="modal__char__desc-p2" >Color: {{ modal.color }}</p>
                <p class="modal__char__desc-p2" >Size: {{ modal.size }}</p>
            </div>
            <div class="modal__char__input">
                <input type="number" value="1"/>
                <p class="modal__char__input-price">$ {{ modal.price }}</p>
            </div>
            <div class="modal__char__favor">
                <p>Move to</p>
                <img src="@/assets/icons/favouricon.png"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["modal"]
}
</script>
<style lang="scss" scoped>
.modal {
    display: flex;
    gap: 16px;
    &-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
    &__char {
        &__desc {
            &-p1 {
                font-weight: 700;
                font-size: 14px;
                margin-bottom: 5px;
            }
            &-p2 {
                color: #787A80;
                font-size: 12px;
            }
        }
        &__input {
            display: flex;
            align-items: center;
            gap: 16px;
            margin: 12px 0;
            &-price {
                font-weight: 700;
                font-size: 16px;
                color: red;
            }
            input {
                background: #FFFFFF;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                padding: 9px 12px;
                width: 47px;
                outline: none;
            }
        }
        &__favor {
            display: flex;
            gap: 8px;
            align-items: center;
            font-weight: 700;
            img {
                width: 15px;
            }
        }
    }
}
</style>