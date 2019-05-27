export interface Payment {
    id : Number;
	orderId : Number;
	transactionId : String;
	paymentMethod : String;
	paymentStatus : String;
	paymentCreateAt : Date;
}

