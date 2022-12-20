import { Dropdown, IUserProps, UserAvatar as SBTUser } from "../../src";

const users1: Array<IUserProps> = [
  { firstName: "سجاد", lastName: "موسوی" },
  { firstName: "حسن", lastName: "حسینی" },
  { firstName: "گابریل", lastName: "سیمفروش", img: "" }
];
const avatarSrc = "https://gravatar.com/avatar/29e0ab4c9d37ce7294ec6d333f43ffe4?s=400&d=monsterid&r=x";

const users2: Array<IUserProps> = [
  {
    firstName: "سجاد",
    lastName: "موسوی",
    img: avatarSrc
  },
  {
    firstName: "حسن",
    lastName: "حسینی",
    img: avatarSrc
  },
  {
    firstName: "گابریل",
    lastName: "اکبری",
    img: avatarSrc
  },
  {
    firstName: "ناتاشا",
    lastName: "رفسنجانی",
    img: avatarSrc
  }
];

export const users3: Array<IUserProps> = [
  { firstName: "سجاد", lastName: "موسوی" },
  { firstName: "حسن", lastName: "حسینی" },
  { firstName: "ژاله", lastName: "کبیری" },
  { firstName: "اکبر", lastName: "فرهادی" }
];

const roles = (
  <Dropdown.Menu align="right">
    <Dropdown.MenuItem>فقط مشاهده</Dropdown.MenuItem>
    <Dropdown.MenuItem>ویرایشگر</Dropdown.MenuItem>
  </Dropdown.Menu>
);

const User = () => (
  <>
    <div className="mb-10">
      <SBTUser className="test" firstName="هومن" lastName="حسنی" />
    </div>
    <div className="mb-10">
      <SBTUser firstName="هومن" lastName="حسنی" role="ویرایشگر" img={avatarSrc} roleList={roles} />
    </div>
    <div className="mb-10">
      <SBTUser firstName="سجاد" lastName="موسوی" role="ویرایشگر" />
    </div>
    <div className="mb-10">
      <SBTUser firstName="اصغر" lastName="اکبری" roleList={roles} />
    </div>
    <h1 className="pb-3">MULTIPLE USERS</h1>
    <div className="my-20">
      <SBTUser maxCount={3} users={users1} />
    </div>
    <div className="mb-20">
      <SBTUser maxCount={4} users={users2} />
    </div>
    <div className="mb-20">
      <SBTUser maxCount={3} users={users3} />
    </div>
    <div className="mb-20">
      with allUsersCount :
      <SBTUser className="mt-2" allUsersCount={12} maxCount={3} users={users3} />
    </div>
    {/*<div className="mb-20">*/}
    {/*  with allUsersCount :*/}
    {/*  <SBTUser className="mt-2" allUsersCount={12} users={users3} />*/}
    {/*</div>*/}
  </>
);

export default User;
