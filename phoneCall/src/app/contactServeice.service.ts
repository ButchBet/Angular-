import { Injectable } from "@angular/core";
import { Contact } from "./contact";

export class ContactService {

    // Save the contacts data
    private contact: Contact[] = [new Contact("Kevin", "Salazar", 3118818838, "Claro", "k.salazar@utp.edu.co"),
                        new Contact("Alejandro", "Castañeda", 3226118543, "Tigo", "kevinmortal.10@gmail.com"),
                        new Contact("Karem", "Londoño", 3178516045, "Movistar", "k.londono@utp.edu.co"),
                        new Contact("Luz", "Salazar", 3226464578, "Claro", "andrasalazar0008@gmail.com"),
                        new Contact("Alejandro", "Vergara", 3135036412, "Claro", "alejo.vergara@utp.edu.co"),
                        new Contact("Mileth", "Gordillo", 3225370674, "Claro", "mileth.gordillo@utp.edu.co"),
                        new Contact("Eduar", "Ortiz", 3145293894, "Claro", "gaia.ortiz@utp.edu.co")];

    getContact() {
        return this.contact;
    }

    setContact(contact: Contact) {
        this.contact.push(contact);
    }
}