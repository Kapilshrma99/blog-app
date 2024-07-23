import conf from "../config/conf";
import{ Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteUrlProject_Id)
        this.databases=new Databases
        this.bucket=new Storage(this.client);

    }
    async createPost({title, slug, content,featuredImage,status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteUrlDatabaseID, conf.appwriteUrlCollectionID, slug, {
                title, 
                content,
                featuredImage,
                status, 
                userId,
            })
        } catch (error) {
            console.log(error);
        }
    }
    async updatePost(slug,{title, content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteUrlDatabaseID, conf.appwriteUrlCollectionID, slug, {
                title, 
                content,
                featuredImage,
                status, 
            })
        } catch (error) {
            console.log(error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteUrlDatabaseID, conf.appwriteUrlCollectionID, slug)
            return true
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteUrlDatabaseID, conf.appwriteUrlCollectionID, slug)
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteUrlDatabaseID, conf.appwriteUrlCollectionID,queries)
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    //file upload service
    async upploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteUrlBucketId,ID.unique(),file);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteUrlBucketId,fileId)
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }
    getFilePreview(fileId){
        return this.getFilePreview(conf.appwriteUrlBucketId,fileId)
    }
}


const service = new Service()
export default service;