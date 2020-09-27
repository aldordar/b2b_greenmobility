<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Køselshistorik
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section class="history">
          <table class='history__table'>
            <colgroup>
                <col span="1" style="width: 20%;">
                <col span="1" style="width: 20%;">
                <col span="1" style="width: 20%;">
                <col span="1" style="width: 20%;">
                <col span="1" style="width: 20%;">
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
                <th>
                  <div class="table__icons d-flex">
                    <span>Startdato/tid</span>  
                    <div class="table__icons--filter">
                        <div class="table__icons--filter-up"></div>
                        <div class="table__icons--filter-separator"></div>
                        <div class="table__icons--filter-down"></div>
                    </div>
                  </div>
                </th>
                <th>
                  <div class="table__icons d-flex">
                    <span>Slutdato/tid</span>  
                    <div class="table__icons--filter">
                        <div class="table__icons--filter-up"></div>
                        <div class="table__icons--filter-separator"></div>
                        <div class="table__icons--filter-down"></div>
                    </div>
                  </div>
                </th>
                <th>Pris</th>
                <th>Betalingsmetode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Steffen Frølund</td>
                <td>12/05/2020 07:25</td>
                <td>12/05/2020 07:25</td>
                <td class="table__price">152,00 DKK</td>
                <td>Kreditkort</td>
              </tr>
              <tr>
                <td>Kristian Frølund</td>
                <td>10/05/2020 12:25</td>
                <td>10/05/2020 13:55</td>
                <td class="table__price">215,00 DKK</td>
                <td>Faktura</td>
              </tr>
              <tr>
                <td>Line Bangsø</td>
                <td>09/05/2020 08:12</td>
                <td>09/05/2020 08:25</td>
                <td class="table__price">169,95 DKK</td>
                <td>Kreditkort</td>
              </tr>
              <tr>
                <td>Mad Nielsen</td>
                <td>29/04/2020 16:53</td>
                <td>29/04/2020 17:32</td>
                <td class="table__price">118,00 DKK</td>
                <td>Kreditkort</td>
              </tr>
              <tr>
                <td>Johannes Viersen</td>
                <td>21/05/2020 09:21</td>
                <td>21/05/2020 09:42</td>
                <td class="table__price">136,50 DKK</td>
                <td>Kreditkort DK</td>
              </tr>
              <tr>
                <td>Casper Boesen</td>
                <td>15/04/2020 18:05</td>
                <td>15/04/2020 18:38</td>
                <td class="table__price">237,00 DKK</td>
                <td>Faktura</td>
              </tr>
              <tr>
                <td>Anders Lauritzen</td>
                <td>12/05/2020 07:25</td>
                <td>12/05/2020 07:25</td>
                <td class="table__price">152,00 DKK</td>
                <td>Kreditkort DK</td>
              </tr>
              <tr>
                <td>Maria Højlund</td>
                <td>12/05/2020 08:25</td>
                <td>12/05/2020 08:25</td>
                <td class="table__price">140,00 DKK</td>
                <td>Kreditkort DK</td>
              </tr>
              <tr>
                <td>Lars Hagen</td>
                <td>17/04/2020 09:13</td>
                <td>17/04/2020 09:25</td>
                <td class="table__price">312,50 DKK</td>
                <td>Faktura</td>
              </tr>
              <tr>
                <td>Alberto Dorta</td>
                <td>02/05/2020 09:00</td>
                <td>02/05/2020 09:10</td>
                <td class="table__price">120,25 DKK</td>
                <td>Kreditkort</td>
              </tr>
              <tr>
                <td>Mikkel Strunge</td>
                <td>10/05/2020 09:00</td>
                <td>10/05/2020 09:32</td>
                <td class="table__price">190,00 DKK</td>
                <td>Kreditkort DK</td>
              </tr>
              <tr>
                <td>Tim Larsen</td>
                <td>22/04/2020 13:10</td>
                <td>22/04/2020 13:20</td>
                <td class="table__price">81,50 DKK</td>
                <td>Kreditkort</td>
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