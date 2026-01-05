import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../firebase/connect";
// import info from '../components/ProjectSection/ProjectInfo'

export async function getProjects() {
    const collectionRef = collection(db, "projects")
    const data = await getDocs(collectionRef)
    const formattedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    // const formattedData = info.map(doc => ({ ...doc.data(), id: doc.id }))
    return formattedData
}