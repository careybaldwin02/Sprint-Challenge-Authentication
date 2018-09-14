<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Using sessions allows data to persist in an application for a specified period of time.  

2. What does bcrypt do to help us store passwords in a secure manner.

bcrypt is a tool for hashing sensitive data so that passwords etc. can be encrypted and not readily accessible to hackers. Sensitive data should never be stored as plain text.  

3. What does bcrypt do to slow down attackers?

bcrypt makes it much more difficult to decifer a password.  It does this by hashing the password multiple times (frequency specified by developer).  Hacking devices can try a series of combinations in order to 'guess' a password, but if the password has been converted several times, the number of possible combinations becomes extremely large, so large that it might take millions of years to try all of the combinations. 

4. What are the three parts of the JSON Web Token?

A JSON web token consists of a header a payload and a signature.

Header:  the header has two parts, the type of token (JWT) and the hashing algorithm being used. 

Payload:  The payload is the portion that contains the information to be stored. This information is often information about the user who is accessing the system.  

Signature:  This part of the token contains the encoded information from the header and the payload which is then locked with a secret.
