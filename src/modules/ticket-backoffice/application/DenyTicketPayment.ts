import { NotFoundError } from "../../../shared/errors";
import { TicketBackOfficeRepository } from "../domain/TicketBackOfficeRepository";

export class DenyTicketPayment {
	constructor(private readonly repository: TicketBackOfficeRepository) {}

	async deny({ ticketId }: { ticketId: string }): Promise<void> {
		const payment = await this.repository.getTicketPayment({ ticketId });

		if (!payment) {
			throw new NotFoundError(`Payment for ticket ${ticketId} not found`);
		}

		payment.deny();

		await this.repository.update(payment);
		await this.repository.deleteTicket({ ticketId });
	}
}