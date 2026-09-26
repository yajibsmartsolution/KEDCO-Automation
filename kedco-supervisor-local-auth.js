/* Public GitHub Pages preview shim.
   No passwords, password hashes, privileged sessions, or local supervisor
   credentials are published in this deployment package. */
(() => {
  "use strict";
  window.KEDCO_PUBLIC_PREVIEW = true;
  window.KEDCO_SUPERVISOR_LOCAL_AUTH = {
    version: "github-public-preview-v1",
    accounts: [],
    currentUser: () => null,
    setActiveUser: () => null,
    logout: () => {},
    protectSupervisorPage: () => true,
    installAccounts: () => {}
  };
})();
