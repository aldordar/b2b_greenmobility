<?php include 'header.php'?>
  <div class="login-page">
    <div class="elements d-flex">
      <div class="elements__title">
        <div class="elements__title--logo"></div>
        <h1 class="elements__title--title">Din nye 
          <span>Grønne</span> erhvervsbil.</h1>
      </div>
      <div class="elements__form gm-form">
        <form action="forside.php" class="login-form" method="post" novalidate>
          <fieldset>
            <legend class="">Bruger login</legend>
              <div class="form-group">
                <label class="login-label" for="login-email">E-mail</label>
                <input type="email" class="form-control" id="login-email" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label class="login-label" for="lg-password">Password</label>
                <input type="password" class="form-control" id="lg-password" placeholder="*******">
              </div>
            <button type="submit" class="login-submit">Log ind</button>
            <a href="" class="forgot-pw">Glemt dit kodeord?</a>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
<?php include 'footer.php'?>