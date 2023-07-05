import {useRouter} from "next/router";
import {useEffect, useState} from "react";
const Product = () => {
    const router = useRouter()
    const [state, setState] = useState("")
    useEffect(() => {
        setState(router.query.id)
    }, [router])
    return (
        <h1>This is product page {state}</h1>
    )
}

export default Product