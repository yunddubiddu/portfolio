<template>
    <section class="w1200 contectSec">
        <article class="w1200">
            <h5>코딩의 꽃을 피우겠습니다.</h5>
            <div class="cicleWrap">
                <span class="cicle3"></span>
            </div>
            <h6>감사합니다.</h6>
            <h6>프론트엔드 개발자 <span>정윤수</span>입니다.</h6>
            <ul class="infoWrap">
                <li>
                    <h6>JEOUNG YUN SU</h6>
                    <p>2001.11.18</p>
                    <p>hiyoonsu33@gmail.com</p>
                </li>
                <span></span>
                <li>
                    <h6>꽃이 피다.</h6>
                    <span></span>
                    <h6>코딩의 <span>花</span>을 피우다</h6>
                </li>
            </ul>
        </article>
    </section>
</template>
<script>
export default {
   name: 'last-page',
}
</script>
<style scoped>
    .contectSec{
        padding: 20vh 0;
        animation: up 1.5s ease-out;
        animation-play-state: paused;
    }
/*****/
    .contectSec>article{
        text-align: center;
    }
    .contectSec>article>h5{
        font-size: 24px;
        font-weight: 600;
    }
    .cicleWrap{
        width: 100%;
        display: flex;
        justify-content: center;
        animation: up 3s ease-out;
        animation-play-state: paused;
    }
    .cicle3{
        display: block;
        position: relative;
        width: 300px; height: 300px;
        border-radius: 50%;
        margin: 50px 0;
        background-color: #053920;
        
    }
    .cicle3::before{
        content: "";
        z-index: -1;
        position: absolute;
        left: -50%;
        width: 300px; height: 300px;
        border-radius: 50%;
        background-color: #FEEAC7;
    }
    .cicle3::after{
        content: "";
        position: absolute;
        right: -50%;
        width: 300px; height: 300px;
        border-radius: 50%;
        background-color: #BE6D54;;
    }
    /****/
    .contectSec>article>h6{
        font-size: 16px;
    }
    .contectSec>article>h6>span{
        font-weight: 600;
    }
    .infoWrap{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 120px;
    }
    .infoWrap>span{
        position: absolute;
        bottom: 5px; left: 50%;
        transform: translate(-50%, -50%);
        width: 70%; height: 1px;
        background-color: rgba(50, 44, 40, 0.7);
        animation: line 2.8s ease-out;
        animation-play-state: paused;
    }
    .infoWrap>li:nth-child(1){
        text-align: left;
    }
    .infoWrap>li:nth-child(1)>h6{
        font-weight: 800;
    }
    .infoWrap>li:nth-child(3){
        text-align: right;
    }
    .infoWrap>li:nth-child(3)>h6>span{
        font-weight: 800;
    }
    @media only screen and (max-width: 1200px) {
        .contectSec{
        padding: 15vh 0;
        }
        .infoWrap>span{
        width: 50%; height: 1px;
        }
    }
    @media only screen and (max-width: 768px) {
        .cicle3{
        width: 200px; height: 200px;
        }
        .cicle3::before{
            width: 200px; height: 200px;
        }
        .cicle3::after{
            width: 200px; height: 200px;
        }
        .infoWrap{
            position: relative;
            justify-content: center;
        }
        .infoWrap::after{
            content: "";
            position: absolute;
            bottom: 120%;
            width: 1px; height: 90px;
            background-color: #322C28;
        }
        .infoWrap>span{
            display: none;
        }
        .infoWrap>li:nth-child(3){
            display: none;
        }
        .infoWrap>li:nth-child(1){
            text-align: center;
        }
    }
    @media only screen and (max-width:500px) {
        .cicle3{
        width: 150px; height: 150px;
        }
        .cicle3::before{
            width: 150px; height: 150px;
        }
        .cicle3::after{
            width: 150px; height: 150px;
        }
        
    }
</style>