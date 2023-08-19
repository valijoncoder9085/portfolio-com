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
          <button class="card---form__btn">
            Create Account
          </button>
          <p> Already have an account? <a href="#" style="color: olivedrab">Log in</a></p>
          <p>or</p>
          <div class="d-flex justify-space-between w-60 align-item-center">
            <div>
              <button class="d-flex align-item-center">
                <img src="../assets/images/google.svg" alt="Google Image">
                Sing up with Google
              </button>
            </div>
            <div>
              <button class="d-flex align-item-center">
                <img width="50px" src="../assets/images/gitHub.svg" alt="GitHub Image">
                Sing up with GitHub
              </button>
            </div>
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
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;

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
        .card---form__btn{
          background: #007074;
          padding: 10px;
          margin: 10px 0;
          color: #ffffff;
          font-size: 26px;
          border: 1.4px solid #D2D2D2;
        }
        .card---form__btn:hover{
          cursor: pointer;
        }
      }
    }

  }
}
</style>