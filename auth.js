const API = "http://localhost:3000";
export async function login(username, password){
    const res = await fetch(`${API}/users?username=${username}&password${password}`);
    const user = await res.json
}