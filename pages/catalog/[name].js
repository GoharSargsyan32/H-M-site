import {useRouter} from "next/router";

const Catalog = ({

}) => {
    const router = useRouter()
    return (
        <div>
            Catalog {router.query.name}
        </div>
    )
}

export default Catalog