const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-5 flex justify-between items-center ">
      <h1 className="text-2xl">My Application</h1>
      <select name="" id="" className=" bg-gray-800 px-10">
        <option value="en">English</option>
        <option value="te">Telugu</option>
      </select>
    </header>
  );
};

export default Header;
