<?php
include "general_content/emmet.php";
?>

<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:8888/ra/login.php">ALMAU</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="http://localhost:8888/ra/login.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://localhost:8888/ra/login.php">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <?php 
            if($_COOKIE['user']==''):
        ?>
      </div>
      <?php else:?>
        <form class="d-flex" action="/ra/procedures/exit.php">
          <button class="btn btn-outline-success shoma" type="submit">Exit</button>
        </form>
      <?php endif;?>
  </div>
</nav>