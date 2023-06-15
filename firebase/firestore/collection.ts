import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { firestoreDB } from "..";

export class FireStoreCollection {
    private collectionName:string;
    private collectionRef: CollectionReference<DocumentData>;
    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.collectionRef = collection(firestoreDB, this.collectionName);
    }

    // this is only used in the 
    getDetails = async () => {
        try {
            const detailsRef = collection(firestoreDB, `${this.collectionName}/all${this.collectionName}/details`)
            const snap = await getDocs(detailsRef);
            // if(snap.empty()) return Error("Empty") ;
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        } catch (err) {
            // console.warn(err)
            throw Error("Error in getDetails for the collection");
        }
    }

    customCollectionRef = (newRef:string) => {
        return collection(firestoreDB, `${this.collectionName}/${newRef}`)
    }
    customCollectionName = (newRef:string) => {
        return `${this.collectionName}/${newRef}`;
    }

    getSingleDoc = async (id:string, customCollectionName?:string) => {
        try {
            const docRef = doc(firestoreDB, customCollectionName ?? this.collectionName, id);
            const docData = await getDoc(docRef);
            if (docData.exists()) 
                return docData.data() 
            // My custom Error Gandi Munda Andharr >.< 
            else throw Error("Invalid Id in the Collection");
        } catch (err) {
            throw err;
            // throw Error("Error in data fetching")
        }
    }

   
}

export const cloudFirestoreCollections = {
    USER_DETAILS: "User",
    BATCH: "Batch",
}