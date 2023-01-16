<template>
    <div class="header">
        <div class="topback">
             <div class="header__top container">
            <p>Available 24/7 at (405) 555-0128</p>
            <div class="header__top__p2">
                <p>Delivery & returns</p>
                <p>Track order</p>
                <p>Blog</p>
                <p>Contacts</p>
            </div>
            <div class="header__top__p3">
                <div class="header__top__p3__currence">
                    <img src="@/assets/icons/flagusa.png"/>
                    <select>
                        <option>Eng / $</option>
                        <option>Rus / $</option>
                    </select>
                </div>
                <div class="header__top__p3__profil">
                    <img src="@/assets/icons/profilicon.png"/>
                    <p>Log in / Register</p>
                </div>
            </div>
        </div>
        </div>
        <div class="header__middle container">
            <div class="header__middle__left">
                <router-link to="/"><img src="@/assets/icons/logoshop.png"/></router-link>
                <div class="header__middle__left-sort">
                    <p>Women</p>
                    <p>Men</p>
                    <p>Girls</p>
                    <p>Boys</p>
                    <p style="color: red">Sale</p>
                </div>
            </div>
            <div class="header__middle__right">
                <div class="header__middle__right__p1">
                    <input type="text" placeholder="Search for products..."/>
                    <img src="@/assets/icons/searchicon.png"/>
                </div>

                <div class="header__middle__right__p2">
                    <div class="favbas">
                         <img src="@/assets/icons/favouricon.png"/>
                        <p>2</p>
                    </div>
                    <div class="favbas">
                         <img src="@/assets/icons/basketicon.png"/>
                        <p class="favbas-style">4</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="botback">
            <div class="header__bot">
                <img src="@/assets/icons/leftslider.png"/>
                <p>Up to 70% Off. Shop our latest sale styles</p>
                <img src="@/assets/icons/rightslider.png"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.header {
    
    .topback{
       background: #1E212C;
    }
    .botback{
        background: #17696A;
    }
    &__top {
        padding: 11px 0 12px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        color: white;

        &__p2 {
            display: flex;
            gap: 32px;
        }
         &__p3 {
            display: flex;
            gap: 63px;
            align-items: center;
            &__currence {
                display: flex;
                gap: 12px;
                align-items: center;
                select {
                    border: none;
                    background: #1E212C;
                    color: white;
                }
            }
            &__profil {
                display: flex;
                gap: 10px;
                align-items: center;
            }
        }
    }
    &__middle {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        &__left {
            display: flex;
            align-items: center;
            gap: 60px;
            &-sort{
                display: flex;
                gap: 40px;
                font-weight: 700;
                font-size: 16px;
            }
        }
        &__right {
            display: flex;
            gap: 48px;
            &__p1 {
                color: #9A9CA5;
                display: flex;
                align-items: center;
                gap: 163px;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                padding: 11px 15px;
                input { 
                    border: none;
                    outline: none;

                }
            }
            &__p2 {
                display: flex;
                gap: 40px;
                .favbas{
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    &-style {
                        padding: 1px 8px;
                        border-radius: 4px;
                        background: #03CEA4;
                    }
                }
            }
        }
    }
    &__bot {
        display: flex;
        gap: 17px;
        justify-content: center;
        padding: 9px 0 9px;
        color: white;
        font-weight: 400;
        font-size: 12px;
        text-decoration: underline;
    }
}
</style>