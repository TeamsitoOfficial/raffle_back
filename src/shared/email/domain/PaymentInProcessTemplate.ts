import { Template } from "./Template";

export class PaymentInProcessTemplate extends Template {
	public readonly subject: string;

	constructor(private readonly name: string) {
		super();
		this.subject = "Su pago está siendo procesado";
	}

	value(): string {
		return `
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
				<title>Document</title>
			</head>
			
			<body style="margin: 0; padding: 0;  font-family: 'Public Sans', sans-serif;">
				<div style='margin:0; text-align:center;
			  background: #F1F5F9;
			
			  max-width: 604px;
			  padding: 40px;
			  align-items: center;
			  margin: 0 auto;
			 '>
			  <div style='margin:0 0; padding: 0px;'><img width=127 src="https://res.cloudinary.com/teamsito/image/upload/v1736189970/xrr6n3ikg4ab7xl6x9a9.png" alt=""></div>
			  <div style='margin:32px 0; padding: 0px;'>
				<h1 style=' color: #070A13;
			text-align: center;
			font-size: 20px;
			font-style: normal;
			font-weight: 500;
			line-height: 30px;margin:0; padding: 0px;'>Hola, ${this.name} Su pago está siendo procesado.</h1>
			  </div>
			  <div style='  background: white;  margin:32px 0; padding: 44px 24px;
			'>
				<div style='margin:0; padding: 0px;'><img width="100" 
					height="100" style='margin:0; padding: 0px;' src="https://res.cloudinary.com/teamsito/image/upload/v1736191020/x2ft7xe7wywk6xltiz25.png" alt="img"></div>
				<div>
				  <div style='margin:0; padding: 0px;'>
					<p style='margin:20px 0; padding: 0px; color: #070A13;
					text-align: center;
					font-size: 14px;
					font-style: normal;
					font-weight: 400;
					line-height: 20px;'>
			 <b>Nos complace informarle que su pago por el evento de la rifa se está procesando actualmente. Esto es lo que necesita saber:</b>
			 <span style='display: inline-block; width: 100%;'></span>
			 Su transacción es segura y se maneja con cuidado.<br>
			 El procesamiento suele tardar entre 1 y 2 días hábiles.<br>
			 Recibirás un correo electrónico de confirmación una vez que se complete el pago.</p>
			
					<p style='margin:20px 0; padding: 0px;  color: #070A13;
			text-align: center;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;'><p>Si tiene alguna pregunta o inquietud, no dude en comunicarse con nuestro equipo de soporte.</p></p>
					<p style='margin:20px 0; padding: 0px;  color: #070A13;
			text-align: center;
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: 20px;'><b>¡Gracias por participar en el sorteo de Raffle!</b> </p>
				  </div>
				</div>
			  <div style=' margin:10px auto; position:relative; width:100%;'>
			</div>
			  </div>
			  <div>
			
				<a href="https://raffle-front-sigma.vercel.app/" style='margin:0; padding: 0px;  color: #475569;
			text-align: center;
			font-size: 12px;
			font-style: normal;
			font-weight: 500;
			line-height: 18px; 
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-skip-ink: none;
			text-decoration-thickness: auto;
			text-underline-offset: auto;
			text-underline-position: from-font;'>www.raffle.com</a>
			  </div>
			</div>
			</body>
			
			</html>
		`;
	}
}
