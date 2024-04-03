<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revolution Minds</title>

    <?php require_once("head.php"); ?>
</head>

<body>
    <?php
        // connessione al database
        require_once('connection.php');

        //variabili che salvano i dati dei campi del form
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $cf = $_POST["cf"];
        $donation = $_POST["donation"];
        $message = $_POST["message"];

        //query che inserisce i dati nel database
        $query_sql = "INSERT INTO donors (donorName, surname, cf, donation, donorMessage)
                    VALUES ('$name', '$surname', '$cf', $donation, '$message');";
        
        //eseguo la query
        $result = $conn->query($query_sql);

        //controllo se la query è stata eseguita correttamente
        if($result == TRUE):
            //header("Location: ../contact.html");
            header("refresh:3;url=../contact.html");
    ?>       
            <div class="message">
                <h1>La tua donazione è stata registrata GRAZIE DAL TEAM REVOLUTION MINDS</h1>
            </div>
    <?php
            exit();

            endif 
    ?>
    <?php if($result == FALSE): ?>
        <div class="message">
            <h1><?php "Query non eseguita con successo: $query_sql";?></h1>
        </div>
    <?php endif ?>
</body>

</html>