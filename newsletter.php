<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revolution Minds</title>
</head>

<body>
    <?php
        // connessione al database
        // server
        $conn = new mysqli("localhost", "root", "", "formRevolutionMinds");

        //verifica se la connessione e' andata a buon fine
        if($conn-> connect_error){
            die("Connessione fallita: " . $conn->connect_error);
        }

        //variabili che salvano i dati dei campi del form
        $name = $_POST["name"];
        $surname = $_POST["surname"];
        $mail = $_POST["mail"];

        //query che inserisce i dati nel database
        $query_sql = "INSERT INTO newsletter (personName, surname, mail)
                    VALUES ('$name', '$surname', '$mail');";
        
        //eseguo la query
        $result = $conn->query($query_sql);

        //controllo se la query è stata eseguita correttamente
        if($result == TRUE){
            echo "Richiesta inoltrata con successo";
        }else{
            echo "Query non eseguita con successo: $query_sql";
        }
    ?>
</body>

</html>