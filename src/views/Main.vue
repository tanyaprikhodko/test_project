<template>
  <div class="container">
    <div class="sidebar">
      <div class="nav">
        <router-link class="home" to="/cover"
          ><img src="../assets/images/home.svg"
        /></router-link>
        <button class="reload" @click="reload">
          <img src="../assets/images/reload.svg" />
        </button>
      </div>
      <div class="params">
        <h2>Параметри:</h2>
        <div class="counters">
          <div class="counter">
            <img src="../assets/images/sad.svg" />
            <p>{{ getCountInfo.sad }}</p>
          </div>
          <div class="counter">
            <img src="../assets/images/happy.svg" />
            <p>{{ getCountInfo.happy }}</p>
          </div>
          <div class="counter grid-second-line">
            <img src="../assets/images/heart.svg" />
            <p>{{ getCountInfo.heart }}</p>
          </div>
        </div>
      </div>
      <div class="queue">
        <h2>Осталось в очереди:</h2>
        <h1>
          <span>{{ counter }}</span
          >/{{ getPersoneInfo.length }}
        </h1>
      </div>
    </div>
    <div class="main">
      <div class="img" :class="classImg">
        <img :src="`${getPersoneInfo[counter]}`" />
      </div>
      <div class="buttons">
        <button
          class="btn-1 btn"
          @click="[setCounter('sad'), setClassName('sad')]"
        >
          Препарат 1
        </button>
        <button
          class="btn-2 btn"
          @click="[setCounter('happy'), setClassName('happy')]"
        >
          Препарат 2
        </button>
        <button
          class="btn-3 btn"
          @click="[setCounter('heart'), setClassName('heart')]"
        >
          Препарат 3
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classImg: "",
      counter: 0,
    };
  },

  computed: {
    getPersoneInfo() {
      return this.$store.state.Counter.people;
    },
    getCountInfo() {
      return this.$store.state.Counter.counts;
    },
  },
  methods: {
    setCounter(text) {
      this.$store.dispatch("setCounter", text);
      if (this.counter < this.getPersoneInfo.length - 1) {
        this.counter = this.counter + 1;
      } else {
        this.$router.push({ path: "/final-easy" });
      }
    },
    reload() {
      window.location.reload();
    },
    setClassName(name) {
      this.classImg = name;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  .sidebar {
    z-index: 1;
    width: 470px;
    height: 1024px;
    background: linear-gradient(63.53deg, #2d8550 16.62%, #5e6ec2 83.38%);
    opacity: 0.7;
    .nav {
      width: 230px;
      display: flex;
      flex-direction: row;
      align-items: left;
      justify-content: space-around;
      margin-top: 70px;
      margin-left: 50px;
      .home {
        background: #fff;
        padding-top: 15px;
        width: 70px;
        max-height: 70px;
        border-radius: 100px;
      }
      .reload {
        background: #fff;
        width: 70px;
        height: 70px;
        border-radius: 100px;
        border-style: none;
      }
    }

    .params {
      h2 {
        text-align: left;
        margin-top: 312px;
        margin-left: 40px;
        font-family: "Avenir Next Cyr";
        font-size: 50px;
        line-height: 44px;
        color: #fff;
      }
      .counters {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        margin-left: 20px;
        .counter {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 10px;
          width: 180px;
          height: 70px;
          background: #fff;
          border-radius: 100px;
          p {
            font-size: 50px;
            font-weight: 700;
            margin: 0;
          }
        }
        .grid-second-line {
          margin-left: 119px;
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }
    .queue {
      margin-top: 150px;
      color: #fff;
      h2 {
        font-family: "Avenir Next Cyr";
        font-weight: 100;
        font-size: 45px;
        text-align: center;
        margin: 0;
      }
      h1 {
        font-size: 50px;
        margin: 0;
        font-weight: 300;
        span {
          font-weight: 700;
        }
      }
    }
  }

  .main {
    margin: 20px auto;
    color: black;
    .img {
      margin-top: 130px;
      margin-bottom: 50px;
      animation-duration: 2s;
    }
    .sad {
      position: relative;
      animation-name: sad;
      animation-duration: 0.5s;
    }
    .happy {
      position: relative;
      animation-name: happy;
      animation-duration: 0.5s;
    }
    .heart {
      position: relative;
      animation-name: heart;
      animation-duration: 0.5s;
    }
    .buttons {
      .btn {
        width: 230px;
        height: 80px;
        border-radius: 100px;
        border-style: none;
        color: #fff;
        font-family: "Avenir Next Cyr";
        font-size: 35px;
        margin: 0 10px;
      }
      .btn-1 {
        background: linear-gradient(63.53deg, #8049c7 0%, #ca57fd 100%);
      }
      .btn-2 {
        background: linear-gradient(63.53deg, #169ae4 0%, #0cc4fa 100%);
      }
      .btn-3 {
        background: linear-gradient(
          63.53deg,
          #ffd748 0%,
          rgba(195, 199, 11, 0.96) 99.98%,
          #cac6ab 99.99%,
          #d3e9e1 100%
        );
      }
    }
  }
  @keyframes sad {
    0% {
      left: -300px;
      transform: rotate(-20deg);
    }
    25% {
      left: -400px;
    }
    50% {
      left: -500px;
      z-index: -2;
    }
    75% {
      left: -600px;
      z-index: -2;
    }
    100% {
      transform: rotate(-30deg);
      left: -700px;
      z-index: -2;
      visibility: hidden;
    }
  }
  @keyframes happy {
    0% {
      top: -300px;
      transform: rotate(-20deg);
    }
    25% {
      top: -400px;
    }
    50% {
      top: -500px;
      z-index: -2;
    }
    75% {
      top: -600px;
      z-index: -2;
    }
    100% {
      transform: rotate(-30deg);
      top: -700px;
      z-index: -2;
      visibility: hidden;
    }
  }
  @keyframes heart {
    0% {
      left: 300px;
      transform: rotate(20deg);
    }
    25% {
      left: 400px;
    }
    50% {
      left: 500px;
      z-index: -2;
    }
    75% {
      left: 600px;
      z-index: -2;
    }
    100% {
      transform: rotate(30deg);
      left: 700px;
      z-index: -2;
      visibility: hidden;
    }
  }
}
</style>
