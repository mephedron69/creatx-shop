<template>
    <div class="socail" :style="'background:'+ background"> 
        <img class="icon" :src="require('@/assets/icons/' + icon + '.png')"/>
    </div>
</template>
<script>
export default {
    props: ["icon", "background"]
}
</script>
<style lang="scss" scoped>
.socail {
    position: relative;
    width: fit-content;
    width: 32px;
        height: 32px;
        background: #e9e9e9;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
}

    .icon {
        position: absolute;
        margin-top: 25;
        opacity: 0.6;
        z-index: 2;
         height: 45%;
}
</style>