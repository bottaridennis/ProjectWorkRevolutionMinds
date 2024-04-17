#libreria per le email
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

#pip install mysql-connector-python

import mysql.connector

# Funzione per leggere i valori di un file di testo
def read_config(filename):
    config = {}
    with open(filename) as conf_file:
        for line in conf_file:
            if ":" in line:
                key, value = line.split(":")
                config[key.strip()] = value.strip()
    return config

# Leggo i valori dal file per la connessione al database
config_filename = 'databaseConfig.txt'
config = read_config(config_filename)

# Leggo i valori dal file per la connessione al database
mail_info = 'mailInfo.txt'
mail = read_config(mail_info)

def databaseConnection():
    conn = mysql.connector.connect(
        host=config['host'],
        port=int(config['port']),
        database=config['database'],
        user=config['user'],
        password=config['password']
    )

    return conn

def getDataFromDatabase(cursor, columnName, tableName):
    # Esecuzione della query
    query = "SELECT " + columnName + " FROM " + tableName
    cursor.execute(query)

    # Recupero dei risultati
    list = cursor.fetchall()

    return list

#def sendMail(mailList, titleList, newsList): *** problemi con ascii
def sendMail(mailList, object, content):
    endMail = "\n\nTeam Revolution Minds"

    message = object + content + endMail #creazione messaggio

    mitt = mail['mail']
    psw = mail['psw']

    # specifico il server SMTP del servizio a cui voglio connettermi e la relativa porta di servizio associata
    email = smtplib.SMTP("smtp.gmail.com", 587)
    email.ehlo() #mi connetto al server
    email.starttls() #avvio un canale criptato che mette in sicurezza la mia connessione con il server
    email.login(mitt, psw) #effettuo il login con la mia username e password

    # for nome, emails in dizionario.items():
    for row in mailList:
        email.sendmail(mitt, row['mail'], message) #invio dell'email

    email.quit() #interrompo la connessione con il server dopo aver inviato il messaggio

def main():
    try:
        # Connessione al database
        conn = databaseConnection()

        # Creazione del cursore
        cursor = conn.cursor(dictionary=True)  # Utilizziamo un cursore di tipo dizionario

        mailList = getDataFromDatabase(cursor, "mail", "newsletter")
        titleList = getDataFromDatabase(cursor, "title", "news")
        newsList = getDataFromDatabase(cursor, "content", "news")

        # controlli
        # for row in mailList:
        #     print(row['mail'])

        # for row in titleList:
        #     print(row['title'])

        # for row in newsList:
        #     print(row['content'])

        #invio delle mail a tutti le mail presenti nel database
        title = input("Inserisci il titolo della mail: ")
        object = title + "\n\n"
        content = input("Inserisci il contenuto della mail: ")

        sendMail(mailList, object, content)


        print("\nMail inviate")

        # Chiusura del cursore e della connessione
        cursor.close()
        conn.close()

    except mysql.connector.Error as err:
        print(f"Errore durante la connessione al database: {err}")

if __name__ == "__main__":     
    main()