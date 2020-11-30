import { Resolver } from "dns";
import { User } from "../redux/types";

const users:User[] = [
    {
        name: "Pedro",
        age: 21
    }
]

export async function getUsers():Promise<User[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
}
