export class MainMethodsService {

    // Asign one space to a number
    asignSpace(newNumber: string): any {
        let number = "";

        for(let i = 0; i < newNumber.length; i++){
        if(i  === 3) {
            number += " " + newNumber[i];
        } else {
            number += newNumber[i];
        }
        }

        return number;
    }

    // Remove the space that always has the number ex: 322 6990080 -> 3226990080
     removeSpace(number: string): string {
        let finalString: string ="";
        
        for(let i = 0; i < number.length; i++) {
        if(number[i] === " "){
            continue;
        } else {
            finalString += number[i];
        }
        }

        return finalString;
    }
    
}