/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import RegisterStudents from "views/Register";
import CompanyForm from "views/Postjob";
import JobDetailsPage from "views/Fulltime";
import Fulltime from "views/Fulltime";

var routes = [
  {
    path: "/dashboard",
    name: "Companies",
    icon: "nc-icon nc-shop",
    component: <Dashboard />,
    layout: "/admin",
  },

  {
    path: "/register",
    name: "Register",
    icon: "nc-single-02",
    component: <RegisterStudents />,
    layout: "/admin",
  },
  {
    path: "/postjob",
    name: "Post Job",
    icon: "nc-briefcase-24",
    component: <CompanyForm />,
    layout: "/admin",
  },

  {
    path: "/fulltime",
    name: "Full Time",
    icon: "nc-briefcase-24",
    component: <Fulltime />,
    layout: "/admin",
  },
 
];
export default routes;
