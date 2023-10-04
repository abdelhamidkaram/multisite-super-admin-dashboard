import BaseServices from "./BaseServices";

class SitesServices extends BaseServices {
  constructor() {
    super("sites", "addSite", "deleteSite", null);
  }

  // site
  getSitesByUser = (id) => this.getData("sites/byUser", { id: id });
  getSiteDetails = (siteId) =>
    this.getData("sites/details", {site_id: siteId });
  getDisableSite = (siteId) =>
    this.getData("sites/disableSite", { site_id: siteId });
  getEnableSite = (siteId) =>
    this.getData("sites/enableSite", { site_id: siteId });
  getSpamSite = (siteId) => this.getData("sites/spamSite", { site_id: siteId });

  updateSiteName = (name, siteId) =>
    this.putData("sites/updateName", { site_id: siteId, title: name });
  updateDomain = (domain, siteId) =>
    this.putData("sites/updateDomain", { site_id: siteId, domain: domain });
  updateSubdomain = (subDomain, siteId) =>
    this.putData("sites/updateSubDomain", {
      site_id: siteId,
      sub_domain: subDomain,
    });
  updatePath = (path, siteId) =>
    this.putData("sites/updatePath", { site_id: siteId, sub_domain: path });

  // sites analytics
  lastUpdateSites = () => this.getData("sites/lastUpdatesSites");
  mostActiveSites = () => this.getData("sites/mostActiveSites");
  siteCounter = () => this.getData("sites/countSites");

  //users of sites
  registerUser = (userName, password, email) =>
    this.postData("sites/users/newUser", {
      user_name: userName,
      password: password,
      email: email,
    });
  addUserToSite = (role, siteId, userId) =>
    this.postData("sites/users", {
      role: role,
      site_id: siteId,
      user_id: userId,
    });

  changeRoleForUser = (role, siteId, userId) =>
    this.postData("sites/users/changeRole", {
      role: role,
      site_id: siteId,
      user_id: userId,
    });

  removeUser = (siteId, user_id) =>
    this.deleteData("sites/users", {
      site_id: siteId,
      user_id: user_id,
    });
  getAllUser = (siteId) => this.getData("sites/users/", { site_id: siteId });
}
export default SitesServices;
