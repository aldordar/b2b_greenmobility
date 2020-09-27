<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Brugere
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <a class="d-flex justify-content-center align-items-center header__button" href="opret-bruger.php">Tilmed ny bruger</a>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section id="brugere" class="brugere">
          <table class='brugere__table'>
            <colgroup>
                <col span="1" style="width: 25%;">
                <col span="1" style="width: 25%;">
                <col span="1" style="width: 25%;">
                <col span="1" style="width: 25%;">
            </colgroup>
            <thead>
              <tr>
              <th>
                <div class="table__icons d-flex">
                  <div class="table-magnifier"></div>
                  <input class="table-search" type="search" placeholder="Navn">
                    <div class="table-border-search"></div>
                    <div class="table__icons--filter">
                        <div class="table__icons--filter-up"></div>
                        <div class="table__icons--filter-separator"></div>
                        <div class="table__icons--filter-down"></div>
                    </div>
                  </div>
                </th>
                <th>Email</th>
                <th>
                  <div class="table__icons d-flex">
                    <span>Initialer/Afdeling</span>  
                    <div class="table__icons--filter">
                        <div class="table__icons--filter-up"></div>
                        <div class="table__icons--filter-separator"></div>
                        <div class="table__icons--filter-down"></div>
                    </div>
                  </div>
                </th>
                <th>Betalingsmetode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Steffen Frølund</td>
                <td>sff@html24.net</td>
                <td>Marketing</td>
                <td class="d-flex table-option">Kreditkort<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Kristian Frølund</td>
                <td>Kristian@html24.net</td>
                <td>Graphic design</td>
                <td class="d-flex table-option">Faktura<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Line Bangsø</td>
                <td>lb@html24.net</td>
                <td>Design</td>
                <td class="d-flex table-option">Kreditkort<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Mad Nielsen</td>
                <td>mdn@html24.dk</td>
                <td>CTO</td>
                <td class="d-flex table-option">Kreditkort<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Johannes Viersen</td>
                <td>joha@html24.dk</td>
                <td>HR</td>
                <td class="d-flex table-option">Kreditkort DK<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Casper Boesen</td>
                <td>capbo@html24.dk</td>
                <td>Web Development</td>
                <td class="d-flex table-option">Faktura<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Anders Lauritzen</td>
                <td>anla@html24.dk</td>
                <td>Web Development</td>
                <td class="d-flex table-option">Kreditkort DK<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Maria Højlund</td>
                <td>maho@html24.net</td>
                <td>Marketing</td>
                <td class="d-flex table-option">Kreditkort DK<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Lars Hagen</td>
                <td>lg@html24.dk</td>
                <td>DevOps</td>
                <td class="d-flex table-option">Faktura<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Alberto Dorta</td>
                <td>aldo@html24.dk</td>
                <td>Web Developement</td>
                <td class="d-flex table-option">Kreditkort<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Mikkel Strunge</td>
                <td>mist@html24.net</td>
                <td>Marketing</td>
                <td class="d-flex table-option">Kreditkort DK<?php include '3dots_svg.php'?></td>
              </tr>
              <tr>
                <td>Tim Larsen</td>
                <td>tml@html24.net</td>
                <td>Graphic Design</td>
                <td class="d-flex table-option">Kreditkort<?php include '3dots_svg.php'?></td>
              </tr>
            </tbody>
          </table>
        </section>
        <div class="pagination d-flex justify-content-center align-items-center">
          <button class="page-move previous">Forrige</button>
          <span class="page page-1 current-page">1</span>
          <span class="page page-2">2</span>
          <span class="page page-3">3</span>
          <span class="page page-4">4</span>
          <span class="incoming">...</span>
          <button class="page-move next">Næste</button>
        </div> 
    </div>
<?php include 'footer.php'?>