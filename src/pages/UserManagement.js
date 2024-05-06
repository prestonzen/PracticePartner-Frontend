import axios from "axios";
import React, { useEffect, useState } from "react";

const BACKEND_URL=process.env.REACT_APP_BACKEND_URL;

function UserManagement() {
  const [userInfo, setUserInfo] = useState([
    {
      mail: "",
      startDate: "",
      expirationDate: "",
      subscriptionTerm: "",
      paymentStatus: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/user-management`,
          {
            withCredentials: true,
            credentials: 'include'
          }
        );
        const responseData = response.data;
        console.log(responseData);

        // responseData.forEach((user) => {
        //   // console.log(user);
        //   setUserInfo((prevUsers) => [
        //     ...prevUsers,
        //     user,
        //   ]);
        // });
        setUserInfo(responseData.users);
        setActiveUsers(responseData.activeUsers);
        setInactiveUsers(responseData.inactiveUsers);
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      } finally {
        setLoading(false);
      }
    };
    // console.log(userInfo);
    // Call the fetchChatMessages function when the component mounts
    fetchUsers(); 

  }, []);
  return (
    <main className="flex flex-col self-stretch m-4 p-4 w-[90%] max-md:w-[98%] text-2xl leading-7 whitespace-nowrap rounded-xl bg-secondary text-slate-50">
      <header className="flex gap-2.5 self-start text-slate-900">
        <StatisticBox label="Active Users" value={activeUsers} />
        <StatisticBox label="Inactive Users" value={inactiveUsers} />
      </header>
      <section>
        <h2 className="mt-4 max-md:max-w-full">Users</h2>
        {!loading && <UserTable users={userInfo} />}
      </section>
    </main>
  );
}

function StatisticBox({ label, value }) {
  return (
    <div className="flex flex-col flex-1 justify-center p-2 bg-primary-container rounded-xl">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

function UserTable({ users }) {
  return (
    <div className="mt-2 text-base font-medium leading-6 text-center max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-0">
        <UserTableColumn columnTitle="Email" />
        <UserTableColumn columnTitle="Start Date" />
        <UserTableColumn columnTitle="Expiration Date" />
        <UserTableColumn columnTitle="Subscription Term" />
        <UserTableColumn columnTitle="Payment Status" />
        <UserTableColumn columnTitle="Action" />
      </div>
      {users.map((user) => (
        <div key={user.mail} className="flex gap-0">
          <UserTableDataColumn content={user.mail} />
          <UserTableDataColumn content={user.startDate} />
          <UserTableDataColumn content={user.expirationDate} />
          <UserTableDataColumn content={user.subscriptionTerm} />
          <UserTableDataColumn content={user.paymentStatus} />
          <ActionColumn />
        </div>
      ))}
    </div>
  );
}

function UserTableColumn({ columnTitle }) {
  return (
    <div className="flex flex-col flex-1">
      <div>{columnTitle}</div>
      {/* Repeat the div below based on your user data */}
      {/* <div className="shrink-0 h-10 border border-solid bg-transparent border-slate-200" /> */}
    </div>
  );
}

function UserTableDataColumn({ content }) {
  return (
    <div className="flex flex-col flex-1">
      {/* Repeat the div below based on your user data */}
      <div className="shrink-0 h-10 border border-solid bg-transparent border-slate-200">
        {content}
      </div>
    </div>
  );
}

function ActionColumn() {
  return (
    <div className="flex flex-col flex-1 text-slate-900">
      {/* <div className="text-slate-50">Action</div> */}
      {/* Repeat this block based on your user data */}
      <div className="flex gap-1 justify-between px-1 py-2">
        <button className="grow justify-center bg-primary-container rounded-xl">
          Edit
        </button>
        <button className="grow justify-center bg-primary-container rounded-xl">
          Suspend
        </button>
      </div>
    </div>
  );
}

export default UserManagement;
