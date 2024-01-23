import { Publisher, Subjects, TicketCreatedEvent } from "../../../../common/src";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
