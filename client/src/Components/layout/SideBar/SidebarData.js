import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Trang Chủ",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Lịch Học ",
    path: "/timetable",
    icon: <BsIcons.BsCalendarCheck />,
    cName: "nav-text",
  },
  {
    title: "Kết Quả Học Tập",
    path: "/learnresult",
    icon: <GiIcons.GiOpenBook />,
    cName: "nav-text",
  },
  {
    title: "Đăng Ký Học Phần",
    path: "/semester",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Tra Cứu Công Nợ",
    path: "/detb",
    icon: <FiIcons.FiDollarSign />,
    cName: "nav-text",
  },
  {
    title: "Thanh Toán Online",
    path: "/pay",
    icon: <FaIcons.FaCommentsDollar />,
    cName: "nav-text",
  },
  {
    title: "Tiến Độ Học Tập",
    path: "#",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
