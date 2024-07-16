const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteUrlProject_Id: String(import.meta.env.VITE_PROJECT_ID),
    appwriteUrlDatabaseID: String(import.meta.env.VITE_DATABASE_ID),
    appwriteUrlCollectionID: String(import.meta.env.VITE_COLLECTION),
    appwriteUrlBucketId: String(import.meta.env.VITE_BUCKET_ID),


}


export default conf;