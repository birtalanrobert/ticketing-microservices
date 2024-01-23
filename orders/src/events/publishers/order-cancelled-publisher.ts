import { Publisher, OrderCancelledEvent, Subjects } from "../../../../common/src";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
