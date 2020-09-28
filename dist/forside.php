<?php include 'header.php'?>
    <div class="page-template">
        <header class="header d-flex">
            <h1 class="header__title">Forside
                <span class="header__title--sub d-block">HTML24 A/S - Kristian Højlund</span>
            </h1>
            <a class="d-flex justify-content-center align-items-center header__button" href="opret-bruger.php">Tilmed ny bruger</a>
            <hr class="header__separator">
        </header>
        <?php include 'sidebar.php'?>
        <section class="frontpage">
            <div class="row frontpage-data">
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <a href="brugere.php" class="frontpage-data__box--content">
                        <h3 class="frontpage-data__box--content-title">Antal brurgere</h3>
                        <p class="frontpage-data__box--content-quantity">34</p>
                        <img class="frontpage-data__box--content-image" src="./img/users.svg" />
                        <div class="frontpage-data__box--content-link"></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <a href="korselshistorik.php" class="frontpage-data__box--content">
                        <h3 class="frontpage-data__box--content-title">Antal kørte ture</h3>
                        <p class="frontpage-data__box--content-quantity">237</p>
                        <img class="frontpage-data__box--content-image" src="./img/car.svg" />
                        <div class="frontpage-data__box--content-link"></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <div class="frontpage-data__box--content">
                        <h3 class="frontpage-data__box--content-title">Antal kørte</h3>
                        <p class="frontpage-data__box--content-quantity">934</p>
                        <img class="frontpage-data__box--content-image" src="./img/speed.svg" />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <div class="frontpage-data__box--content">
                        <h3 class="frontpage-data__box--content-title">Antal kørte minutter</h3>
                        <p class="frontpage-data__box--content-quantity">634</p>
                        <img class="frontpage-data__box--content-image" src="./img/clock.svg" />
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <a href="fakturaer.php" class="frontpage-data__box--content">
                        <h3 class="frontpage-data__box--content-title">Ufaktureret forbrug</h3>
                        <p class="frontpage-data__box--content-quantity">3</p>
                        <img class="frontpage-data__box--content-image" src="./img/file.svg" />
                        <div class="frontpage-data__box--content-link"></div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center justify-content-end frontpage-data__box">
                    <div class="frontpage-data__box--content">ç
                        <h3 class="frontpage-data__box--content-title">Kilo CO2 Sparet</h3>
                        <p class="frontpage-data__box--content-quantity">3.712</p>
                        <img class="frontpage-data__box--content-image" src="./img/petrol.svg" />
                    </div>
                </div>
            </div>

        </section>
        
    </div>
<?php include 'footer.php'?>