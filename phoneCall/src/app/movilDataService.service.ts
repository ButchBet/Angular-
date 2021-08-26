export class MovilDataService {
    // [operator, numbe]
    private sim1 = ["Claro", 3118818838];

    private sim2 = ["Tigo", 3007213510];

    private name = "Kevin";

    private lastName = "Alejandro";

    private email = "k.salazar@utp.edu.co";

    getSim(i: number) {
        if(i === 1){
            return this.sim1;
        } else {
            return this.sim2;
        }
    }

    setSim(i: number, index:number, vale: any) {
        if(i == 1) {
            this.sim1[index] = vale;
        } else {
            this.sim2[index] = vale;
        }
    }

    getName() {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    getEmail() {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }
}