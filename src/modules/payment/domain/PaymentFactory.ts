import { BinancePayment } from "./BinancePayment";
import { PagoMovilPayment } from "./PagoMovilPayment";
import { Payment, PaymentAttributes } from "./Payment";
import { PaymentMethod } from "./PaymentMethod.enum";

export class PaymentFactory {
	static create(data: PaymentAttributes): Payment {
		switch (data.paymentMethod) {
			case PaymentMethod.BINANCE:
				return BinancePayment.create(data);

			case PaymentMethod.PAGO_MOVIL:
				return PagoMovilPayment.create(data);

			default:
				throw new Error("Payment method not allowed");
		}
	}
}