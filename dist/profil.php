<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Profil
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section id="profile" class="profile update-user">
          <div class="popup" id="slet-admin">
            <div class="popup__content">
              <div class="popup__content--box"><span>Ønsker du at fortætte?</span>
                <hr>
                  <div class="d-flex justify-content-between">
                    <a href="#profile"><button class="popup__content--box-cancel">Annuller</button></a>
                    <button class="popup__content--box-delete">Slet admin</button>
                  </div>
                </div>
            </div>
          </div>

          <div class="row tables">
            <div class="col-12 col-sm-12 col-md-6 col-lg-5 single-profile-table">
              <div class="profile__title">Profil informationer</div>
              <form action="" name="update-user" class="user-form profile-form" method="post" novalidate>
                <fieldset>
                  <div class="update-user__form">
                    <div class="form-group">
                      <label class="update-user__label" for="firma">Firma</label>
                      <input type="text" class="form-control" id="firma" placeholder="Firma" value="HTML24">
                    </div>
                    <div class="form-group">
                      <label class="update-user__label" for="u-cpr">CPR Nr.</label>
                      <input type="number" class="form-control" id="u-cpr" placeholder="2222222" value="2023134">
                    </div>
                    <div class="form-group">
                      <label class="update-user__label" for="u-address">CVR Nr.</label>
                      <input type="text" class="form-control" id="u-address" placeholder="Jagtvej 107E, 2200 København N" value="Strandlodsvej 3. 4, 2300, København K">
                    </div>
                    <div class="form-group">
                      <label class="update-user__label" for="u-phone">Telefon</label>
                      <input type="tel" class="form-control" id="u-phone" placeholder="+45 00 00 00 00" value="+45 32 23 23 89">
                    </div>
                    <div class="form-group">
                      <label class="update-user__label" for="u-email">E-mail</label>
                      <input type="email" class="form-control" id="u-email" placeholder="name@example.com" value="adm@html24.net">
                    </div>
                  </div>
                  <div class="submit-button d-flex">
                    <button type="submit" class="update-user__submit">Gem oplysninger</button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-7 single-profile-table">
              <div class="profile__title">Administratorer</div>
              <div class="table-container-scroller-profile">
                <table class="profile__table">
                  <colgroup>
                      <col span="1" style="width: 40%;">
                      <col span="1" style="width: 35%;">
                      <col span="1" style="width: 25%;">
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Navn</th>
                      <th>E-mail</th>
                      <th>Fjern rettigheder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Steffen Frølund</td>
                      <td>sff@html24.net</td>
                      <td><?php include 'bin.php'?></td>
                    </tr>
                    <tr>
                      <td>Kristian Frølund</td>
                      <td>Kristian@html24.net</td>
                      <td><?php include 'bin.php'?></td>
                    </tr>
                    <tr>
                      <td>Line Bangsø</td>
                      <td>lb@html24.net</td>
                      <td><?php include 'bin.php'?></td>
                    </tr>  
                    <tr>
                      <td>Anders Lauritzen</td>
                      <td>anla@html24.dk</td>
                      <td><?php include 'bin.php'?></td>
                    </tr>  
                  </tbody>
                </table>
              </div>
              <div class="submit-button d-flex">
                <button type="submit" class="administrator__submit">Tilføj ny administrator</button>
              </div>
            </div>
          </div>
        </section>
    </div>
<?php include 'footer.php'?>