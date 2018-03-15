export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.amount = amount;
        this.name = name;
    }
}


// Alternate solution to create Ingredient class

// export class Ingredient {
//     constructor(public name: string, public amount: number) {}
// }
