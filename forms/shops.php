<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revolution Minds</title>
    <link rel="shortcut icon" href="./images/Logo.png" type="image/x-icon">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./messageStyle.css">

    <!-- box icons -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

</head>

<body>
    <?php
        // connessione al database
        require_once('connection.php');

        //variabili che salvano i dati dei campi del form
        $name = $_POST["shopName"];
        $address = $_POST["address"];
        $shopNumber = $_POST["shopNumber"];
        $city = $_POST["city"];
        $description = $_POST["description"];

        //query che inserisce i dati nel database
        $query_sql = "INSERT INTO shops (shopName, shopAddress, shopNumber, city, shopDescription)
                    VALUES ('$name', '$address', '$shopNumber', '$city', '$description');";
        
        //eseguo la query
        $result = $conn->query($query_sql);

        //controllo se la query è stata eseguita correttamente
        if($result == TRUE):
            //header("Location: ../contact.html");
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