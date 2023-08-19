<template>
  <div class="login text-center">
    <div class="login--card">
    </div>
    <div class="login--input">
      <h1>Welcome to Jammy</h1>
      <form class="login--form">
        <div class="login--form__item">
          <label for="">Username</label>
          <input class="form-input" type="text">
        </div>
        <div class="login--form__item">
          <label for="">Email</label>
          <input class="form-input" type="email">
        </div>
        <div class="login--form__item">
          <label for="">Password</label>
          <input class="form-input" type="password">
        </div>
        <div class="login--form__card">
          <button class="card---form__btn rounded-10">
            Create Account
          </button>
          <p style="margin: 5px 0!important;"> Already have an account? <a href="#" style="color: olivedrab">Log in</a></p>
          <p class="login--form__card--or">or</p>
          <div class="button__card d-flex justify-content-center align-item-center">
              <button class="d-flex align-item-center rounded-10">
                <img src="../assets/images/google.svg" alt="Google Image">
                Sing up with Google
              </button>
              <button class="d-flex align-item-center rounded-10">
                <img width="50px" src="../assets/images/gitHub.svg" alt="GitHub Image">
                Sing up with GitHub
              </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100vh;
  width: 100%;

  &--card {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/images/image.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 50%;
  }

  &--input {
    position: absolute;
    top: 0;
    right: 0;
    min-height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .login--form {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-self: center;
      width: 100%;

      &__item{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 70%;
        margin: 10px auto;

        .form-input{
          padding: 15px 8px;
          background: #EFF0F2;
          border: none;
          margin: 5px 0;
          width: 100%;
        }
      }
      &__card{
        width: 70%;
        margin: 0 auto;
        .card---form__btn{
          background: #007074;
          padding: 10px;
          margin: 10px 0;
          width: 50%;
          color: #ffffff;
          font-size: 26px;
          border: 1.4px solid #D2D2D2;
        }
        &--or{
          color: #043133;
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-transform: uppercase;
          margin: 15px 0;
        }
        .card---form__btn:hover{
          cursor: pointer;
        }
        .button__card{
          width: 70%;
          margin: 0 auto;
          button{
            margin: 0 10px;
            padding: 5px 10px;
            width: 100%;
            display: flex;
            justify-content: center;
            min-width: 200px;
            img{
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .login{
    &--card{
      display: none;
    }
    &--input{
      width: 100%;
      background-image: url("../assets/images/image.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      h1{
        color: #d0dcdc;
      }
      .login--form {
        color: white;

        &__card{
          .card---form__btn{
            font-size: 14px;
          }

          .card---form__btn:hover{
            cursor: pointer;
          }
          button{
            img{
              width: 22px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .button__card{
    display: flex;
    flex-direction: column;
    button{
      margin: 5px 0 !important;
    }
  }
}
@media (max-width: 1200px) {
  .login--form__card{

    .card---form__btn{
      font-size: 22px !important;
      width: 100% !important;
    }
  }
  .login--form__card{
    width: 70%;
    margin: auto;
    .button__card{
      display: flex;
    }
    button{
      justify-content: center;
      width: 100% !important;
      text-align: center !important;
      img{
        width: 30px;
        margin-right: 8px;
      }
    }
  }
}


</style>