<template>
    <div class="blogcard">
        <div class="account-back">
            <div class="blogcard__nav container">
                <router-link to="/"><img src="@/assets/icons/homeicon.png"/></router-link>
                <img src="@/assets/icons/linestok.svg"/>
                <p class="blogcard__nav-p1">Fashion blog</p>  
                <img src="@/assets/icons/linestok.svg"/>
                <p style="font-size: 14px; color: #9A9CA5;">Top 10 of This Season’s Hottest Sneakers</p>
            </div>
        </div>
        <BlogBlock :blogs="blog[1]"/>
        <div class="blogcard__part3">
              <div class="blogcard__part3__top container">
                <p class="blogcard__part3__top__left">Related posts</p>
                <router-link to="/blog"><div class="blogcard__part3__top__right">View all posts</div></router-link>
              </div>
              <div class="blogcard__part3__bot container">
                  <BlogCard  class="blogcard__part3__bot__blog" :blogs="blog[0]"></BlogCard>
                  <BlogCard class="blogcard__part3__bot__blog" :blogs="blog[1]"></BlogCard>
              </div>
        </div>
        <div class="blogcard__comments container810">
            <p class="blogcard__post-p1">4 comments</p>
            <p>Тут должны быть коментария</p>
        </div>
        <div class="blogcard__post container810">
            <p class="blogcard__post-p1">Leave your comment</p>
            <div class="blogcard__post__data">
                <div class="blogcard__post__data-namail">
                    <div class="blogcard__post__data-input">
                        <p>Name*</p>
                        <input type="text" placeholder="Your name"/>
                    </div>
                    <div class="blogcard__post__data-input">
                        <p>Email*</p>
                        <input type="text" placeholder="Your working email"/>
                    </div>
                </div>
                <div class="blogcard__post__data-input">
                    <p>Your comment*</p>
                    <textarea type="text" placeholder="Type comment here"></textarea>
                </div>
                
            </div>
            <button class="blogcard__post-button">Post comment</button>
        </div>
        <notice-block />
    </div>
</template>
<script>
import SocIcon from '@/components/UI/SocIcon.vue';
import BlogCard from '@/components/UI/BlogCard.vue';
import blog from "@/data/blog.json"
import NoticeBlock from '@/components/UI/NoticeBlock.vue';
import BlogBlock from '@/components/UI/BlogBlock.vue';
export default {
    components: { SocIcon, BlogCard, NoticeBlock, BlogBlock },
    data() {
        return {
            blog: blog.blog
        }
    }
}
</script>
<style lang="scss" scoped>
.container810 {
    width: 52.735%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    align-items: center;
}
.account-back{
        background: #F4F5F7;
        padding: 16px 0;
}
.blogcard {
    &__nav {
       display: flex; 
       gap: 13px;
       &-p1 {
        font-weight: 400;
        font-size: 14px;
       }
    }
    &__part3 {
        padding: 80px 0;
        background: #F4F5F7;
      &__top {
        margin-bottom: 60px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        &__left {
          font-weight: 900;
          font-size: 46px;
        }
        a {
          text-decoration: none;
        }
        &__right {
          font-weight: 700;
          font-size: 14px;
          color: teal;
          border: 2px solid teal;
          width: fit-content;
          padding: 10px 22px;
          cursor: pointer;
        }
      }
      &__bot {
        display: flex;
        justify-content: space-between;
          &__blog {
            box-shadow: 8px 7px 24px 0px rgba(34, 60, 80, 0.2);
            max-width: 600px;
          }
      }
    }
    &__post {
        margin-top: 100px;
        margin-bottom: 120px;
        &-p1 {
            font-weight: 900;
            font-size: 46px;
        }
        &__data {
            width: 100%;
            margin: 48px 0;
            display: flex;
            flex-direction: column;
            &-input {
                font-weight: 400;
                font-size: 16px;
                color: #424551;
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 10px;
                input {
                    width: 100%;
                    outline: none;
                    padding: 18px 16px;
                    background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                textarea {
                   outline: none;
                   box-sizing: border-box;
                    padding: 13px 16px;
                    background: #FFFFFF;
                    border: 1px solid #D7DADD;
                    border-radius: 4px; 
                    resize: none;
                    height: 100px;
                    width: 100%;
                }
            }
            &-namail {
                width: 100%;
                gap: 2%;
                display: flex;
                margin-bottom: 24px;
            }
        }
        &-button {
            width: 189px;
            outline: none;
            border-radius: 4px;
            border: none;
            color: white;
            font-weight: 700;
            font-size: 16px;
            padding: 17px 0;
            display: flex;
            justify-content: center;
            background: teal;
        }
    }
    &__comments {
        margin-top: 120px;
    }
}

</style>