import React from "react";

function UserManagement() {
  return (
    <main className="flex flex-col self-stretch m-4 p-4 w-[90%] max-md:w-[98%] text-2xl leading-7 whitespace-nowrap rounded-xl bg-secondary text-slate-50">
      <header className="flex gap-2.5 self-start text-slate-900">
        <StatisticBox label="Active Users" value="###" />
        <StatisticBox label="Inactive Users" value="###" />
      </header>
      <section>
        <h2 className="mt-4 max-md:max-w-full">Users</h2>
        <UserTable />
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

function UserTable() {
    const rows = [
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
      { email: "user@example.com", startDate: "2023-01-01", expirationDate: "2024-01-01", subscriptionTerm: "1 Year", paymentStatus: "Paid" },
      { email: "anotheruser@example.com", startDate: "2022-12-01", expirationDate: "2023-12-01", subscriptionTerm: "6 Months", paymentStatus: "Unpaid" },
    ];
  
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
        {rows.map((user, index) => (
          <div key={index} className="flex gap-0">
            <UserTableDataColumn content={user.email} />
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
        <div className="shrink-0 h-10 border border-solid bg-transparent border-slate-200" >
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
        <button className="grow justify-center bg-primary-container rounded-xl">Edit</button>
        <button className="grow justify-center bg-primary-container rounded-xl">Suspend</button>
      </div>
    </div>
  );
}

export default UserManagement;