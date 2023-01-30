<template>
    <div>
        <div class="signup" @click.stop="$emit('closeComment', true)">
        <div class="signup-close" @click.capture="$emit('closeComment', false)"><img src="@/assets/icons/closeicon.png"/></div>
        <p class="signup-p1">Leave a review</p>
        <div class="signup__mail">
            <p >Name</p>
            <input class="input" type="text" placeholder="Your Name"/>
        </div>
        <div class="signup__mail">
            <p >Email</p>
            <input class="input" type="text" placeholder="Your working email"/>
        </div>
        <div class="comment">
            <p class="comment-p1">Rating</p>
            <select>
                <option selected disabled class="p1">Choose rating</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
            </select>
        </div>
        <div class="upload">
            <p class="comment-p1">Upload a photo or video (optional)</p>
            <div class="upload__box">
                <img src="@/assets/icons/upload.png"/>
                <p class="upload__box-p1">Drag and drop here to upload</p>
                <input class="upload__box-button" type="file"/>
            </div>
        </div>
        <div class="message">
            <p class="comment-p1">Review</p>
            <textarea type="message" placeholder="Your message..."></textarea>
        </div>
        <div class="signup__up">
            <button class="signup__up-button">Submit a review</button>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.message {
    textarea {
          background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            outline: none;
            width: 357px;
            padding: 12px 16px;
            height: 82px;
            resize: none;
            margin-bottom: 40px;
    }
}
.upload {

    &__box {
        margin-bottom: 20px;
        border: 2px dashed  #d3d4d8;;
        border-radius: 5px;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-button {
            font-weight: 700;
            font-size: 12px;
            color: teal;
            width: 122px;
            border: 2px solid teal;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            border-radius: 4px;
        }
        &-p1 {
            margin: 13px 0 20px 0;
        }
    }
}
.comment {
    &-p1 {
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 8px;
    }
     select {
            background: #FFFFFF;
            border: 1px solid #D7DADD;
            border-radius: 4px;
            outline: none;
            width: 100%;
            padding: 12px 16px;   
            color: #9A9CA5;
            margin-bottom: 20px;
        }
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
    &__up {
        &-button {
            border: none;
            background: teal;
            color: white;
            width: 100%;
            padding: 12px 0;
            border-radius: 4px;
        }
    }
}

</style>