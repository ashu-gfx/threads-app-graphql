"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
// queries.js
exports.queries = `#graphql
  _dummy: String
  getUserToken(email: String!, password: String!): String
  getCurrentLoggedInUser: User
`;
