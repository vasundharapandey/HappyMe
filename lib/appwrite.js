import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.vee.aora",
    projectId: "6633d06e0016a882c2ce",
    databaseId: "6633d400000dcf1c1e19",
    userCollectionId: "6633d45c00290e8e768d",
    videoCollectionId: "6633d5850020928e5dbe",
    storageId: '664831d8003ba9f9c8a4',
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      newAccount.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  // Sign In
  export async function signIn(email, password) {
    try {
      //const session = await account.createEmailPasswordSession(email, password);
      const session1 = account.createEmailSession('vasundharapandey99@gmail.com', '123123123');

      session1.then(function (response) {
          console.log(response); // Success
      }, function (error) {
          console.log(error); // Failure
      });
      return session1;
    } catch (error) {
      throw new Error(error);
    }
  }