export class User {
    firstName: string;
    lastName: string;
    contact: number;
    date: string;
    slot: string;

    constructor(firstName: string,lastName: string, contact: number,
        date: string, slot: string ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.contact = contact;
            this.date = date;
            this.slot = slot;
            

    }
}