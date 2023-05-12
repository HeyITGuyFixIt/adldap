import adldap from './index.js'; 
// import * as log4js from 'log4js';
// const logger = log4js.default.getLogger();
// logger.level = 'debug';
const adldapFactory = adldap();
const adldapFactoryOptions = {
    searchUser: `CN=Administrator,CN=Users,DC=local,DC=townley,DC=net`,
    searchUserPass: "Tango15",
    ldapjs: {
        url: 'ldap://local.townley.net',
        searchBase: "CN=Users,DC=local,DC=townley,DC=net",
        scope: 'sub'
    }
};
let adldapClient = adldapFactory(adldapFactoryOptions);
await adldapClient.bind()
.then(() => {
    return adldapClient.findUser('Christian Sirolli');
})
.then(async (user) => {
    console.log(user);
    return adldapClient.unbind()
})
.catch((e) => {
    console.error(e, '\n\nGo to this site to decode LDAP errors:\nhttps://support.infrasightlabs.com/troubleshooting/common-error-codes-for-active-directory-authentication/')
});
