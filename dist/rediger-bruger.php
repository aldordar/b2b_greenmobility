<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Rediger bruger
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section class="edit-user gm-form">
          <?php
            if ($_POST){
              $name = $_POST['name'];
              $email = $_POST['email'];
              $department = $_POST['department'];
              $payment = $_POST['payment-method'];
            }       
          ?>
          <form action="" name="edit-user" class="user-form" method="post" novalidate>
            <fieldset>
              <legend class="edit-user__legend">Ret oplysninger</legend>
              <div class="edit-user__form">
                <div class="form-group">
                  <label class="edit-user__label" for="name">Navn</label>
                  <input type="text" class="form-control" id="name" placeholder="Navn" value="<?= $name; ?>">
                </div>
                <div class="form-group">
                  <label class="edit-user__label" for="email">E-mail</label>
                  <input type="email" class="form-control" id="email" placeholder="name@example.com" value="<?= $email; ?>">
                </div>
                <div class="form-group">
                  <label class="edit-user__label" for="field">Initialer / Afdeling</label>
                  <input type="text" class="form-control" id="field" placeholder="Fx. Marketing" value="<?= $department; ?>">
                </div>
                <div class="form-group">
                  <label class="edit-user__label" for="paymentMethod" style="display: block;">Vælg betalingsmetodte</label>
                  <div class="custom-select">
                    <select id="paymentMethod">
                      <option value="<?=$payment?>"><?=$payment?></option>
                      <option value="Kreditkort">Kreditkort</option>
                      <option value="Faktura">Faktura</option>
                      <option value="Kreditkort DK">Kreditkort DK</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="submit-button d-flex justify-content-end">
                <button type="submit" class="edit-user__submit">Gem oplysninger</button>
              </div>
            </fieldset>
          </form>
        </section>
<?php include 'footer.php'?>