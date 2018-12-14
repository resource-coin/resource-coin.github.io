<?php
if (isset($_POST['type'])) {
	/*Адрес отправки tilgroupspb@mail.ru*/
	$emailTo = 'yarosh.g08@gmail.com';
	
	if($_POST['type'] == "call"){
		/*Тема письма*/
    	$subject = 'Заказ на обратный звонок';
		/*Переменные из формы*/
		$name = $_POST['name'];
		$tel = $_POST['tel'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Пользователь: '.$name.'</p> 
				<p>Номер телефна: '.$tel.'</p>                 
	      	</body>
	    </html>';
	}
	   
    /*Шапка письма*/
	$header = "Content-type: text/html; charset=\"utf-8\"\r\n";
	$header .= "From: Лендинг Resource Coin <landing@resourcecoin.ru>\r\n";
	mail($emailTo, $subject, $message, $header);
}

?>
