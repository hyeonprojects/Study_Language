// Type 조정 방법 및 종류

// bool
let isDone: boolean;

// 숫자 number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o774;

// 문자열 String
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 36;
let sentenc: string = `naeme : ${fullName}, Age : ${age}`;

// 배열 Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 튜플 Tuple
let x: [string, number];

x = ["hello", 10];

console.log(x[0].substring(1)); // 문자열 타입에만 사용할 수 있는 메소드임
// 즉 위에 구문은 해당 타입으로 불러오면 변경되는 것을 알려줌

// 열거 Enum
// Typescript Enum의 성능이 좋지 않다는 내용도 있음 참고바람.
enum Color {Red, Green, Blue}

let c: Color = Color.Green;

// 기본적으로 0, 1, 2 사용 가능함, 그러나 값을 넣어줄 수 있다.
enum Colo2 {Red=1, Green, Blue}

// Any 알지 못하는 타입을 표현해야할떄 사용함 (컴파일 통과)
let notSure: any = 4;

/***
 * Object로 선언한 변수들은 오직 어떤 값이든 그 변수에 할당 할 수 있게 해주지만
 * 실제로 메서드가 존재하더라도 임의로 호출할 수 없다.
 * 이는 Object형과 any는 다르다.
 * any 타입은 타입의 일부만 알고 전체를 알지 못할떄 유용하다.
 */

let list: any[] = [1, true, "free"];
list[1] = 100;

// Void

function warnUser(): void {
    console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// never 절대 발생할 수 없는 타입 -> void와 다르다
function error(message: string): never {
    throw new Error(message);
}

// 객체 Object
// 원시 타입이 아닌 타입
declare function create(o: object | null): void;

create({prop: 0});
create(null);
create(42);
create("string");

// 타입 단언 Type assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

// 아래 같은 방법이 있는데 태그랑 햇갈리니 비추천
let strLength: number = (<string>someValue).length;

