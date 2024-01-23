import { PaymentCreatedEvent, Publisher, Subjects } from "../../../../common/src";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
