import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavBar";
import Icon from "@material-tailwind/react/Icon";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-auto flex-row flex-nowrap shadow-xl bg-gray-700 w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="http://iuh.edu.vn/"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <h1 className="text-xl font-serif font-bold leading-normal mt-0 mb-2 no-underline text-red-500">
              TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP
            </h1>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full overflow-hidden flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  exact
                  to="/dashboard"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="dashboard" size="2xl" />
                  Trang Chủ
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  exact
                  to="/science"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="settings" size="2xl" />
                  Khoa
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  exact
                  to="/major"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="settings" size="2xl" />
                  Ngành
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  exact
                  to="/students"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="settings" size="2xl" />
                  Sinh Viên
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  exact
                  to="/planstudy"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="toc" size="2xl" />
                  Kế Hoạch Niên Giám
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  exact
                  to="/semester"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="toc" size="2xl" />
                  Học Kỳ
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  exact
                  to="/courses"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="toc" size="2xl" />
                  Môn Học
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  exact
                  to="/maps"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                  activeClassName="no-underline bg-blue-900 hover:bg-blue-900 text-white"
                >
                  <Icon name="map" size="2xl" />
                  Maps
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 no-underline  text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  <Icon name="fingerprint" size="2xl" />
                  Login
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 no-underline text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  <Icon name="list_alt" size="2xl" />
                  Register
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 no-underline text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  <Icon name="web" size="2xl" />
                  Landing Page
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 no-underline text-gray-700">
                <a
                  href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  <Icon name="account_circle" size="2xl" />
                  Profile Page
                </a>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr no-underline from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <a
                  href="https://material-tailwind.com/documentation/quick-start"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  <Icon name="description" size="2xl" />
                  Documentation
                </a>
              </li>
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a
                  href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 text-sm no-underline text-gray-100 font-light px-4 py-3 rounded-lg hover:bg-gray-800 focus:bg-blue-900 hover:text-blue-500 focus:text-white transition-all"
                >
                  Free Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
