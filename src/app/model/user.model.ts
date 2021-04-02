export class User {
    firstName: string;
    lastName: string;
    contact: number;
    date: string;
    time: string;
    _id?: string;

    constructor(firstName: string,lastName: string, contact: number,
        date: string, time: string ) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.contact = contact;
            this.date = date;
            this.time = time;
            

    }
}