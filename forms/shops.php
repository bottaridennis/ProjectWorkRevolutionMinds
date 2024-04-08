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
        $name = filter_var($_POST["shopName"], FILTER_SANITIZE_STRING);
        $address = filter_var($_POST["address"], FILTER_SANITIZE_STRING);
        $shopNumber = filter_var($_POST["shopNumber"], FILTER_SANITIZE_STRING);
        $city = filter_var($_POST["city"], FILTER_SANITIZE_STRING);
        $description = filter_var($_POST["description"], FILTER_SANITIZE_STRING);

        //query che inserisce i dati nel database
        $query_sql = "INSERT INTO shops (shopName, shopAddress, shopNumber, city, shopDescription)
                    VALUES ('$name', '$address', '$shopNumber', '$city', '$description');";
        
        //eseguo la query
        $result = $conn->query($query_sql);

        //controllo se la query è stata eseguita correttamente
        if($result == TRUE):
            header("refresh:3;url=../contact.html");
    ?>       
            <div class="message">
                <h1>IL NEGOZIO E' STATO AGGIUNTO CORRETAMMENTE</h1>
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