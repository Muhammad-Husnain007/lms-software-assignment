import { useSelector } from "react-redux";


export default function Student() {

    const userData = useSelector((a) => a.user);
    console.log(userData)

    return (
        <>
            <h1>Name: {userData.name}</h1>
            <h1>Email: {userData.email}</h1>
        </>
    )
}
