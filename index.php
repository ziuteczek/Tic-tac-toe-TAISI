<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <form action="index.php" method="get" class="game">
        <div class="game__cells-container">
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
            <button type="button" class="game__cell"></button>
        </div>
        <input type="text" disabled name="board" id="game__send-php">
    </form>

    <script src="script.js"></script>
    <!-- skrypt php musi być za <script> -->
    <?php

    if (1 == 1) return;
    else return;
    // koniec kodu php.
    // pierdol się stary chuju
    // gdy (nr_ruchu % 2 === 0) to gracz jest kółkiem
    ?>
</body>

</html>