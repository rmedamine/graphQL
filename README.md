# GraphQL Profile Dashboard

Lien :  https://rmedamine.github.io/graphQL/

## 📝 Description
This project is an interactive profile dashboard developed for Zone01, utilizing GraphQL to fetch and display student personal data. The application allows students to visualize their statistics, XP, and academic progress in a dynamic and interactive manner.

## ✨ Features

### 🔐 Authentication
- Secure login system with JWT
- Support for both username:password and email:password
- Authentication error handling
- Secure logout functionality

### 📊 Data Visualization
- **Personal Statistics**
  - Total XP and progression
  - Grades and audits
  - Acquired skills
  - Success ratio

- **Interactive Graphs**
  - XP progression over time
  - Project success ratio
  - Pool statistics
  - Custom SVG visualizations

## 🛠️ Technologies
- **Frontend**
  - JavaScript (ES6+)
  - HTML5 & CSS3
  - SVG for graphs

- **Backend & API**
  - GraphQL
  - JWT Authentication
  - REST API

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://learn.zone01oujda.ma/git/rmohamme/graphql
```

2. **Configuration**
```bash
cd graphql
```

3. **Launch the application**
```bash
# Open index.html in your browser
# or use a local server
```

## 💻 Usage

1. **Login**
   - Access the login page
   - Enter your Zone01 credentials
   - Validate to access your profile

2. **Navigation**
   - Explore your statistics
   - Interact with graphs
   - Check your progress

## 🔍 GraphQL API

### Endpoints
- GraphQL API: `https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql`
- Authentication: `https://learn.zone01oujda.ma/api/auth/signin`

### Query Example
```graphql
{
  user {
    id
    login
    transaction {
      amount
      type
    }
  }
}
```

## 📁 Project Structure
```
graphQL/
├── src/
│   ├── js/
│   │   ├── login.js        # Authentication
│   │   ├── allcard.js      # Data display
│   │   ├── header.js       # Navigation
│   │   └── getJWT.js       # JWT management
│   ├── style/
│   │   └── main.css        # Styles
│   └── queries/            # GraphQL queries
├── index.html
└── home.js
```

## 🔒 Security
- User input validation
- XSS protection
- Secure token management
- Robust authentication

## 👨‍💻 Author
**raoui mohammed amine** - Zone01 Student

---
<div align="center">
Made with ❤️ at Zone01
</div> 
