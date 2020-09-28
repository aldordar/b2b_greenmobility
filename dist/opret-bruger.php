<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Opret bruger
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section class="create-user gm-form">
          <form action="" name="create-user" class="user-form" method="post" novalidate>
            <fieldset>
              <legend class="create-user__legend">Tilføj bruger</legend>
              <div class="create-user__form">
                <div class="form-group">
                  <label class="create-user__label" for="name">Navn</label>
                  <input type="text" class="form-control" id="name" placeholder="Navn">
                </div>
                <div class="form-group">
                  <label class="create-user__label" for="email">E-mail</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com">
                </div>
                <div class="form-group">
                  <label class="create-user__label" for="field">Initialer / Afdeling</label>
                  <input type="text" class="form-control" id="field" placeholder="Fx. Marketing">
                </div>
                <div class="form-group">
                  <label class="create-user__label" for="paymentMethod" style="display: block;">Vælg betalingsmetodte</label>
                  <div class="custom-select">
                    <select id="paymentMethod">
                      <option value="Kreditkort">Kreditkort</option>
                      <option value="Kreditkort">Kreditkort</option>
                      <option value="Faktura">Faktura</option>
                      <option value="Kreditkort DK">Kreditkort DK</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="submit-button d-flex">
                <button type="submit" class="create-user__submit">Tilføj bruger</button>
              </div>
            </fieldset>
          </form>
        </section>
    </form>
<?php include 'footer.php'?>