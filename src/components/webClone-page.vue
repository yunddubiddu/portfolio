<template>
<section class="w1200 webSec">
  <div class="titleWrap w1200">
      <h3>02.</h3>
      <h2>WEB CLONUING</h2>
  </div>
  <article class="webArt w1200">
    <ul>
      <li class="webActive-1 webActive">
        <span class="star-1"></span>
        <span class="star-2"></span>
        <span class="star-3"></span>
        <figure>
          <figcaption class="webImg-1"></figcaption>
        </figure>
        <h6>01.</h6>
        <h4>Fresh House</h4>
        <h5>싱그러운 집</h5>
        <p>싱그러운 집의 메인페이지와 서브페이지를 클로닝했습니다.</p>
        <span class="webColor-1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div>
          <p>제작기간</p>
          <span>2022-04-05 ~ 2022-04-14</span>
        </div>
        <div>
          <p>사용언어</p>
          <span>HTML , CSS , JS ,SQL, NODE JS</span>
        </div>
        <div>
          <p>웹클론</p>
          <span>웹클론</span>
        </div>
        <span class="webButton">
          <a href="http://yunddubiddu.dothome.co.kr/sub/shousegarden.html">
            <p>PAGE</p>
          </a>
          <a href="https://github.com/yunddubiddu/WEBCLONE">
            <p>GIT</p>
          </a>
        </span>
      </li>
      <li class="webActive-2">
        <span class="star-1"></span>
        <span class="star-2"></span>
        <span class="star-3"></span>
        <figure>
          <figcaption class="webImg-2"></figcaption>
        </figure>
        <h6>02.</h6>
        <h4>DCAF</h4>
        <h5>대전문화재단</h5>
        <p>대전문화재단의 메인페이지와 서브페이지를 클로닝했습니다.</p>
        <span class="webColor-2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div>
          <p>제작기간</p>
          <span>2022-04-22 ~ 2022-04-26</span>
        </div>
        <div>
          <p>사용언어</p>
          <span>HTML , CSS , JS ,SQL, NODE JS</span>
        </div>
        <div>
          <p>웹클론</p>
          <span>웹클론</span>
        </div>
        <span class="webButton">
          <a href="http://yunddubiddu.dothome.co.kr/sub/dcaf_main.html">
            <p>PAGE</p>
          </a>
          <a href="https://github.com/yunddubiddu/WEBCLONE">
            <p>GIT</p>
          </a>
        </span>
      </li>
      <li class="webActive-3">
        <span class="star-1"></span>
        <span class="star-2"></span>
        <span class="star-3"></span>
        <figure>
          <figcaption class="webImg-3"></figcaption>
        </figure>
        <h6>03.</h6>
        <h4>Pollexzone</h4>
        <h5>폴랙스존</h5>
        <p>폴랙스존의 메인페이지와 서브페이지를 클로닝했습니다.</p>
        <span class="webColor-3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div>
          <p>제작기간</p>
          <span>2022-04-05 ~ 2022-04-14</span>
        </div>
        <div>
          <p>사용언어</p>
          <span>HTML , CSS , JS ,SQL, NODE JS</span>
        </div>
        <div>
          <p>웹클론</p>
          <span>웹클론</span>
        </div>
        <span class="webButton">
          <a href="http://yunddubiddu.dothome.co.kr/sub/pollexMain.html">
            <p>PAGE</p>
          </a>
          <a href="https://github.com/yunddubiddu/WEBCLONE">
            <p>GIT</p>
          </a>
        </span>
      </li>
    </ul>
  </article>
