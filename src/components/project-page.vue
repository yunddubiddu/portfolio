<template>
  <section class="proSec">
    <div class="titleWrap w1200">
        <h3>03.</h3>
        <h2>PROJECT</h2>
    </div>
    <article class="proArt-1 section">
      <ul class="w1200">
        <li class="proLeft">
          <ul class="proLT">
            <li class="proLT1_phone"></li>
            <li class="proLT1_circle1">
              <span></span>
            </li>
            <li class="proLT1_color">
              <span class="proLT1_color-1"></span>
              <span class="proLT1_color-2"></span>
              <span class="proLT1_color-3"></span>
              <span class="proLT1_color-4"></span>
              <span class="proLT1_color-5"></span>
            </li>
          </ul>
          <ul class="proLB-1">
            <a href="https://seomunnight.herokuapp.com/"><span>PAGE</span></a>
            <a href="https://github.com/yunddubiddu/SeomunNight"><span>GIT</span></a>
          </ul>
        </li>
        <li class="proRight-1">
          <p>Seomun Night Market</p>
          <div>
            <span class="star"></span>
            <h3>01</h3>
            <h4>Seomun Night Market</h4>
            <h6>서문시장 야시장</h6>
            <p>기존페이지의 떨어지는 가독성과 구시대적인 디자인 같은 단점들을 보완하여 재설계했습니다.</p>
            <span class="protxt">제작기간<p>2022-05-30 ~2022-06-31</p></span>
            <span class="protxt">사용언어<p>HTML , CSS , JS , SQL, NODE JS</p></span>
            <span class="protxt">기타사항<p>홈페이지 리뉴얼</p></span>
          </div>
          <p>Seomun Night Market</p>
        </li>
      </ul>
    </article>
    <article class="proArt-2">
      <ul class="w1200 proUl2">
        <li class="proLeft">
          <ul class="proLT">
            <li class="proLT1_phone"></li>
            <li class="proLT1_circle2">
              <span></span>
            </li>
            <li class="proLT2_color">
              <span class="proLT2_color-1"></span>
              <span class="proLT2_color-2"></span>
              <span class="proLT2_color-3"></span>
              <span class="proLT2_color-4"></span>
              <span class="proLT2_color-5"></span>
            </li>
          </ul>
          <ul class="proLB-2">
            <a href="https://millennium-hilton.herokuapp.com/"><span>PAGE</span></a>
            <a href="https://github.com/yunddubiddu/Hilton"><span>GIT</span></a>
          </ul>
        </li>
        <li class="proRight-2">
          <p>Seomun Night Market</p>
          <div>
            <span class="star"></span>
            <h3>02</h3>
            <h4>Millennium Hilton Seoul</h4>
            <h6>밀레니엄 힐튼 서울</h6>
            <p>기존의 밀레니엄 힐튼의 웹 사이트는 답답한 레이아웃과 고유의 색을 살리지 못하는 등의 문제점이 발견되어 이 점들을 보완하였습니다.</p>
            <span class="protxt">제작기간<p>2022-05-30 ~2022-06-31</p></span>
            <span class="protxt">사용언어<p>HTML , CSS , JS , SQL, NODE JS</p></span>
            <span class="protxt">기타사항<p>홈페이지 리뉴얼</p></span>
          </div>
          <p>Seomun Night Market</p>
        </li>
      </ul>
    </article>
  </section>
</template>
<script>

export default {
  name: 'project-page',
}

