# Firebase Setup Guide for Contact Form

This guide will help you configure your Firebase project to properly accept form submissions from the contact form.

## 1. Firebase Security Rules

The current error with form submissions is likely due to Firestore security rules being too restrictive. By default, Firebase requires authentication for both read and write operations.

To allow the contact form to submit data without authentication, you need to update your Firestore security rules:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on "Firestore Database" in the left sidebar
4. Go to the "Rules" tab
5. Replace the existing rules with the following:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to certain collections
    match /projects/{document=**} {
      allow read: if true;
    }
    
    // Allow write access only to the contact submissions collection
    match /contactSubmissions/{submission} {
      allow write: if true;
      allow read: if false; // Only admins should read these (via Firebase Console)
    }
    
    // For connection testing
    match /connectionTest/{document=**} {
      allow read, write: if true;
    }
    
    // Secure all other collections
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

6. Click "Publish" to apply these rules

These rules allow:
- Write operations (only) to the contactSubmissions collection
- Both read and write to the connectionTest collection (for diagnostic purposes)
- Public read access to the projects collection (if you decide to load projects from Firebase)
- No access to any other collections for security

## 2. Create Required Collections

For the contact form to work, you need to ensure the `contactSubmissions` collection exists:

1. In the Firestore Database console, go to the "Data" tab
2. Click "Start collection" (if you don't have any collections yet) or "Add collection"
3. Enter "contactSubmissions" as the Collection ID
4. You'll be prompted to add a document, but you can skip this step by clicking "Cancel"

## 3. Setting Up Firebase Emulator (Optional - For Development)

For local development, you can use Firebase Emulator Suite:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase in your project: `firebase init`
3. Select Firestore emulator during setup
4. Start the emulator: `firebase emulators:start`
5. In your `firebase.ts` file, uncomment the line:
   ```javascript
   // connectFirestoreEmulator(db, 'localhost', 8080);
   ```

## 4. Testing the Form

Once you've set up the security rules and necessary collections:

1. Fill out the contact form
2. Submit the form
3. If successful, you should see the success toast notification
4. Verify in the Firebase Console that the submission was recorded in the contactSubmissions collection

## Troubleshooting

If you continue to experience issues:

1. Check the browser console for specific errors
2. Ensure your Firebase project is properly set up with Firestore enabled
3. Verify that your API keys and project configuration are correct
4. Check that your Firebase project billing plan allows for the operations you're attempting

## Security Considerations

The current setup allows anyone to submit data to your contactSubmissions collection. This is generally acceptable for a contact form, but be aware of potential spam or abuse.

For a production environment, consider adding additional security measures:
- Rate limiting submissions from the same IP address
- Adding a CAPTCHA to the form
- Implementing server-side validation