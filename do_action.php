<?php
$wsdl_url = "http://127.0.0.1/soap/server/test.wsdl";
if (isset($_POST['amount']) && !empty($_POST['amount']) && isset($_POST['currency'])) { 
    try {
        $client = new SoapClient($wsdl_url, ["location" => "http://127.0.0.1/soap/server/"]);
        $number = htmlentities($_POST['amount']);
        $valuta = htmlentities($_POST['currency']);
        $risposta = $client->sayHello($number, $valuta);
        echo "Risultato: " . $risposta;
    } catch (SoapFault $e) {
        echo '<br>Errore nel client SOAP: ' . $e->getMessage();
    }
}
?>