</section>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'webClone-page',
  mounted(){
    $(document).ready(function(){
      $(".webActive-1").hover(function(){
        $(".webArt>ul>li").removeClass("webActive");
        $(".webActive-1").addClass("webActive");
      });
      $(".webActive-2").hover(function(){
        $(".webArt>ul>li").removeClass("webActive");
        $(".webActive-2").addClass("webActive");
      });
      $(".webActive-3").hover(function(){
        $(".webArt>ul>li").removeClass("webActive");
        $(".webActive-3").addClass("webActive");
      });
    });
  }
}
</script>
<style scoped>
  .webSec{
      padding: 20vh 0;
  }
  .webArt>ul{
    display: flex;
    justify-content: space-between;
  }
  .webArt>ul>li{
    position: relative;
    width: 30%;
    padding: 30px 40px;
    padding-top: 50px;
    box-sizing: border-box;
    border: 1px solid #322C28;
    border-radius: 185px 185px 0px 0px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    animation: spin 2s;
    animation-play-state: paused;
  }

  .webArt>ul>.webActive{
    background-color: rgba(254, 234, 199, .5);
    border: 3px solid #322C28;
    transition: 0.2s;
  } 
  .webActive::after{
    content: "";
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 93%; height: 96%;
    border-radius: 185px 185px 0px 0px;
    border: 1px solid #322C28;
  }
  .webActive>[class^="star-"]{display: block;}

  [class^="star-"]{
    display: none;
    position: absolute;
    width: 40px; height: 40px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .star-1{top:40%; left: -6%; background-image: url(../../public/img/star1.png);}
  .star-2{top: 25%; right: -2%; background-image: url(../../public/img/star1.png);}
  .star-3{top:75%; right: -2%; background-image: url(../../public/img/star2.png);}
  /**/
  .webArt>ul>li>figure{
    position: relative;
    width: 238px; height: 238px;
    border-radius: 50%;
    margin: auto;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  [class^="webImg-"]{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 150%; height: 150%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  /**/
  /**/
  .webImg-1{background-image: url(../../public/img/FH_1.png);}
  .webImg-2{background-image: url(../../public/img/DCAF_2.png);}
  .webImg-3{background-image: url(../../public/img/PZ_3.png);}
  /**/
  .webArt>ul>li>h6{
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  .webArt>ul>li>h4{
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .webArt>ul>li>h5{
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    margin-bottom: 20px;
  }
  .webArt>ul>li>p{
    margin-bottom: 30px;
  }
  /****/
  [class^="webColor-"] {
    display: flex;
    width: 150px; height: 10px;
    border-radius: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.2);
  }
  [class^="webColor-"]>span{
    display: block;
    height: 100%;
  }

  [class^="webColor-"]>span:nth-child(1){border-radius: 20px 0px 0px 20px;}
  [class^="webColor-"]>span:nth-child(4){border-radius: 0px 20px 20px 0px;}

  .webColor-1>span:nth-child(1){width: 25%; background-color: #D1E8DA;}
  .webColor-1>span:nth-child(2){width: 25%; background-color: #009A3E;}
  .webColor-1>span:nth-child(3){width: 25%; background-color: #222624;}
  .webColor-1>span:nth-child(4){width: 25%; background-color: #E05438;}

  .webColor-2>span:nth-child(1){width: 25%; background-color: #EE0F62;}
  .webColor-2>span:nth-child(2){width: 25%; background-color: #2F6BB1;}
  .webColor-2>span:nth-child(3){width: 25%; background-color: #FFC000;}
  .webColor-2>span:nth-child(4){width: 25%; background-color: #555555;}

  .webColor-3>span:nth-child(1){width: 25%; background-color: #00305B;}
  .webColor-3>span:nth-child(2){width: 25%; background-color: #06772D;}
  .webColor-3>span:nth-child(3){width: 25%; background-color: #D0E6C8;}
  .webColor-3>span:nth-child(4){width: 25%; background-color: #221E1E;}
  /****/
  .webArt>ul>li>div{
    display: flex;
    justify-content: space-between;
  }
  .webArt>ul>li>div>p{
    width: 25%;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .webArt>ul>li>div>span{
    width: 75%;
    font-size: 14px;
  }
  /****/
  .webButton{
    float: right;
    display: flex;
  }
  .webButton>a{
    z-index: 1;
    position: relative;
    cursor: pointer;
    width: 30px; height: 30px;
    border-radius: 50%;
    background-color: #322C28;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 75% 75%;
    background-image: url(../../public/img/git_ico.png);
    transition: all 5s;
  }
  .webButton>a:first-child{
    margin-right: 10px;
    background-image: url(../../public/img/home_ico.png);
  }
  .webButton>a>p{
    display: none;
    position: absolute;
    bottom: 60%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
  .webButton>a:hover>p{display: block;}
  @media only screen and (max-width: 1200px) {
  .webArt>ul>li>figure{
    width: 100%; height: auto;
    padding-top: 80%;
  }
  [class^="webImg-"]{
    width: 120%; height: 120%;
  }
  }
  @media only screen and (max-width: 768px) {}
</style>
