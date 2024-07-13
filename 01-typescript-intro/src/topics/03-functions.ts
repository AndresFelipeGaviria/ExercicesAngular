

function addNumers(a: number, b: number):number{
    return a + b;

}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;
const multiply = (firtsNumber: number, secondNumber?: number, base: number = 2 ): number => firtsNumber * base;


// const result: number = addNumers(1,2);
// const result2: string = addNumbersArrow(3,4);
// const multiplyResult: number = multiply(5)

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount; 
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}
healCharacter(strider, 10);
strider.showHp()