</script>
<style scoped>
  .proSec{
    padding: 20vh 0;
  }
  [class^="proArt-"]{
    position: relative;
  }
  .proArt-1{animation: fadeInLeft 1s; animation-play-state: paused;}
  .proArt-2{animation: fadeInRight 1s; animation-play-state: paused;}
  
  [class^="proArt-"]::before{
    content: "";
    position: absolute;
    width: 70%; height: 100%;
  }
  .proArt-1::before{background-color: rgba(5, 57, 32, .1);}
  .proArt-2::before{background-color:rgba(190, 109, 84, .1); right:0;}

  [class^="proArt-"]>ul{
    display: flex;
  }
  .proLeft{
    width: 65%;
    padding: 120px 90px;
    box-sizing: border-box;
  }
  .proLT{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 50px;
  }
  .proLT>li:nth-child(1){
    display: none;
    width: 90px; height: 180px;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(../../public/img/iphone.png);
  }
  /**/
  .proLT>li:nth-child(2){
    position: relative;
    width: 440px; height: 440px;
    border-radius: 50%;
    margin-right: 50px;
  }
  .proLT1_circle1{background-color: rgba(5, 57, 32, .7);}
  .proLT1_circle2{background-color: rgba(190, 109, 84, .7);}

  .proLT>li:nth-child(2)>span{
    position: absolute;
    left: 60%; top: 65%;
    transform: translate(-50%, -50%);
    width: 180%; padding-top: 135%;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .proLT1_circle1>span{background-image: url(../../public/img/pro_1.png);}
  .proLT1_circle2>span{background-image: url(../../public/img/pro_2.png);}

  /**/
  .proLT>li:nth-child(3)>span{
    display: block;
    width: 22px; height: 22px;
    border-radius: 50%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    margin-top: 5px;
  }
  /*art1*/
  .proLT1_color-1{background-color: #FFFFFF;}
  .proLT1_color-2{background-color: #FFD664;}
  .proLT1_color-3{background-color: #FFBB00;}
  .proLT1_color-4{background-color: #ADABAB;}
  .proLT1_color-5{background-color: #2B2B2B;}
  /*art2*/
  .proLT2_color-1{background-color: #EEECE7;}
  .proLT2_color-2{background-color: #E6E3DB;}
  .proLT2_color-3{background-color: #2B2B2B;}
  .proLT2_color-4{background-color: #19344D;}
  .proLT2_color-5{background-color: #003F90;}

  /****/
  [class^="proLB-"]{
    display: flex;
    justify-content: center;
  }
  [class^="proLB-"]>a{
    cursor: pointer;
    position: relative;
    width: 35px; height: 35px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: #053920;
    background-size: 80% 80%;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .proLB-1>a{background-color: #053920;}
  .proLB-2>a{background-color: #BE6D54;}

  [class^="proLB-"]>a:nth-child(1){
    background-image: url(../../public/img/home_ico.png);
  }
  [class^="proLB-"]>a:nth-child(2){
    background-image: url(../../public/img/git_ico.png);
  }
  [class^="proLB-"]>a:hover>span{display: block;}
  [class^="proLB-"]>a>span{
    display: none;
    position: absolute;
    bottom: -100%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 14px;
  }
  .proLB-1>li>span{color: #053920;}
  .proLB-2>li>span{color: #BE6D54;}
  /****/
  [class^="proRight-"]{
    position: relative;
    display: flex;
    width: 35%;
    background-color: #053920;
    padding: 40px;
    box-sizing: border-box;
  }
  .proRight-1{background-color: #053920;}
  .proRight-2{background-color: #BE6D54;}

  [class^="proRight-"]>p{
    position: absolute;
    display: inline-block;
    color: #fff;
    transform: rotate(90deg);
  }
  [class^="proRight-"]>p:nth-child(1){left: -12%; top: 45%;}
  [class^="proRight-"]>p:nth-child(3){right: -12%; top: 45%;}

  [class^="proRight-"]>div{
    position: relative;
    background: rgba(254, 249, 245, 0.95);
    border-radius: 200px 200px 0px 0px;
    padding: 60px 30px;
    box-sizing: border-box;
    text-align: center;
  }
  [class^="proRight-"]>div::after{
    content: "";
    position: absolute;
    left: 50%; top:50%;
    width: 90%; height: 95%;
    border: 1px solid #053920;
    border-radius: 200px 200px 0px 0px;
    transform: translate(-50%, -50%);
  }
  .proRight-1>div::after{border: 1px solid #053920;}
  .proRight-2>div::after{border: 1px solid #BE6D54;}

  .star{
    position: relative;
    display: block;
    width: 50px; height: 50px;
    margin: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .proRight-1 .star{background-image: url(../../public/img/star3.png);}
  .proRight-2 .star{background-image: url(../../public/img/star4.png)}

  .star::before{
  content: "";
  position: absolute;
  left: -150%; top: 50%;
  width: 150%; height: 0%;
  border: 1px dashed #053920;
  }
  .proRight-1 .star::before{border: 1px dashed #053920;}
  .proRight-2 .star::before{border: 1px dashed #BE6D54;}

  .star::after{
    content: "";
    position: absolute;
    right: -150%; top: 50%;
    width: 150%;
    border: 1px dashed #053920;
  }
  .proRight-1 .star::after{border: 1px dashed #053920;}
  .proRight-2 .star::after{border: 1px dashed #BE6D54;}

  [class^="proRight-"]>div>h3{
    font-size: 40px;
    font-weight: 600;
    color: transparent;
  }
  .proRight-1>div>h3 {-webkit-text-stroke: 1px #053920;}
  .proRight-2>div>h3 {-webkit-text-stroke: 1px#BE6D54;}

  [class^="proRight-"]>div>h4{
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 5px;
  }
  [class^="proRight-"]>div>h6{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  [class^="proRight-"]>div>p{
    margin-bottom: 40px;
  }
  .protxt{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .protxt>p{
    font-weight: 500;
  }
  .proUl2{
    flex-direction: row-reverse;
  }
</style>
