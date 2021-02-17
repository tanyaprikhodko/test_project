<template>
  <div class="main-container">
    <div class="ellipse">
      <div class="header">
        <h3>Добро пожаловать в игру</h3>
        <h2>
          Помоги<br />
          <p>Фармацевту</p>
        </h2>
      </div>
      <router-link :to="{ name: 'main' }" class="btn">Начать</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-container {
  background: linear-gradient(
      63.53deg,
      rgb(45, 133, 80, 0.35) 16.62%,
      rgb(94, 110, 194, 0.35) 83.38%
    ),
    url("../assets/images/pharmacist.jpg") no-repeat center/cover;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  .ellipse {
    width: 860px;
    height: 860px;
    margin-left: 110px;
    margin-top: -30px;
    border-radius: 50%;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);

    .header {
      margin: 0 auto;
      padding-top: 150px;
      padding-left: 30px;
      text-align: left;
      color: #fff;
      font-family: "Avenir Next Cyr";
      display: flex;
      align-items: center;

      h3 {
        position: absolute;
        width: 444px;
        height: 41px;
        left: 296px;
        top: 200px;
        font-size: 35px;
        line-height: 41px;
        letter-spacing: 0.02em;
        font-weight: 50;
      }
      h2 {
        position: absolute;
        width: 580px;
        height: 140px;
        left: 291px;
        top: 260px;
        font-size: 60px;
        letter-spacing: 0.02em;
        p {
          margin: 0;
          font-size: 90px;
        }
      }
    }
    .btn {
      position: absolute;
      left: 24.31%;
      right: 49.31%;
      top: 56.64%;
      bottom: 34.57%;

      width: 380px;
      max-height: 90px;

      padding-top: 20px;

      border-style: none;
      font-family: "Montserrat";
      color: #8e9ad5;
      font-weight: bold;
      font-size: 50px;
      line-height: 44px;
      border-radius: 100px;

      background: #fff;
      text-decoration: none;
    }
  }
}
</style>
