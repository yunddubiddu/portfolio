<template>
<section class="w1200 introSec">
  <div class="titleWrap w1200">
      <h3>01.</h3>
      <h2>INTRO</h2>
  </div>
  <article class="introArt w1200">
    <ul>
      <li class="introLeft">
        <figure>
          <figcaption></figcaption>
        </figure>
        <h5>JEOUNG YUN SU</h5>
        <div class="introLT">
          <p>저는 </p>
          <div class="swiperWrap">
            <swiper
              :direction="'vertical'"
              :autoplay="{
                delay: 1500,
                disableOnInteraction: false,
              }"
              :loop="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide><div>성장 <span>하는</span></div></swiper-slide>
              <swiper-slide><div>꿈을 <span>꾸는</span></div></swiper-slide>
              <swiper-slide><div>노력 <span>하는</span></div></swiper-slide>
            </swiper>
          </div>
          <p> 프론트앤드 개발자 정윤수입니다.</p>
        </div>
        <span></span>
        <p class="introLB">
          프론트엔드를 꿈꾸고 있는 주니어 개발자입니다.
          백앤드에도 관심을 가지는 등, 분야를 가리지 않고
          적극적으로 관심을 넓혀나가고 있습니다. 
        </p>
      </li>
      <li class="introRight">
        <div class="introRT">
          <ul>
            <li>
              <p>생년월일</p>
              <span>2001.11.18</span>
            </li>
            <li>
              <p>이메일</p>
              <span>hiyoonsu33@gmail.com</span>
            </li>
            <li>
              <p>홈페이지</p>
              <span>https://github.com/<br>
              yunddubiddu/seomun</span>
            </li>
          </ul>
          <ul>
            <li>
              <p>학력</p>
              <span>
                <div>별가람 중학교</div>
                <div>MAZ INTERNATIONAL SCHOOL</div>
                <div>INTI INTERTIONAL COLLEGE(중퇴)</div>
                <div>그린컴퓨터 아카데미</div>
              </span>
            </li>
          </ul>
        </div>
        <div class="introRB">
          <h6>보유스킬</h6>
            <ul class="introRBpercent">
              <li>
                <svg class="circleInner">
                  <circle class="meter-1" cx="56" cy="56" r="50"/>
                </svg>
                <h6>HTML<br>CSS</h6>
                <p>93%</p>
              </li>
              <li>
                <svg class="circleInner">
                  <circle class="meter-2" cx="56" cy="56" r="50"/>
                </svg>
                  <h6>JAVA SCRIPT</h6>
                  <p>85%</p>
              </li>
              <li>
                <svg class="circleInner">
                  <circle class="meter-3" cx="56" cy="56" r="50"/>
                </svg>
                  <h6>JQUERRY</h6>
                  <p>85%</p>
              </li>
              <li>
                <svg class="circleInner">
                  <circle class="meter-4" cx="56" cy="56" r="50"/>
                </svg>
                  <h6>NODE JS</h6>
                  <p>87%</p>
              </li>
              <li>
                <svg class="circleInner">
                  <circle class="meter-5" cx="56" cy="56" r="50"/>
                </svg>
                  <h6>SQL</h6>
                  <p>88%</p>
              </li>
              <li>
                <svg class="circleInner">
                  <circle class="meter-6" cx="56" cy="56" r="50"/>
                </svg>
                  <h6>VUE JS</h6>
                  <p>80%</p>
              </li>
            </ul>
          <ul class="introRBpercentM">
            <li>
              <div class="barWrap">
                <div class="bartxt">
                  <p>HTML CSS</p>
                  <p>93%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
              <div class="barWrap">
                <div class="bartxt">
                  <p>JAVA SCRIPT</p>
                  <p>85%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
            </li>
            <li>
              <div class="barWrap">
                <div class="bartxt">
                  <p>JQUERRY</p>
                  <p>85%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
              <div class="barWrap">
                <div class="bartxt">
                  <p>NODE JS</p>
                  <p>87%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
            </li>
            <li>
              <div class="barWrap">
                <div class="bartxt">
                  <p>SQL</p>
                  <p>88%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
              <div class="barWrap">
                <div class="bartxt">
                  <p>VUE JS</p>
                  <p>93%</p>
                </div>
                <div class="bar"><span></span></div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </article>
</section>
</template>
<!-- SCRIPT -->
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "../../public/css/style.css";

