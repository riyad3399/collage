import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const menuItems = [
  {
    path: "/",
    name: "হোম",
  },
  {
    path: "/organization ",
    name: "প্রতিষ্ঠানের তথ্য",
    dropdownItems: [
      {
        path: "/history-of-the-institution",
        name: "প্রতিষ্ঠানের ইতিহাস",
      },
      {
        path: "/aims-and-objectives",
        name: "লক্ষ্য ও উদ্দেশ্য",
      },
      {
        path: "/organizational-structure",
        name: "সাংগঠনিক কাঠামো",
      },
      {
        path: "/location-map",
        name: "অবস্থান মানচিত্র",
      },
    ],
  },
  {
    path: "/information",
    name: "প্রশাসন",
    dropdownItems: [
      {
        path: "/chairman-Message",
        name: "চেয়ারম্যানের বার্তা",
      },
      {
        path: "/head-teacher-message",
        name: "প্রধান শিক্ষকের বাণী",
      },
      {
        path: "/faculty-information",
        name: "শিক্ষকমন্ডলীর তথ্য",
      },
      {
        path: "/employee-information",
        name: "কর্মচারীদের তথ্য",
      },
    ],
  },
  {
    path: "/academic",
    name: "একাডেমিক",
    dropdownItems: [
      {
        path: "/notice",
        name: "নোটিশ",
      },
      {
        path: "/class-routine",
        name: "ক্লাস রুটিন ",
      },
      {
        path: "/test-routine",
        name: "পরীক্ষা রুটিন ",
      },
      {
        path: "/syllabus-and-syllabus",
        name: "সিলেবাস ও পাঠ্যতালিকা",
      },
      {
        path: "/education-calendar",
        name: "শিক্ষা বর্ষপঞ্জি",
      },
      {
        path: "/prospectus",
        name: "প্রসপেক্টাস",
      },
    ],
  },
  {
    path: "/notice",
    name: "বিজ্ঞপ্তি",
    dropdownItems: [
      {
        path: "/press-release",
        name: "প্রেস বিজ্ঞপ্তি",
      },
    ],
  },
  {
    path: "/e-learning",
    name: "ই-লার্নিং",
    dropdownItems: [
      {
        path: "/live-class",
        name: "লাইভ ক্লাশ",
      },
      {
        path: "/video-class",
        name: "ভিডিও ক্লাশ",
      },
      {
        path: "/suggestion",
        name: "সাজেশন",
      },
      {
        path: "/parliament-tv",
        name: "সংসদ টিভি",
      },
    ],
  },
  {
    path: "/result",
    name: "ফলাফল",
    dropdownItems: [
      {
        path: "/academic-results",
        name: "একাডেমিক ফলাফল",
      },
      {
        path: "/board-link",
        name: "বোর্ড লিংক",
      },
      {
        path: "/board-results",
        name: "বোর্ড ফলাফল",
      },
    ],
  },
  {
    path: "/gallery",
    name: "গ্যালারী",
    dropdownItems: [
      {
        path: "/photo-gallery",
        name: "ফটো গ্যালারী",
      },
      {
        path: "/video-gallery",
        name: "ভিডিও গ্যালারী",
      },
    ],
  },
  {
    path: "/communication",
    name: "যোগাযোগ",
  },
  {
    path: "/admission",
    name: "ভর্তি",
    dropdownItems: [
      {
        path: "/admission-information",
        name: "ভর্তির তথ্য",
      },
    ],
  },
  {
    path: "/golden-jubilee-corner",
    name: "সুবর্ণজয়ন্তী কর্ণার",
  },
];

const NavbarMenuList = () => {
  return (
    <div className="flex justify-between border-t border-red-400">
      {menuItems.map((item, i) => (
        <div
          key={i}
          className={`dropdown ${
            item.dropdownItems ? "dropdown-hover" : "drop-shadow-none"
          } text-white p-2 border-l border-red-400`}
        >
          <Link className="text-base flex ">
            {item.name}
            {item.dropdownItems && <RiArrowDropDownLine size={24} />}
          </Link>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu menu-lg shadow bg-red-700 w-52"
          >
            {item.dropdownItems &&
              item.dropdownItems.map((dropdown, i) => (
                <Link
                  className="border-b border-red-400 text-base p-[6px]"
                  key={i}
                  to={dropdown.path}
                >
                  {dropdown.name}
                </Link>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenuList;
