//Problem 1:

const multiplyValue = (value: number, multiplier?: number): number => {

    if (multiplier === undefined) {

        return value * 2;
    }
    return value * multiplier;
};

const multipliers = multiplyValue(22)


//Problem 2:



const processInput =(value : string | number | boolean) : string | number=>{
    
        if (typeof value === "string") {
        return value.trim().toLowerCase();
    } 
    else if (typeof value === "number") {
        return value * 10;
    } else {
        return value ? "Active" : "Inactive";
    }
};

const process = processInput(true)


// Problem 3 
 
type CoordinateTuple = readonly [number , number,string];

const formatCoordinate = (coordinate : CoordinateTuple) : string =>{
    const [latitude,longitude,locationName] = coordinate ; 

    return `location : ${locationName} (${latitude} , ${longitude})`
    
}

const tupleValue = formatCoordinate([22.2,33.3,'Dhaka']);


// Problem 4 

const concatenateArrays = <T>(...arrays: T[][]) : T[] =>{

    return ([] as T[]).concat(...arrays);

}



// Problem 5

interface Course {
    title : string;
    students : number;
    isPublished : boolean
}

const getPopularCourses = (courses : Course[] , minStudents : number) : Course[] => {
     return courses.filter(course => course.isPublished && course.students >= minStudents);
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];


// Problem 6 

const pluckValues = <T, K extends keyof T>(items: T[] , key : K) : T[K][] => {
    return items.map((item : T) : T[K] => item[key])
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];



// Problem 7

class Employee { 
    constructor (
        protected name: string, 
        private baseSalary : number
    ){};
    getDetails(): string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
};

class Manager extends Employee {
  private department : string;

  constructor(name: string , baseSalary : number,department : string) {
    super(name,baseSalary)
     this.department = department;
  };
  getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
  
}

const manager = new Manager("Alice", 50000, "Engineering");



// Problem 8 


const validateAgeAsync = async (age: number): Promise<string> => {
     if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  };
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return "Access Granted";
};



