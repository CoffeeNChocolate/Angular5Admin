import { Component, OnInit, Input } from "@angular/core";
import { OrderService } from "./order.service";
import { Order } from "./order";

@Component({
    selector: 'order-info',
    templateUrl: './order.component.html',
    providers: [OrderService]
})
export class OrderComponent implements OnInit {
    constructor(private orderService: OrderService) { }
    cols: any[];
    orderDetails: Array<OrderDetails> = [];
    display: boolean = false;
    @Input()
    order: OrderDetails;

    showDialog(orderDetails: OrderDetails) {
        this.display = true;
        this.order = orderDetails;
        console.log("show", this.order);
    }
    ngOnInit() {
        this.orderService.getOrderInformation().then(x => {
            this.orderDetails = x;
            console.log("x", this.orderDetails);
        });

        this.cols = [
            { field: 'orderId', header: 'Order Id ' },
            { field: 'orderType', header: 'Order Type' },

        ];

    }
    saveOrderInformation(orders: any): void {
        console.log("called",orders);
    }

}

export class OrderDetails implements Order {
    constructor(public orderId: string, public orderType: string, public orderSubType: number,
        public orderDate: string, public orderTime: string, public orderQuantity: number
    ) {

    }
}