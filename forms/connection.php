<?php
    // server, utente, password, nomeDatabase
    $conn = new mysqli("localhost", "root", "", "formRevolutionMinds");

    //verifica se la connessione e' andata a buon fine
    if($conn-> connect_error){
    die("Connessione fallita: " . $conn->connect_error);
    }
?>