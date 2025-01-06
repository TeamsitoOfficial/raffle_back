import { NotFoundError } from "src/shared/errors";

import { TicketBackOfficeRepository } from "../domain/TicketBackOfficeRepository";

export class VerifyTicketPayment {
	constructor(private readonly repository: TicketBackOfficeRepository) {}

	async verify({ ticketId }: { ticketId: string }): Promise<void> {
		const payment = await this.repository.getTicketPayment({ ticketId });

		if (!payment) {
			throw new NotFoundError(`Payment for ticket ${ticketId} not found`);
		}

		payment.approve();

		await this.repository.update(payment);
	}
}