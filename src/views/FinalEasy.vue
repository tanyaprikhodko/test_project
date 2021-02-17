<template>
  <div class="container">
    <div class="main">
      <router-link to="/cover" class="home">
        <img src="../assets/images/home2.svg"
      /></router-link>
      <div class="result">
        <div>
          <h1>{{ getPersents.first }}%</h1>
          <p>Препарат 1</p>
        </div>
        <div>
          <h1>{{ getPersents.second }}%</h1>
          <p>Препарат 2</p>
        </div>
        <div>
          <h1>{{ getPersents.third }}%</h1>
          <p>Препарат 3</p>
        </div>
      </div>
      <div class="text-res">
        <h3>Ваш результат:</h3>
        <h2>«Что я здесь делаю?»</h2>
        <p>
          Это тестовое задание, так что не будем углубляться в глубины проблем
          фармацевтов.
        </p>
      </div>
      <router-link to="/main" class="btn">Попробовать еще</router-link>
    </div>
    <div class="img">
      <img src="../assets/images/final.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts: {},
      amount: 0,
    };
  },
  created() {
    this.counts = this.$store.state.Counter.counts;
    this.amount = this.$store.state.Counter.people.length;
  },
  computed: {
    getPersents() {
      const { sad, happy, heart } = this.counts;
      const first = (sad * 100) / this.amount;
      const second = (happy * 100) / this.amount;
      const third = (heart * 100) / this.amount;
      return { first, second, third };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 710px;
    .home {
      margin-top: 70px;
      margin-left: 50px;
      background: linear-gradient(#2d8550 0%, #5e6ec2 100%);
      padding: 17px 0;
      width: 80px;
      max-height: 80px;
      border-radius: 100px;
    }
    .result {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0 auto;
      width: 580px;
      border-bottom: solid 2px #d9d9d9;
      h1 {
        font-weight: 100;
        font-size: 48px;
        text-align: center;
      }
      p {
        font-size: 20px;
        text-align: center;
        margin-bottom: 50px;
      }
    }
    .text-res {
      width: 580px;
      height: 220px;
      color: #8e9ad5;
      margin: 0 auto;
      text-align: left;
      //margin-top: -20px;

      h3 {
        font-size: 40px;
        line-height: 41px;
        letter-spacing: 0.02em;
        font-weight: 700;
        margin: 0;
      }
      h2 {
        font-size: 52px;
        letter-spacing: 0.02em;
        margin-top: 0;
        margin-bottom: 20px;
        line-height: 44.1px;
        font-weight: 700;
      }
      p {
        font-size: 24px;
        letter-spacing: 0.02em;
        color: #424242;
        margin: 0;
      }
    }
    .btn {
      margin-left: 130px;
      margin-bottom: 84px;
      background: linear-gradient(#d9d9d9 0%, #a1a1a1 100%);
      width: 270px;
      height: 60px;
      border-radius: 100px;
      padding-top: 20px;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      line-height: 29px;
      text-decoration: none;
    }
  }
}
</style>
