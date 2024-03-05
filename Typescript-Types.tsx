//-------------------------------------------------------------------------------------------------------
//VARIABLES

let greeting = 'Hello';

let age = 100;

let bool = true;

//En ningun caso puedo volver a usar estas mismas variables y asignarles otros valor, ya que daria error.
//El tipo de valor que acepta esta implicito en el valor dado, y solo recibira ese tipo de valor y no otro.

let ageWhitTypes: number = 3;
ageWhitTypes = 101;

let stringWhitTypes: string = 'god bye';
stringWhitTypes = 'hello';

let booleanWhitTypes: boolean;
booleanWhitTypes = true;

//Puedes declarar una variable y asignarle de forma explicita el tipo de valor que aceptara.
//tambien puedes asignarle un valor inicial, como se ve en el ejemplo.

let ageAndString: number | string;
ageAndString = 102;
ageAndString = 'max';

//A la variable declara puedes asignarle dos valores diferentes.
//Puedes hacer cualquier combinacion entre number, string y boolean.





//-------------------------------------------------------------------------------------------------------
//ARRAY

let names = ['max', 'equal', 'min']
names = ['max']

let numbers = [1, 2, 3]
numbers = [4]

//Al declarar un array y meter un determinado valor, aceptara solo ese valor, dara error si ponemos otro.

let stringArray: string[];
stringArray = ['max', 'min', 'equal'];

let numberArray: number[];
numberArray = [1, 2, 3];

//Tambien podemos declarar de forma explicita un tipo de valor en un array, asignamos el valor + []


let stringOrNumber: (number | string)[];
stringOrNumber = ['max', 0]

//Puedes asignar un array dos tipos de valores diferentes.





//-------------------------------------------------------------------------------------------------------
//OBJECTS

let user = {
    userName: 'max',
    age: 103,
    isAdmin: false
}

user.userName = 'max';
user.age = 103;
user.isAdmin = false

//Al declarar una propiedad y darle un valor, no podemos acceder a esa propiedad con otro tipo de valor.
//Si cambiamos algunos de los 'user.' por otro valor daran error.

let userAnsOthers: {
    userName: string,
    age: number,
    isAdmin: boolean
}

userAnsOthers = {
    userName: 'max',
    age: 24,
    isAdmin: false,
}

//A cada propiedad del objeto le podemos asignar un tipo de valor que no podra ser cambiado o dara error.

let userAnsConditionals: {
    userName: string
    age: number
    isAdmin: boolean
    phone?: number | undefined
}

userAnsConditionals = {
    userName: 'max',
    age: 24,
    isAdmin: false,
    phone: undefined
}

//Podemos declaraa un propiedad condicional, es decir no sera obligatoria rellenar.
//podemos dejarla por defecto como undefined o bien ponerle un numero





//-------------------------------------------------------------------------------------------------------
//ANY

let anyValue: any;

anyValue = 0;
anyValue = 'max';
anyValue = true;
anyValue = [];
anyValue = {};

let arrayAny: any[];

//Si al declarar una variable no asignamos un valor implicito o explicito, toma cualquier valor.
//debemos usar ANY solo cuando no estemos seguros de que tipo de valor necesitaremos.





//-------------------------------------------------------------------------------------------------------
//FUNCTIONS

const sayString = ():string => {
    return 'Hello';
}

const sayNumber = ():number => {
    return 2;
}

const sayBoolean = ():boolean => {
    return true;
}

//Lo que debe devolver la funcion es el tipo de dato señalado ubicado luego de los parametros '()'.
//():string, en el return debera devolver un string.

const add = (num: number) : number => {
    return num + 106;
}
add(25)

//Al explicitar el tipo de dato dentro de los parentesis dejamos en claro que tipo de valor aceptara por parametro
//En este caso, seria number, pues (num :number) lo explicita de esa forma, otro dato dara error.
//El return logicamente debera dvolver un valor numerico.


const addOther = (num: number) : void => {
    num + 107;
}
addOther(25)

//Al poner ':void' la logica en la funcion se ejecuta, pero no devolvera nada, al poner return da error.

let addOthers = (num1:number, num2:number, num3?:number) :number => {
    return (num1 + num2);
}
addOthers(2,3,6)

//Al poner un condicional en el ultimo parametro, no hace falta poner en el return '+ num3'.
//basta con pasar tres parametros como se ve en el ejemplo, esto retornara: 11




//-------------------------------------------------------------------------------------------------------
//TYPE ALLIES

type userType = {
    name:string,
    age:number,
    isAdmin:boolean,
    phone?:number
}

const testUser = (user: userType) =>{
    console.log(user.name = 'max');
    console.log(user.age = 108);
    console.log(user.isAdmin = false);
    console.log(user.phone = undefined);
}

//Poner un objeto literal dentro de los parametros es valido, pero ilegible y poco escalable.
//Al usar 'type' y definir un alias, seguido de un objeto con propiedades, es posible acceder a las props.
//En vez de '(user: userType)' puede ser '(otro: userType)' y acceder a los valores del prop desde 'otro'

type userTypeTwo = {
    name:string,
    age:number,
    isAdmin:boolean,
    theme: 'dark' | 'ligth'
}

let info : userTypeTwo = {
    name:'max',
    age:109,
    isAdmin: false,
    theme: "dark"
}  

//Podemos dar opciones en string con el operador '|' (or)





//-------------------------------------------------------------------------------------------------------
//INTERFACS

interface IUser {
    username: string;
    email: string;
    age: number;
}
//Estructura basica.

interface employed extends IUser{
    employed:number;
}
//Extension de IUser, employed tiene: username,email,age y employed.

const emp : employed = {
    username: 'max',
    email: 'thompssonlite@gmail.com',
    age: 110,
    employed: 483438
}
//'emp' ahora vale por la cantidad de propiedades y valores que tiene IUser + employed (user,age,email,employed)





//-------------------------------------------------------------------------------------------------------
//GENERICS

interface IAuthor {
    id: number;
    username: string;
  }
  
  interface ICategory {
    id: number;
    title: string;
  }
  
  interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
  }
  
  interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  const testMe: IPostBetter<string> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["str", "str2"],
  };
  
  interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }
  
  const testMe2: IPostEvenBetter<{ id:number }> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1 }],
  };
  
  const testMe3: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, username: "john" }],
  };
  
  const testMe4: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, title: "cat" }],
  };

