module.exports = {
  env: 'production',
  db: process.env.OPENSHIFT_MONGODB_DB_URL + 'textao',
  port: process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || 8080,
  address: process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || 'localhost',
  domain: process.env.OPENSHIFT_APP_DNS,
  mongoUser: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
  mongoPass: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
};