import { Autoplay} from "swiper";
export default {
  name: 'intro-page',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
<!-- STYLE -->
<style scoped>
  .introSec{
      padding: 20vh 0;
  }
  /*****/
  .introArt>ul{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  /*****/
  .introLeft{
    width: 35%;
  }
  .introLeft>figure{
    position: relative;
    width: 250px; height: 250px;
    margin-bottom: 15px;
    background-color: rgba(254, 234, 199, .65);
    border-radius: 50%;

  }
  .introLeft>figure>figcaption{
    position: absolute;
    width: 100%; height: 100%;
    border-radius: 50%;
    background-image: url(../../public/img/me.png);
    background-size: 85% 110%;
    background-position:  50% 5px;
    background-repeat: no-repeat;
  }
  /**/
  .introLeft>h5{
    -webkit-text-stroke: 1px #322C28;
    font-size: 42px;
    font-weight: 900;
    color: transparent;
    margin-bottom: 4px;
  }
  .introLT{
    display: flex;
    align-items: flex-end;
  }
  .introLT>p{
    font-weight: 500;
    font-size: 16px;
  }
  .swiperWrap{
    position: relative;
    width: 75px; height: 25.5px;
    padding: 0 5px;
  }
  .swiperWrap::before{
    content: "";
    position: absolute;
    top: -10px; left: 15px;
    width: 5px; height: 5px;
    background-color: #322C28;
    border-radius: 50%;
  }
  .swiperWrap::after{
    content: "";
    position: absolute;
    top: -10px; left: 33px;
    width: 5px; height: 5px;
    background-color: #322C28;
    border-radius: 50%;
  }
  .swiper-slide>div{
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-weight: 800;
    white-space: nowrap;
    background-color: #FEEAC7;
    border-radius: 20px;
  }
  .swiper-slide>div>span{
    font-size: 16px;
    font-weight: 500;
  }
  /****/
  .introLeft>span{
  display: block;
  width: 1px; height: 134px;
  background-color: #322C28;
  opacity: .7;
  margin: 20px 0;
  }
  /****/
  .introRight{
    width: 59%;
  }
  .introRT{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .introRT>ul{
    width: 50%;
  }
  .introRT>ul>li{
    display: flex;
    margin-bottom: 15px;
  }
  .introRT>ul>li>p{
    width: 25%;
    font-size: 18px;
    font-weight: 600;
  }
  .introRT>ul>li>span{
    width: 70%;
  }
  .introRT>ul>li>span>div{
    margin-bottom: 4px;
  }
  /**/
  .introRB{
    width: 100%; height: 30%;
  }
  .introRB>h6{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .introRBpercentWrap{
    display: flex;
    justify-content: space-between;
  }
  .introRBpercent{
    display: flex;
    justify-content: space-between;
  }
  .introRBpercent>li{
    position: relative;
    width: 90px; height: 90px;
    border: 10px solid rgba(190, 109, 84, .4);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    }
  .introRBpercent>li>h6{
    font-size: 20px;
    font-weight: 500;
    line-height: 15px;
    text-align: center;
    margin: auto;
  }
  .introRBpercent>li>p{
    position: absolute;
    left: 50%; bottom: -5px;
    transform: translate(-50%, -50%);
    font-size: 16px;
    opacity: .7;
  }
/*****퍼센테이지 애니메이션*****/
    .circleInner{
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
      width: 125%; height: 125%;
    }
    [class^="meter-"] {
      fill: none;
      stroke-width: 10px;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      stroke: rgba(190, 109, 84, 1);
    }
    .meter-1{
      stroke-dasharray: 360;
      stroke-dashoffset: 93;
      animation: progress-1 1.5s ease-out;
    }
    .meter-2{
      stroke-dasharray: 360;
      stroke-dashoffset: 85;
      animation: progress-2 1.5s ease-out;
    }
    .meter-3{
      stroke-dasharray: 360;
      stroke-dashoffset: 85;
      animation: progress-3 1.5s ease-out;
    }
    .meter-4{
      stroke-dasharray: 360;
      stroke-dashoffset: 87;
      animation: progress-4 1.5s ease-out;
    }
    .meter-5{
      stroke-dasharray: 360;
      stroke-dashoffset: 88;
      animation: progress-5 1.5s ease-out;
    }
    .meter-6{
      stroke-dasharray: 360;
      stroke-dashoffset: 80;
      animation: progress-6 1.5s ease-out;
    }
    
    .introRBpercentM{display: none;}
    .introRBpercentM>li{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .barWrap{
      width: calc(50% - 10px);
    }
    .bartxt{
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
      
    }
    .bartxt>p{
      font-size: 14px;
      font-weight: 600;
    }
    .bar{
      position: relative;
      width: 100%; height: 30px;
      background-color: rgba(190, 109, 84, 0.4);
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 20px;
    }
    .bar>span{
      position: absolute; left: 0;
      height: 100%;
      background-color: #BE6D54;
      border-radius: 20px;
    }
    .introRBpercentM>li:nth-child(1)>div:nth-child(1)>div>span{width: 93%;}
    .introRBpercentM>li:nth-child(1)>div:nth-child(2)>div>span{width: 85%;}
    .introRBpercentM>li:nth-child(2)>div:nth-child(1)>div>span{width: 85%;}
    .introRBpercentM>li:nth-child(2)>div:nth-child(2)>div>span{width: 87%;}
    .introRBpercentM>li:nth-child(3)>div:nth-child(1)>div>span{width: 88%;}
    .introRBpercentM>li:nth-child(3)>div:nth-child(2)>div>span{width: 80%;}


@media only screen and (max-width: 1200px) {
  .introSec{
    padding: 15vh 0;
  }
  .introArt>ul{
  display: flex;
  flex-direction: column;
  }
  .introLeft{
  width: 100%;
  margin-bottom: 100px;
  }
  .introRight{
  width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  /*****/
  .introArt>ul{
    align-items: center;
  }
  /*****/
  .introLeft{
    margin: auto;
  }
  .introLeft>figure{
    margin: auto;
    margin-bottom: 40px;
  }
  /**/
  .introLeft>h5{
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
  }
  .introLeft>span{
    display: none;
  }
  .introLT{
    justify-content: center;
    margin-bottom: 30px;
  }
  .introLT>p{
    text-align: center;
    white-space: nowrap;
  }
  .introLB{
    text-align: center;
    margin-bottom: 30px;
    padding: 0 20%;
  }
  /****/
  .introRight{
    width: 100%;
  }
  .introRT{
    width: 100%;
    flex-direction: column;
    margin-bottom: 25px;
    text-align: center;
  }
  .introRT>ul{
    width: 100%;
  }
  .introRT>ul>li{
    flex-direction: column;
    text-align: center;
  }
  .introRT>ul>li>p{
    width: 100%;
  }
  .introRT>ul>li>span{
    width: 100%;
  }
  /**/
  .introRB>h6{
    text-align: center;
  }
  .introRBpercent{
    display: none;
  }
  .introRBpercentM{
    display: block;
  }
}
</style>


