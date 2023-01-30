<template>
                  <div class="fashion__bot__blog">
                      <router-link to="blog-card"><img class="fashion__bot__blog__img" :src="require('@/assets/images/'+ blogs.image + '.png')" /></router-link>
                      <p class="fashion__bot__blog__p1"> {{ blogs.name }}</p>
                      <div class="fashion__bot__blog__p2">
                        <p>{{ blogs.category }}</p>
                        <p>|</p>
                        <p>{{ blogs.date }}</p>
                        <p>|</p>
                        <img src="@/assets/icons/chatblock9.png"/> 
                        <p>No comments</p>
                      </div>
                      <div class="fashion__bot__blog__p3">{{ blogs.desc }}</div>
                  </div>
</template>
<script>
export default {
    props: ["blogs"]
}
</script>
<style lang="scss" scoped>
          .fashion__bot__blog {
            background: white;
            
            &__p1 {
              font-weight: 700;
              font-size: 20px;
              margin: 24px 24px 0;
            }
            &__p2 {
              font-weight: 400;
              font-size: 14px;
              color: #787A80;
              margin: 12px 24px 16px;
              display: flex;
              gap: 12px;
              
            }
            &__p3 {
              font-weight: 400;
              font-size: 16px;
              margin: 0 24px;
              padding-bottom: 24px;
            }
            &__img {
              width: 100%
            }
          }
</style>