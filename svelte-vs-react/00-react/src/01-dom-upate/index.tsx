import React from "react";

interface UserProfile {
  name: string;
  lastname: string;
  address: string;
}

export const DomUpdate = () => {
  const [userProfile, setUserProfile] = React.useState<UserProfile>({
    name: "",
    lastname: "",
    address: "",
  });
  const [fullname, setFullname] = React.useState("");

  React.useEffect(() => {
    setFullname(
      `${userProfile.name} ${userProfile.lastname}  ${Math.random()}`
    );
  }, [userProfile.name, userProfile.lastname]);

  console.log(`Hey Rerender going on !! ${Date.now()}`);

  const updateFieldHandler =
    (fieldname: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserProfile({
        ...userProfile,
        [fieldname]: e.target.value,
      });
    };

  return (
    <>
      <h1>01 DOM Update</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          placeholder="name"
          value={userProfile.name}
          onChange={updateFieldHandler("name")}
        />
        <input
          placeholder="lastname"
          value={userProfile.lastname}
          onChange={updateFieldHandler("lastname")}
        />
        <input
          placeholder="address"
          value={userProfile.address}
          onChange={updateFieldHandler("address")}
        />
        Fullname: {fullname}
      </div>
    </>
  );
};
