import { useEffect, useState } from "react"
import { getlocality } from "../services/LocalityService"

const LocalityList = () => {
    const [localities, setLocalities] = useState([])

    useEffect(() => {
        let mount = true
        getlocality()
            .then(res => {
                console.log("Response from api", res)
                setLocalities(res)
                return() => mount = false
            })
    }, [])
    return (
        <div className="container">
            <h3>Liste des localités</h3>
            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {localities.map(locality =>
                        <tr key={locality.id}>
                            <td>{locality.name}</td>
                            <td>
                                <button className="btn btn-primary m-2" onClick={()=>{}}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>{}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LocalityList