

export class Person {

    constructor(
        private firstName: string,
        private lastName: string,
        public address: string ="no envio direccion, no se sabe donde vive", 

    ) {};


}

export class Hero  {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        
        // this.person = new Person(realName)
    }

}

const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero("IronMan", 45, 'Tony', tony );
console.log(ironman);