const roleNameById: Record<string, string> = {
  "1": "Admin",
  "2": "Broker",
  "3": "Carrier Partner",
};
const roleIds: string[] = ["1", "2", "3"];
export const companies = [
  { id: "1", name: "Inter", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "2", name: "Summit Risk Advisors", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "3", name: "Milan", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "4", name: "Technology Real", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "5", name: "Ironclad Insurance", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "6", name: "Atlas Underwriters", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "7", name: "Northshore Brokers", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "8", name: "Pioneer Specialty", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "9", name: "BlueOak Re", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "10", name: "Crescent Assurance", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "11", name: "Lighthouse Mutual", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "12", name: "Redwood Casualty", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "13", name: "Evergreen Risk Partners", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "14", name: "Starlight Insurance Group", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "15", name: "Granite Coverage Co.", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "16", name: "Riverbend Brokers", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "17", name: "Silverline Underwriting", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
  { id: "18", name: "Horizon Reinsurance", roles: { id: roleIds[2], roleName: roleNameById[roleIds[2]] } },
  { id: "19", name: "Keystone Programs", roles: { id: roleIds[0], roleName: roleNameById[roleIds[0]] } },
  { id: "20", name: "Oakridge Assurance", roles: { id: roleIds[1], roleName: roleNameById[roleIds[1]] } },
];

export const roles = [
  {id: '1', roleName: 'Admin', companyInfo: [{id: "1", name: "Inter"}, {id: "4", name: "Technology Real"}, {id: "7", name: "Northshore Brokers"}, {id: "10", name: "Crescent Assurance"}, {id: "13", name: "Evergreen Risk Partners"}, {d: "16", name: "Riverbend Brokers"}, {id: "19", name: "Keystone Programs"}]},
  {id: '2', roleName: 'Broker', companyInfo: [{id: "2", name: "Summit Risk Advisors"}, {id: "5", name: "Ironclad Insurance"}, {id: "8", name: "Pioneer Specialty",}, {id: "11", name: "Lighthouse Mutual"}, {id: "14", name: "Starlight Insurance Group"}, {id: "17", name: "Silverline Underwriting"}, {id: "20", name: "Oakridge Assurance"}]},
  {id: '3', roleName: 'Carrier Partner', companyInfo: [{id: "3", name: "Milan"}, {id: "6", name: "Atlas Underwriters"}, {id: "9", name: "BlueOak Re"}, {id: "12", name: "Redwood Casualty"}, {id: "15", name: "Granite Coverage Co."}, {id: "18", name: "Horizon Reinsurance"}]}
]

export const users = [
  {
    id: 2,
    name: "Maria",
    age: 30,
    city: "Saint Petersburg",
    interests: ["yoga", "painting", "cooking", "traveling"]
  },
  {
    id: 3,
    name: "Ivan",
    age: 28,
    city: "Novosibirsk",
    interests: ["sports", "music", "photography"]
  },
  {
    id: 4,
    name: "Elena",
    age: 22,
    city: "Kazan",
    interests: ["dancing", "reading", "blogging", "swimming"]
  },
  {
    id: 5,
    name: "Dmitry",
    age: 35,
    city: "Yekaterinburg",
    interests: ["cycling", "chess", "movies"]
  }
]