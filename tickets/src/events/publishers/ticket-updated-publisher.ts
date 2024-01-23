import { Publisher, Subjects, TicketUpdatedEvent } from "../../../../common/src";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
