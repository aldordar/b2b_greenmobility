<?php 
  (strpos($_SERVER['REQUEST_URI'], 'forside')) ? $forside = 'active' : $forside = '';
  (strpos($_SERVER['REQUEST_URI'], 'bruger')) ? $brugere = 'active' : $brugere = '';
  (strpos($_SERVER['REQUEST_URI'], 'korselshistorik')) ? $korselshistorik = 'active' : $korselshistorik = '';
  (strpos($_SERVER['REQUEST_URI'], 'fakturaer')) ? $fakturaer = 'active' : $fakturaer = '';
  (strpos($_SERVER['REQUEST_URI'], 'profil')) ? $profil = 'active' : $profil = '';
?>
<aside>
  <div class="nav__logo"></div>
  <input class="nav__checkbox" type="checkbox" id="navi-toggle">
  <label for="navi-toggle" class="nav__button">
    <span class="nav__button--icon"></span>
  </label>
  <nav class="d-flex navigation">
    <a href="forside.php" class="nav__link d-flex align-items-center <?=$forside?>">
      <div class="nav__link--text">Forside</div>
    </a>
    <a href="brugere.php" class="nav__link d-flex align-items-center <?=$brugere?>">
      <div class="nav__link--text">Brugere</div>
    </a>
    <a href="korselshistorik.php" class="nav__link d-flex align-items-center <?=$korselshistorik?>">
      <div class="nav__link--text">Kørselshistorik</div>
    </a>
    <a href="fakturaer.php" class="nav__link d-flex align-items-center <?=$fakturaer?>">
      <div class="nav__link--text">Fakturaer</div>
    </a>
    <a href="profil.php" class="nav__link d-flex align-items-center <?=$profil?>">
      <div class="nav__link--text">Profil</div>
    </a>
    <div class="nav__contact-box">
      <div class="nav__contact-box--title">Kontakt</div>
      <span class="nav__contact-box--person d-block">Mads Finsen</span>
      <span class="nav__contact-box--email d-block">mf@greenmobility.com</span>
      <span class="nav__contact-box--number d-block">+45 4110 2602</span>
    </div>
  </nav>
</aside>