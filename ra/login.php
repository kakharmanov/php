    <?php
    include "general_content/emmet.php";
    ?>

<body class="container">

    <?php
    include "general_content/navs.php";
    ?>
    <div class="container mt-4">
        <?php
        if ($_COOKIE['user'] == '') :
        ?>
            <div class="row">
                <div class="col">
                    <h1>Форма регистрации</h1>
                    <form class="mt-5" action="procedures/process.php" method="POST">

                        <input type="text" class="form-control" name="login" id="login" placeholder="Введите логин"><br>

                        <input type="text" class="form-control" name="name" id="name" placeholder="Введите имя"><br>

                        <input type="password" class="form-control" name="password" id="password" placeholder="Введите пароль"><br>

                        <button class="btn btn-success" type="submit">Зарегистрировать</button>
                    </form>
                </div>

                <div class="col">
                    <h1>Форма авторизации</h1>
                    <form class="mt-5" action="procedures/auth.php" method="POST">
                        <input type="text" class="form-control" name="login" id="login" placeholder="Введите логин"><br>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Введите пароль"><br>
                        <button class="btn btn-success" type="submit">Войти</button>
                    </form>
                </div>
                <div class="mt-5">
                    <img src="https://www.almau.edu.kz/images/uploads/8777afa2bb5a0f0e4c660953a87b76fa.jpg" width="350" height="350" alt="">
                    <a class="ml-5" href="">MADE IN KAZAKHSTAN REPUBLIC</a>
                </div>
            </div>

        <?php else : ?>
            <?php
            $user_status = $_COOKIE['status'];
            if ($user_status == 1) {
                echo "<h1>Admin PANEL:</h1>";
                include "procedures/admin.php";
                include "database/database.php";
                include "procedures/pagination.php";
            ?>

                <div class='row'>
                <?php while ($row = $postQuery->fetch_object()) {?>
                        <div class="col-sm-4 md-4">
                            <div class='card'>
                                <div class='card-body'>
                                    <a href="procedures/deletecomment.php?pid=<?= $row->id ?>" class="btn btn-danger">delete</a>
                                    <p><?= $row->comment ?></p>
                                </div>
                            </div>
                        </div>
                <?php } ?>
                </div>

            <?php

            } else {
                echo "<h1>Hi, user!</h1>";
                include "database/database.php";
                include "procedures/pagination.php";
            ?>

            <div class='row'>
            <?php while ($row = $postQuery->fetch_object()) {?>
                <div class="col-sm-4 md-4">
                    <div class="card">
                        <div class="card-body">
                            <p><?= $row->comment ?></p>
                        </div>
                    </div>
                </div>
            <?php }?>
                </div>

        <?php } endif; ?>

        <ul class="pagination pagination-lg justify-content-center mt-5">
            <?php
            $pageQuery = $bd->query("SELECT COUNT(*) AS total FROM `comments`");
            $count = $pageQuery->fetch_object()->total;
            $pages = ceil($count / $limit);
            for ($i = 1; $i <= $pages; $i++) {
                echo  "<li class='page-item'><a class='page-link' href='?page=$i'>$i</a></li>";
            }
            ?>
        </ul>
        <?php include "general_content/footer.php";?>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>            
    <script src="ajax/comment.js"></script>

</body>

</html>