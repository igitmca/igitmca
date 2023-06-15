import {
    deleteObject,
    getDownloadURL, ref, uploadBytes,
} from "firebase/storage";
import { StorageBucket, firestoreDB } from "..";
import { CollectionReference, DocumentData, collection } from "firebase/firestore";

export class FirebaseBucketStorage {
    private collectionName: string;
    private collectionRef: CollectionReference<DocumentData>;
    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.collectionRef = collection(firestoreDB, this.collectionName);
    }
        /**
     * fileName - Name of the file to be saved in the server
     * fileObject - the BLOB of FILE to upload
     * fileMeta - {
     *      contentType: "image/jpeg"
     *      contentType: "image/jpg"
     *      contentType: "image/png"
     *      contentType: "image/..."
     * }
     */

}

export const StorageFolderStructure = {
    PROFILE_PICTURE: "ProfilePic",
}
