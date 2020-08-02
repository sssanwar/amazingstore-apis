# Amazing Store APIs

This is the API backend for Amazing Store solution. The project is designed in such way so that it can be deployed as a serverless solution in AWS Lambda. The demo solution is hosted in AWS Lambda.

### Tools & Frameworks Used

Below are tools & frameworks used in creating the backend APIs:

- Node JS 12.x
- Express JS
- GraphQL
- Jest
- Typescript
- Serverless HTTP
- Serverless Framework (SLS)
- Serverless Offline
- AWS Lambda

### Design

The discount rule is designed so that the parameters can be changed, as evidenced in the data file 'rawdata.db.ts'. It can also be stored in database if necessary. For instance, the _Buy 2 Get 1_ Free rule can have the _number of bought item required_ and _number of free item_ configured and stored in database. The same applies to the rule description, which utilises templating mechanism.

The same applies to all other rules. Currently there are 3 discount rules created:

- Group Price, i.e. Buy 2 for \$1500
- Item Count, i.e. Buy 4 pay for 3, OR Buy 2 get 1 free
- Nth Percent, i.e. Fifth item gets discount of 20%

To add a completely new rule, we can simply create a new class in the model and implement the **DiscountRule** abstract class.

### Running Locally

Please follow these steps to run this project locally:

1. Clone or download this project
2. Install yarn
3. Go to the directory and type in **yarn install**
4. Type in **sls offline** to run this project as an offline AWS Lambda equivalent
5. By config, the project will be hosted on port 3100
6. Follow the steps in **amazingstore-client**, to run the React-based client
