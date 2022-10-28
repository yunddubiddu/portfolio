<template>
  <header class="FEF9F5">
      <nav>
        <ul class="navigation w1200">
          <h1 class="logo" v-on:click="gotofirst"></h1>
          <li class="navigation-1 navSelect" v-on:click="gotointro">INTRO</li>
          <li class="navigation-2" v-on:click="gotowebClone">WEB CLONE</li>
          <li class="navigation-3" v-on:click="gotoproject">PROJECT</li>
          <li class="navigation-4" v-on:click="gotolast">CONTECT</li>
        </ul>
      </nav>
  </header>
  <body>
      <first id="first"></first>
      <intro id="intro"></intro>
      <webClone id="webClone"></webClone>
      <project id="project"></project>
      <last id="last"></last>
  </body>
</template>
<script>
  import $ from 'jquery';
  import first from './components/first-page.vue'
  import intro from './components/intro-page.vue'
  import webClone from './components/webClone-page.vue'
  import project from './components/project-page.vue'
  import last from './components/last-page.vue'

  export default {
  name: 'App',
  mounted (){
    $(".navigation-1").click(function(){
      $(".navigation>li").removeClass("navSelect");
      $(".navigation-1").addClass("navSelect");
    });
    $(".navigation-2").click(function(){
      $(".navigation>li").removeClass("navSelect");
      $(".navigation-2").addClass("navSelect");
    });
    $(".navigation-3").click(function(){
      $(".navigation>li").removeClass("navSelect");
      $(".navigation-3").addClass("navSelect");
    });
    $(".navigation-4").click(function(){
    $(".navigation>li").removeClass("navSelect");
    $(".navigation-4").addClass("navSelect");
    });
  },
  methods: {
    gotoTop(){
      window.scrollTo({top: 0, behavior: "smooth"});
    },
    gotofirst(){
      const first = document.getElementById('first')
      if (first){
        intro.scrollIntoView({behavior : 'smooth'});
      }
    },
    gotointro(){
      const intro = document.getElementById('intro')
      if (intro){
        intro.scrollIntoView({behavior : 'smooth'});
      }
    },
    gotowebClone(){
      const webClone = document.getElementById('webClone')
      if (webClone){
        webClone.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotoproject(){
      const project = document.getElementById('project')
      if (project){
        project.scrollIntoView({behavior : 'smooth'})
      }
    },
    gotolast(){
    const last = document.getElementById('last')
    if (last){
      last.scrollIntoView({behavior : 'smooth'})
    }
   },

  },
  components: {
    first,
    intro,
    webClone,
    project,
    last
  }
}
</script>
<style>
  /* font */
  @import url('https://fonts.googleapis.com/css2?family=Halant:wght@300;400;500;600;700&display=swap');
  /*BASIC*/
  *{
    font-family: 'Halant';
    color: #322C28;
    font-weight: 500;
  }
  .w1200{
    width: 1200px;
    margin: auto;
  }
  .titleWrap{
    margin-bottom: 50px;
  }
  .titleWrap>h3{
    font-size: 32px;
    font-weight: 600;
    line-height: 0;
  }
  .titleWrap>h2{
    display: inline-block;
    position: relative;
    font-size: 48px;
    font-weight: bolder;
  }
  .titleWrap>h2::after{
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 110%; height: 25%;
    background-color: #FEEAC7;
    opacity: .7;
    border-radius: 50px;
  }
  /*HEADER*/
  header{
    z-index: 99;
    width: 100%;
    padding-bottom: 68px;
  }
  nav{  
    z-index: 99;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #D9D9D9;
    background-color: #FEF9F5;
  }
  .navigation{
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .logo{
    cursor: pointer;
    width: 40px; height: 40px;
    background-image: url(../public/img/logo.png);
    background-size: 100% 100%;
    background-position: center center;
    border-radius: 50%;
    margin-right: 100px;
  }
  .navigation>li{
    cursor: pointer;
    padding: 0 25px;
    font-family: 'Halant';
    font-weight: 600;
    font-size: 18px;
    line-height: 48px;
    color: #322C28;
    opacity: .7;
    white-space: nowrap;
  }
  .navigation>.navSelect{
    position: relative;
    opacity: 1;
  }
  .navigation>.navSelect::after{
    content: "";
    position: absolute;
    left: 50%; top: 95%;
    transform: translate(-50%, -50%);
    width: 7px; height: 7px;
    background-color: #322C28;
    border-radius: 50%;
  }
@media only screen and (max-width: 1200px) {
  .w1200{
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .titleWrap>h3{
    font-size: 24px;
  }
  .titleWrap>h2{
    font-size: 32px;
    font-weight: bolder;
  }
  .navigation{
    padding: 10px 0;
  }
}
@media only screen and (max-width: 768px) {
  .navigation{
    justify-content: space-between;
    padding: 5px 30px;
  }
  .logo{
    width: 30px; height: 30px;
    margin-right: 0px;
  }
  .navigation>li{
    padding: 0 ;
    font-size: 16px;
  }
}
@media only screen and (max-width: 400px) {
  .navigation>li{
    font-size: 14px;
  }
  .navigation>.navSelect::after{
    left: 50%; top: 80%;
    width: 4px; height: 4px;
  }
}
</style>
