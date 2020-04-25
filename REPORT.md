# OAuth Comparative Analysis

## OAuth Provider Name: Linkedin

### Research Conducted By: Sue Doclos, Tammy Ip, Dianna Kim, Shubham Majumdar

### Overall Score and Comments
#### Score (Out of 10): 8
#### General Comments
Because we are depending on a third party to validate once we have a token, we can store the token and use it for future verification or constantly refresh the token.

#### Pros
* offloading the authorization and authentication to a third party
* Plug and play integration
* "Glide path" (options for straight-forward uses cases, SDK for customization, and API for non-straightforward cases)
* Versioning of serverless components
* Extensive documentation

#### Cons
* Compliance Transparency: SOC2 & HIPAA (not sharing reports of compliance)
* Quota and service limit transparency (handing over access to a third party)
* Fine-grained authorization control (role-based delegation stops at admin + client)

### Ratings and Reviews
#### Documentation
It looked straightforward, but we couldn't get it working.

#### Systems Requirements
There don't appear to be any new system requirements than what was already required to get a full stack web app going with Node and Mongo. 

#### Ramp-Up Projections
It would probably take a day to become productive if the junior developers know what they're doing. If they don't know what they're doing, it might take a week...or two.

#### Community Support and Adoption levels
Looking at several reviews online, it looks like Auth0 has good ratings. The reviews that I looked at had Auth0 above a 4 out of 5 stars. According to Stackshare, 185 companies reporting using Auth0 in their tech stacks.. Some of them include AMD, Vizzbuzz, Drywall.io, and TBR.

There seem to be more pros than cons. The pros and cons listed above were taken from a review of Auth0.

### Links and Resources
* [Aut0 Docs](https://auth0.com/docs/connections/social/linkedin#1-create-your-app-in-linkedin)
* [LInkedIn Developer Tutorial](https://www.linkedin.com/developers/)

### Code Demos
* [code repository](https://github.com/Shubham-401n16/Lab12-OAuth/)
* [Heroku App](https://lab12-oauth-linkedin.herokuapp.com/)

### Operating Instructions
- create an .env file on the top level of this repo defining the following variables:

```
PORT=3000
CLIENT_ID=<insert client id here>
CLIENT_SECRET=<insert client secret here>
TOKEN_SERVER=https://www.linkedin.com/oauth/v2/accessToken
REMOTEAPI=https://api.linkedin.com/v2/me
API_SERVER=http://localhost:3000/oauth

```
