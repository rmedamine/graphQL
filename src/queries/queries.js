export const queries = ` query {
    user {
    id
    login
    email
    campus
    lastName
    firstName
    auditRatio
    totalUp
    totalUpBonus
    totalDown
    level:events (where:{event:{path:{_eq:"/oujda/module"}}}){
        level
      }
      
    sklis: transactions(
      distinct_on: type 
      where: { type: { _like: "skill_%" } }
      order_by: [{ type: asc }, { amount: desc }]
    ) {
      id
      type
      amount
    }
      
    xpProgre: transactions(
          where: {
            _and: [
              { type: { _eq: "xp" } }
              { eventId: { _eq: 41 } }
               
            ]
          }
        ) {
          type
          amount
          path
          createdAt
          eventId
        event{
          object{
            name
          }
        }
          object {
             
            type
            name
          }
        }
 totalXp: transactions_aggregate(
    where: {
      _and: [
        { type: { _eq: "xp" } }
        { eventId: { _eq: 41 } }
      ]
    }
  ) {
    aggregate {
      sum {
        amount
      }
    }
  } 
  }
}
`
